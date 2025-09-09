import { EntitySchema } from "typeorm";
import { HoroscopeHistory } from "../models/horoscopeHistory";

export const HoroscopeHistorySchema = new EntitySchema<HoroscopeHistory>({
  name: "HoroscopeHistory",
  target: HoroscopeHistory,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    date: {
      type: Date,
    },
    horoscopeText: {
      type: String,
    },
  },
  relations: {
    user: {
      type: "many-to-one",
      target: "User",
    },
  },
});
