import { riddleCatalog } from "../data/riddles.js";
import { rarityConfig } from "../data/rarity.js";
import { randomFrom } from "../utils/random.js";

export function generateRiddle(rarityKey) {
  const filtered = rarityKey
    ? riddleCatalog.filter((entry) => entry.rarity === rarityKey)
    : riddleCatalog;
  const pool = filtered.length ? filtered : riddleCatalog;
  const choice = randomFrom(pool);
  return choice ? { ...choice } : null;
}

export function formatRiddleLog(riddle) {
  if (!riddle) {
    return "The maze whispered no puzzles this time.";
  }

  const rarity = rarityConfig[riddle.rarity] ?? rarityConfig.common;
  return `A ${rarity.label.toLowerCase()} riddle barred the path with the query: "${riddle.prompt}".`;
}
