import { rarityOrder as defaultRarityOrder } from "../data/rarity.js";
import { randomFrom } from "./random.js";

export function deckEntries(entries) {
  return entries.map(([name, rarity]) => ({ name, rarity }));
}

export function pickCards(pool, rarityKey, count, rarityOrder = defaultRarityOrder) {
  if (!Array.isArray(pool) || pool.length === 0) {
    return [];
  }

  const thresholdIndex = rarityOrder.indexOf(rarityKey);
  const eligible = thresholdIndex >= 0
    ? pool.filter((card) => rarityOrder.indexOf(card.rarity) <= thresholdIndex)
    : pool;

  const candidates = eligible.length ? [...eligible] : [...pool];
  const selection = [];

  while (selection.length < count && candidates.length) {
    const chosen = randomFrom(candidates);
    selection.push(chosen);
    const idx = candidates.indexOf(chosen);
    candidates.splice(idx, 1);
  }

  return selection;
}
