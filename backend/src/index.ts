import dotenv from "dotenv";
dotenv.config();
import { startServer } from "./infrastructure/config/server";
import { connectToDatabase } from "./infrastructure/config/database";

async function start() {
    await connectToDatabase();
    startServer();
}

start();