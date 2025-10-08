import { trapCatalog } from "../data/traps.js";
import { rarityConfig } from "../data/rarity.js";
import { randomFrom } from "../utils/random.js";

export function generateTrap(rarityKey) {
  const filtered = rarityKey ? trapCatalog.filter((trap) => trap.rarity === rarityKey) : trapCatalog;
  const pool = filtered.length ? filtered : trapCatalog;
  const choice = randomFrom(pool);
  return choice ? { ...choice } : null;
}

export function formatTrapLog(trap) {
  if (!trap) {
    return "No traps stirred within the crystalline halls.";
  }

  const rarity = rarityConfig[trap.rarity] ?? rarityConfig.common;
  return `A ${rarity.label.toLowerCase()} trap called ${trap.name} was spotted before it sprung.`;
}
