import fastify from "fastify";
import redis from "./cache/redis";
import config from "./config";
import document from "./sheets";
export const app = fastify({
    logger: true
});

app.addHook("preHandler", async (request, reply) => {
    reply.header("Access-Control-Allow-Origin", "*");
    reply.header("Access-Control-Allow-Headers", "*");
    reply.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
});

app.get('/api/leaderboard', async (req, res) => {
    if(!document.title) return res.status(503).send({ error: "Leaderboard not yet calculated. Please try again later.", success: false });
    const cached = await redis.get("wkd:leaderboard");
    if(cached) return res.send(cached);

    const sheet = document.sheetsByIndex[0];
    await sheet.loadCells("A1:L15");

    const rows = await sheet.getRows();
    const teams = rows
        .map(row => ({ points: row['Total:'] as number, name: row['Team'] as string }))
        .filter(team => team.name && team.points !== null)
        .sort((a, b) => b.points - a.points);

    const response = {
        success: true,
        data: teams,
        calculatedAt: new Date().toISOString()
    };

    redis.set("wkd:leaderboard", JSON.stringify(response), 'EX', 60 * 5);

    res.send(response);
});

app.listen(config.port);