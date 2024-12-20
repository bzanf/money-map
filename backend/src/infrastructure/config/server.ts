import express from "express";
import 'express-async-errors';
import cors from 'cors';
import router from "../../interface/routes/router";
import { errorHandler } from "../../interface/middlewares/errorHandler";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", router);
app.use(errorHandler);

const PORT = process.env.SERVER_PORT || 3000;
export async function startServer() {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });    
}