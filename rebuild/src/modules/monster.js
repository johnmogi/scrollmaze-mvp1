import { monsterFamilies } from "../data/monsters.js";
import { rarityConfig } from "../data/rarity.js";
import { randomFrom } from "../utils/random.js";

function normalizeIndex(index) {
  const total = monsterFamilies.length;
  if (total === 0) return 0;
  return ((index % total) + total) % total;
}

function buildMonster(family, rosterEntry) {
  const rarityKey = rosterEntry.rarity;
  const rarity = rarityConfig[rarityKey] ?? rarityConfig.common;
  const dicePool = family.baseDice + (rarity.diceMod ?? 0);
  const manaPool = family.baseMana + (rarity.manaMod ?? 0);
  const tactic = randomFrom(family.tactics);

  return {
    type: "monster",
    rarity: rarityKey,
    rarityMeta: rarity,
    familyKey: family.key,
    familyLabel: family.label,
    emoji: family.emoji,
    name: rosterEntry.name,
    description: family.description,
    dicePool,
    manaPool,
    tactic,
  };
}

export function generateMonster({ familyIndex = 0 }) {
  if (!monsterFamilies.length) {
    return null;
  }

  const index = normalizeIndex(familyIndex);
  const family = monsterFamilies[index];
  const pool = family.roster?.length ? family.roster : [{ name: family.label, rarity: "common" }];
  const choice = randomFrom(pool);

  return buildMonster(family, choice ?? pool[0]);
}

export function nextMonsterFamilyIndex(currentIndex = 0) {
  if (!monsterFamilies.length) {
    return 0;
  }
  return (normalizeIndex(currentIndex) + 1) % monsterFamilies.length;
}

export function getMonsterFamilyLabel(index) {
  if (!monsterFamilies.length) {
    return "N/A";
  }
  const family = monsterFamilies[normalizeIndex(index)];
  return `${family.emoji} ${family.label}`;
}

export function formatMonsterLog(monster) {
  if (!monster) {
    return "No guardians stirred within the maze tunnels.";
  }

  const rarity = rarityConfig[monster.rarity] ?? rarityConfig.common;
  return `A ${rarity.label.toLowerCase()} ${monster.familyLabel.toLowerCase()} emerged as ${monster.name}.`;
}
