import { DataSource } from "typeorm";
import { UserSchema } from "../schemas/userSchema";
import { HoroscopeHistorySchema } from "../schemas/horoscopeHistorySchema";
import * as dotenv from "dotenv";
dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: true,
  entities: [UserSchema, HoroscopeHistorySchema],
});
