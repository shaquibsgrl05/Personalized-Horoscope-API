export const horoscopes: { [key: string]: string[] } = {
  Aries: ["Today brings new energy and opportunities for Aries!", "Aries feels confident and ready to take on challenges.", "A productive day ahead for Aries natives.", "Aries should focus on personal goals today.", "Creative energies flow freely for Aries.", "Aries may encounter unexpected good news.", "Time for Aries to make important decisions."],
  Taurus: ["Steady progress and stability guide Taurus today.", "Taurus finds comfort in routine and familiar surroundings.", "Financial matters look positive for Taurus.", "Taurus should trust their practical instincts.", "A calm and peaceful day awaits Taurus.", "Taurus may receive support from loved ones.", "Good time for Taurus to focus on health."],
  Gemini: ["Communication and networking favor Gemini today.", "Gemini's curiosity leads to interesting discoveries.", "Social connections bring opportunities for Gemini.", "Gemini should embrace their versatile nature.", "Learning something new excites Gemini today.", "Gemini may juggle multiple projects successfully.", "Intellectual pursuits satisfy Gemini's mind."],
  Cancer: ["Emotional connections deepen for Cancer today.", "Cancer finds strength in family and home.", "Intuition guides Cancer toward right choices.", "Cancer should nurture their sensitive side.", "Caring for others brings fulfillment to Cancer.", "Cancer may feel more creative than usual.", "Past memories provide comfort to Cancer."],
  Leo: ["Leo shines bright and attracts positive attention.", "Leadership opportunities present themselves to Leo.", "Leo's confidence inspires others around them.", "Creative projects flourish under Leo's touch.", "Leo should embrace their natural charisma.", "Recognition and appreciation come Leo's way.", "Leo feels generous and warm-hearted today."],
  Virgo: ["Attention to detail serves Virgo well today.", "Virgo's practical approach solves complex problems.", "Organization and planning benefit Virgo greatly.", "Virgo should trust their analytical abilities.", "Health and wellness take priority for Virgo.", "Virgo may help others with their expertise.", "Perfectionist tendencies guide Virgo positively."],
  Libra: ["Balance and harmony characterize Libra's day.", "Libra's diplomatic skills resolve conflicts smoothly.", "Aesthetic beauty appeals strongly to Libra today.", "Partnerships and relationships flourish for Libra.", "Libra should seek fairness in all dealings.", "Social gatherings bring joy to Libra.", "Libra finds peace in beautiful surroundings."],
  Scorpio: ["Intense focus and determination drive Scorpio today.", "Scorpio's intuition reveals hidden truths and secrets.", "Transformation and renewal energize Scorpio deeply.", "Scorpio should trust their powerful instincts.", "Mystery and investigation intrigue Scorpio greatly.", "Emotional depth characterizes Scorpio's interactions today.", "Scorpio may uncover something important and meaningful."],
  Sagittarius: ["Adventure and exploration call to Sagittarius today.", "Sagittarius feels optimistic about future possibilities ahead.", "Learning and teaching bring satisfaction to Sagittarius.", "Sagittarius should embrace their philosophical nature fully.", "Travel or new experiences excite Sagittarius greatly.", "Freedom and independence matter most to Sagittarius.", "Sagittarius may inspire others with their wisdom."],
  Capricorn: ["Discipline and hard work pay off for Capricorn today.", "Capricorn's ambitious nature drives them toward success.", "Responsibility and duty guide Capricorn's actions wisely.", "Capricorn should focus on long-term goals steadily.", "Achievement and recognition await patient Capricorn efforts.", "Capricorn may take on leadership responsibilities today.", "Practical matters require Capricorn's careful attention now."],
  Aquarius: ["Innovation and originality flow through Aquarius today freely.", "Aquarius feels connected to humanitarian causes and ideals.", "Technology and progress fascinate Aquarius minds greatly.", "Aquarius should embrace their unique perspective completely.", "Group activities and friendships energize Aquarius spirits.", "Aquarius may contribute to positive social change.", "Independent thinking sets Aquarius apart from others."],
  Pisces: ["Imagination and creativity inspire Pisces today beautifully.", "Pisces feels deeply connected to spiritual realms.", "Compassion and empathy guide Pisces interactions gently.", "Pisces should trust their intuitive feelings completely.", "Artistic pursuits bring fulfillment to Pisces souls.", "Pisces may experience vivid dreams and insights.", "Emotional healing flows naturally through Pisces today."]
};

export function getTodayHoroscope(sign: string): string {
  const messages = horoscopes[sign];
  if (!messages) return "No horoscope available for your sign.";
  // Return first message as "today's" horoscope
  return messages[0];
}

export function getLast7Horoscopes(sign: string): string[] {
  const messages = horoscopes[sign];
  if (!messages) return [];
  // Return up to 7 messages as historical data
  return messages.slice(0, 7);
}
