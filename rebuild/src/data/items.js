import { rarityOrder } from "../data/rarity.js";

export const itemCatalog = [
  {
    name: "Crystallized Sugar Flask",
    rarity: "rare",
    emoji: "🧃",
    type: "elixir",
    effect: "Restored three mana and sweetened the drinker's breath.",
    flavor: "Distilled from the first drip of the hive vaults.",
  },
  {
    name: "Honeyed Bandage Roll",
    rarity: "common",
    emoji: "🩹",
    type: "healing",
    effect: "Mended one wound and granted stickiness against disarming grasps.",
    flavor: "A staple in every pastry-knight's kit.",
  },
  {
    name: "Glimmerseed Satchel",
    rarity: "epic",
    emoji: "🌰",
    type: "utility",
    effect: "Sprinkled dazzling seeds that revealed hidden passages for a turn.",
    flavor: "Harvested by nocturnal sprites beneath frosting moons.",
  },
  {
    name: "Licorice Lockpick",
    rarity: "common",
    emoji: "🗝️",
    type: "tool",
    effect: "Unlocked sugary seals while leaving a faint anise scent behind.",
    flavor: "Favored by cookie-thief scouts on midnight runs.",
  },
  {
    name: "Candied Bombard",
    rarity: "epic",
    emoji: "💣",
    type: "explosive",
    effect: "Detonated in a rain of shards, stunning foes with sweet aroma.",
    flavor: "Forged in the ovens of rebellious patissiers.",
  },
  {
    name: "Caramel Thread Spool",
    rarity: "rare",
    emoji: "🧵",
    type: "control",
    effect: "Snared a target, reducing their dice by one next roll.",
    flavor: "Spun by crystal spiders to tether greedy hands.",
  },
  {
    name: "Frosted Lantern",
    rarity: "legendary",
    emoji: "🏮",
    type: "light",
    effect: "Illuminated illusions and restored one mana to allies who basked.",
    flavor: "Said to contain a shard of the first sugar star.",
  },
  {
    name: "Praline Shield Token",
    rarity: "rare",
    emoji: "🛡️",
    type: "defense",
    effect: "Granted a brittle barrier absorbing one attack.",
    flavor: "Issued to loyal bakers guarding palace larders.",
  },
  {
    name: "Marshmallow Hoverboots",
    rarity: "rare",
    emoji: "🥾",
    type: "mobility",
    effect: "Let the wearer glide over syrup pits and sticky traps.",
    flavor: "Invented for midnight raids across caramel rooftops.",
  },
  {
    name: "Crystalized Taster's Spoon",
    rarity: "common",
    emoji: "🥄",
    type: "focus",
    effect: "Granted advantage on the next inspection for hidden doors.",
    flavor: "Trusted by royal tasters to catch poisoned ganache.",
  },
  {
    name: "Singing Teapot",
    rarity: "epic",
    emoji: "🫖",
    type: "support",
    effect: "Its lullaby gave allies a short rest and cleansed minor status ailments.",
    flavor: "Brewed in duet with the Crystal Hive choir.",
  },
  {
    name: "Starlit Biscuit Tin",
    rarity: "legendary",
    emoji: "🍪",
    type: "relic",
    effect: "Each biscuit consumed added a temporary die until dawn.",
    flavor: "Only opens for those who whisper ancient recipes.",
  },
];

export function rarityWeightsForItems(rarityKey) {
  if (!rarityKey) return rarityOrder;
  return rarityOrder;
}
