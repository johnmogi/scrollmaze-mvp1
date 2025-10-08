import { relicCatalog } from "../data/relics.js";
import { rarityConfig } from "../data/rarity.js";
import { randomFrom } from "../utils/random.js";

export function generateRelic(rarityKey) {
  const filtered = rarityKey
    ? relicCatalog.filter((entry) => entry.rarity === rarityKey)
    : relicCatalog;
  const pool = filtered.length ? filtered : relicCatalog;
  const choice = randomFrom(pool);
  return choice ? { ...choice } : null;
}

export function formatRelicLog(relic) {
  if (!relic) {
    return "No relic resonated with the party this delve.";
  }

  const rarity = rarityConfig[relic.rarity] ?? rarityConfig.common;
  return `A ${rarity.label.toLowerCase()} relic surfaced: ${relic.name}.`;
}
