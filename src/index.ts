import express, { Request, Response } from "express";
import http from "http";
import { getSystemIP } from "./utils/functions";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("🚀 ERP Backend Running...");
});

const server = http.createServer(app);

const PORT: number = Number(process.env.PORT) || 11000;
const HOST: string = getSystemIP(); 

server.listen(PORT, HOST, () => {
  console.log(`✅ Server running at http://${HOST}:${PORT}`);
});
