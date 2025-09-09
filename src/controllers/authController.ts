import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { AppDataSource } from "../config/db";
import { User } from "../models/user";
import { calculateZodiac } from "../services/zodiacService";
import { Request, Response } from "express";

export async function signup(req: Request, res: Response) {
  try {
    const { name, email, password, birthdate } = req.body;
    
    if (!name || !email || !password || !birthdate) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const userRepo = AppDataSource.getRepository(User);
    
    // Check if user already exists
    const existingUser = await userRepo.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // Calculate zodiac sign
    const zodiac = calculateZodiac(new Date(birthdate));
    
    // Hash password
    const passwordHash = await bcrypt.hash(password, 10);

    // Create user
    const user = userRepo.create({
      name,
      email,
      passwordHash,
      birthdate: new Date(birthdate),
      zodiacSign: zodiac
    });

    await userRepo.save(user);
    
    res.status(201).json({ 
      message: "Signup successful", 
      zodiacSign: zodiac 
    });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const userRepo = AppDataSource.getRepository(User);
    const user = await userRepo.findOne({ where: { email } });
    
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign(
      { 
        id: user.id, 
        zodiac: user.zodiacSign,
        email: user.email 
      }, 
      process.env.JWT_SECRET!,
      { expiresIn: '7d' }
    );
    
    res.json({ 
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        zodiacSign: user.zodiacSign
      }
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
