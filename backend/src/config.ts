import dotenv from "dotenv";
import path from "path";

dotenv.config({
    path: path.resolve(process.cwd(), ".env")
});

export default {
    port: process.env.PORT ?? 3000,

    redis: {
        host: process.env.REDIS_HOST ?? "localhost",
        port: process.env.REDIS_PORT ?? 6379,
        password: process.env.REDIS_PASSWORD ?? "",
    },

    googleSheets: {
        sheetId: process.env.SHEETS_API_ID ?? "",
        apiKey: process.env.SHEETS_API_KEY ?? "",
    }
}