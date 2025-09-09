
import "reflect-metadata";
import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { AppDataSource } from "./config/db";
import authRoutes from "./routes/authRoutes";
import horoscopeRoutes from "./routes/horoscopeRoutes";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/horoscope", horoscopeRoutes);

AppDataSource.initialize().then(() => {
  app.listen(3000, () => console.log("Server running at 3000"));
}).catch(err => console.log(err));
