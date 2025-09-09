import { EntitySchema } from "typeorm";
import { User } from "../models/user";

export const UserSchema = new EntitySchema<User>({
  name: "User",
  target: User,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    passwordHash: {
      type: String,
      nullable: true, 
      default: null, 
    },
    birthdate: {
      type: Date,
       nullable: true,
    },
    zodiacSign: {
      type: String,
    },
  },
});
