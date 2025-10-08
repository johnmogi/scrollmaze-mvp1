export const rarityOrder = ["common", "rare", "epic", "legendary"];

export const rarityConfig = {
  common: {
    label: "Common",
    color: "bg-green-500/20 border-green-500/60 text-green-200",
    accent: "text-green-300",
    emoji: "🍃",
    diceMod: 0,
    manaMod: 0,
  },
  rare: {
    label: "Rare",
    color: "bg-blue-500/20 border-blue-500/60 text-blue-200",
    accent: "text-blue-300",
    emoji: "💠",
    diceMod: 1,
    manaMod: 1,
  },
  epic: {
    label: "Epic",
    color: "bg-purple-500/20 border-purple-500/60 text-purple-200",
    accent: "text-purple-300",
    emoji: "🔮",
    diceMod: 2,
    manaMod: 2,
  },
  legendary: {
    label: "Legendary",
    color: "bg-orange-500/20 border-orange-500/60 text-orange-200",
    accent: "text-orange-200",
    emoji: "🧡",
    diceMod: 3,
    manaMod: 3,
  },
};
