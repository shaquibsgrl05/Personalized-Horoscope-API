import { AppDataSource } from "../config/db";
import { User } from "../models/user";
import { HoroscopeHistory } from "../models/horoscopeHistory";
import { getTodayHoroscope } from "../services/horoscopeService";
import { Request, Response } from "express";

export async function getToday(req: Request, res: Response) {
  try {
    const userId = (req as any).user.id;
    const userRepo = AppDataSource.getRepository(User);
    const histRepo = AppDataSource.getRepository(HoroscopeHistory);
    
    const user = await userRepo.findOneBy({ id: userId });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const text = getTodayHoroscope(user.zodiacSign);

    // Check if today's horoscope already exists
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const existingEntry = await histRepo.findOne({
      where: {
        user: { id: userId },
        date: today
      }
    });

    // Only save if not already saved today
    if (!existingEntry) {
      const newEntry = histRepo.create({
        user,
        date: today,
        horoscopeText: text
      });
      await histRepo.save(newEntry);
    }

    res.json({ 
      horoscope: text,
      zodiacSign: user.zodiacSign,
      date: today.toISOString().split('T')[0]
    });
  } catch (error) {
    console.error("Get today horoscope error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function getHistory(req: Request, res: Response) {
  try {
    const userId = (req as any).user.id;
    const histRepo = AppDataSource.getRepository(HoroscopeHistory);
    
    const history = await histRepo.find({
      where: { user: { id: userId } },
      order: { date: "DESC" },
      take: 7,
      relations: ["user"]
    });

    const formattedHistory = history.map(entry => ({
      date: entry.date.toISOString().split('T')[0],
      horoscope: entry.horoscopeText,
      zodiacSign: entry.user.zodiacSign
    }));

    res.json({ 
      history: formattedHistory,
      count: formattedHistory.length
    });
  } catch (error) {
    console.error("Get history error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
