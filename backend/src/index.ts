import fastify from "fastify";
import redis from "./cache/redis";
import config from "./config";
import document from "./sheets";
import { GetTeamDetails } from "./types/requests";
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
    await sheet.loadCells("A1:P15");

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

app.get('/api/team/:teamName', async (req: GetTeamDetails, res) => {
    if(req.params.teamName.length < 1)
        return res.status(404).send({ error: "Team name not found.", success: false });

    if(!document.title) return res.status(503).send({ error: "Leaderboard not yet calculated. Please try again later.", success: false });
    const cached = await redis.get("wkd:leaderboard:" + req.params.teamName);
    if(cached) return res.send(cached);

    const sheet = document.sheetsByIndex[0];
    await sheet.loadCells("A1:P15");

    const rows = await sheet.getRows();
    const team = rows
        .find(team => team['Team'] === req.params.teamName);

    if(team === undefined) {
        return res.status(404).send({ error: "Team not found.", success: false });
    }

    const response = {
        success: true,
        data: {
            name: team['Team'] as string,
            kahoot: team['Trivia Kahoot'] as string,
            geoguessr: team['Geoguessr'] as string,
            wordle: team['Wordle'] as string,
            books: team['Book DDD'] as string,
            rps: team['RPS'] as string,
            smashbros: team['Smash Bros.'] as string,
            mariokart: team['Mario Kart'] as string,
            wiiTableTennis: team['Wii: Table Tennis'] as string,
            wiiPingPong: team['Wii: Ping Pong'] as string,
            wiiBowling: team['Wii: Bowling'] as string,
            dailyChallenges: team['Daily Challenges'] as string,
            womensMMBracket: team["Women's MM Bracket"] as string,
            mensMMBracket: team["Men's MM Bracket"] as string,
            dareToCare: team["Dare 2 Care Can DDD"] as string,
            total: team['Total:'] as string
        },
        calculatedAt: new Date().toISOString()
    };

    redis.set("wkd:leaderboard:" + req.params.teamName, JSON.stringify(response), 'EX', 60 * 5);

    res.send(response);
});

app.listen(config.port);