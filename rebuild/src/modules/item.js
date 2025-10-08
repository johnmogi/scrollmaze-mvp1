import { itemCatalog } from "../data/items.js";
import { rarityConfig } from "../data/rarity.js";
import { randomFrom } from "../utils/random.js";

export function generateItem(rarityKey) {
  const filtered = rarityKey
    ? itemCatalog.filter((item) => item.rarity === rarityKey)
    : itemCatalog;

  const pool = filtered.length ? filtered : itemCatalog;
  const choice = randomFrom(pool);
  return choice ? { ...choice, type: choice.type ?? "utility" } : null;
}

export function formatItemLog(item) {
  if (!item) {
    return "No artifacts stirred from the vault shelves.";
  }

  const rarity = rarityConfig[item.rarity] ?? rarityConfig.common;
  return `They secured the ${rarity.label.toLowerCase()} item ${item.name}.`;
}
