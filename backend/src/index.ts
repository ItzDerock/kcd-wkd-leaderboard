import fastify from "fastify";
import sheets from "./sheets";
export const app = fastify({
    logger: true
});

app.get('/leaderboard', async (req, res) => {
    if(!sheets.title) res.status(503).send({ error: "Leaderboard not yet calculated. Please try again later." });
});