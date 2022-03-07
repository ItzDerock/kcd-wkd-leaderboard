import dotenv from "dotenv";
import path from "path";

dotenv.config({
    path: path.resolve(process.cwd(), ".env")
});

if(!process.env.SHEETS_API_ID) {
    throw new Error("SHEETS_API_ID is not defined");
}

if(!process.env.SHEETS_API_KEY) {
    throw new Error("SHEETS_API_KEY is not defined");
}

export default {
    port: process.env.PORT ?? 3000,

    redis: {
        host: process.env.REDIS_HOST ?? "localhost",
        port: process.env.REDIS_PORT ?? "6379",
        password: process.env.REDIS_PASSWORD ?? "",
    },

    googleSheets: {
        sheetId: process.env.SHEETS_API_ID,
        apiKey: process.env.SHEETS_API_KEY,
    }
}