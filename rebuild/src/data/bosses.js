import { rarityConfig } from "./rarity.js";

export const bossRoster = [
  {
    name: "Queen Melyssa of the Crystal Hive",
    rarity: "legendary",
    emoji: "👑",
    family: "Insect Sovereign",
    phase: "Twin Stinger Waltz",
    tactics: [
      "Summons amber guardians each round.",
      "Siphons mana with pheromone pulses.",
      "Forces heroes to share dice or suffer venom drains.",
    ],
  },
  {
    name: "Thrain the Sugared Betrayer",
    rarity: "epic",
    emoji: "🪓",
    family: "Skeletal Dwarf",
    phase: "Crustbreak Cataclysm",
    tactics: [
      "Cracks the floor into shifting plates of brittle candy.",
      "Turns relics against their owners for a turn.",
      "Demands offerings to spare dice pools.",
    ],
  },
  {
    name: "Fondant Wyrm of the Deep",
    rarity: "legendary",
    emoji: "🐉",
    family: "Faery Dragon",
    phase: "Molten Confection Surge",
    tactics: [
      "Spews molten sugar waves that seal lanes.",
      "Gorges on mana drops to boost its own dice.",
      "Shields itself with caramelized wings until riddles are solved.",
    ],
  },
  {
    name: "Gutterfang the Alley Archer",
    rarity: "rare",
    emoji: "🏹",
    family: "Rogue Elf",
    phase: "Shadowed Cookie Volley",
    tactics: [
      "Steals relics mid-aim with sticky strings.",
      "Splits into sugary decoys under low light.",
      "Taunts heroes with stolen pastries to drain focus.",
    ],
  },
];

export const bossRarityWeights = {
  epic: 0.55,
  legendary: 0.45,
};

export function describeBossRarity(rarityKey) {
  const rarity = rarityConfig[rarityKey] ?? rarityConfig.common;
  return `${rarity.emoji} ${rarity.label}`;
}
