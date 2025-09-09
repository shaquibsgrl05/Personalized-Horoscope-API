import { getZodiacSign } from "../utils/zodiacCalc";
export function calculateZodiac(birthdate: Date): string {
  return getZodiacSign(birthdate);
}
