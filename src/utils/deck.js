import { rarityOrder as defaultRarityOrder } from "../data/rarity.js";

export function deckEntries(entries) {
  return entries.map(([name, rarity]) => ({ name, rarity }));
}

export function pickCards(pool, rarity, count, rarityOrder = defaultRarityOrder) {
  const priorityLevels = rarityOrder.slice(0, rarityOrder.indexOf(rarity) + 1);
  const filtered = pool.filter((card) => priorityLevels.includes(card.rarity));
  const selection = [];
  const poolCopy = [...(filtered.length ? filtered : pool)];

  while (selection.length < count && poolCopy.length) {
    const card = poolCopy.splice(Math.floor(Math.random() * poolCopy.length), 1)[0];
    selection.push(card);
  }

  return selection;
}
