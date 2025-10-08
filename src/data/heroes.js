import { deckEntries } from "../utils/deck.js";

export const heroClasses = {
  warrior: {
    label: "Snobbish Paladin",
    emoji: "🛡️",
    persona: "They once judged cakes by crumb symmetry.",
    baseDice: 3,
    baseMana: 2,
    archetype: "Paladin",
    names: ["Ser Glaze", "Lady Marzipan", "Sir Fondant", "Count Custard"],
    epithets: ["the Pristine", "the Immaculate", "of Polished Armor", "the Sanctimonious"],
    decks: {
      attack: deckEntries([
        ["Radiant Riposte", "rare"],
        ["Sugar-Lace Smite", "epic"],
        ["Prissy Pommel", "common"],
        ["Candied Judgment", "epic"],
        ["Crust Crusade", "rare"],
      ]),
      defense: deckEntries([
        ["Cookie Sheet Parry", "common"],
        ["Glaze Aegis", "rare"],
        ["Halo of Sprinkles", "epic"],
        ["Rigid Etiquette", "common"],
      ]),
      spell: deckEntries([
        ["Blessing of Brûlée", "rare"],
        ["Snub of Sanctuary", "epic"],
        ["Radiant Crumbflare", "legendary"],
      ]),
      relic: deckEntries([
        ["Mirror of Perfect Crust", "epic"],
        ["Gavel of Frosting", "rare"],
        ["Etiquette Talisman", "common"],
      ]),
    },
  },
  mage: {
    label: "Arrogant Mage",
    emoji: "🪄",
    persona: "They correct everyone on pronunciation of 'arcana'.",
    baseDice: 2,
    baseMana: 4,
    archetype: "Mage",
    names: ["Archibald", "Zephyria", "Meringuard", "Velvet"],
    epithets: ["the Lofty", "the Confectioner", "the Grandiose", "Sugar Savant"],
    decks: {
      attack: deckEntries([
        ["Arcane Fudge Bolt", "rare"],
        ["Fondant Flash", "common"],
        ["Nougat Nova", "epic"],
        ["Crystalline Conflag", "legendary"],
      ]),
      defense: deckEntries([
        ["Meringue Barrier", "rare"],
        ["Snide Shield", "common"],
        ["Macaron Matrix", "epic"],
      ]),
      spell: deckEntries([
        ["Detention of Sprinkles", "common"],
        ["Grand Glaciate", "epic"],
        ["Sugar Singularity", "legendary"],
        ["Taffy Teleport", "rare"],
      ]),
      relic: deckEntries([
        ["Grimoire of Glucose", "legendary"],
        ["Snob's Stirring Spoon", "rare"],
        ["Arrogant Spectacles", "common"],
      ]),
    },
  },
  elf: {
    label: "Cookie-Stealing Archer",
    emoji: "🏹",
    persona: "They can't resist unattended pastries.",
    baseDice: 3,
    baseMana: 3,
    archetype: "Archer",
    names: ["Crumbwhisper", "Glimmerbite", "Thistlechew", "Icingstride"],
    epithets: ["the Sly", "Cookie Filcher", "Pastry Poacher", "Swift Crumb"],
    decks: {
      attack: deckEntries([
        ["Snatch-and-Draw", "common"],
        ["Caramel Volley", "rare"],
        ["Sticky Fingers Shot", "rare"],
        ["Thieving Tempest", "epic"],
      ]),
      defense: deckEntries([
        ["Crumb Cloak", "common"],
        ["Rolling Evasion", "rare"],
        ["Sugar Veil", "epic"],
      ]),
      spell: deckEntries([
        ["Shadow of Shortbread", "rare"],
        ["Sticky Mirage", "epic"],
        ["Cookie Compass", "common"],
      ]),
      relic: deckEntries([
        ["Quiver of Crullers", "rare"],
        ["Stolen Biscuit Charm", "common"],
        ["Everfresh Cookie Jar", "legendary"],
      ]),
    },
  },
  dwarf: {
    label: "Hard Bread Axe-Wielder",
    emoji: "🪓",
    persona: "They debate betrayal over stale pretzels.",
    baseDice: 4,
    baseMana: 2,
    archetype: "Berserker",
    names: [
      "Brog Buttercrust",
      "Helga Hardtack",
      "Gunn Gridlebrew",
      "Thrain Thickslice",
    ],
    epithets: ["the Double-Crosser", "Crumb-Scarred", "of the Hardened Loaf", "the Crust-Cracker"],
    decks: {
      attack: deckEntries([
        ["Axe of Stale Intent", "common"],
        ["Crust Breaker", "rare"],
        ["Betrayer's Swing", "epic"],
        ["Sugar Reaver", "legendary"],
      ]),
      defense: deckEntries([
        ["Hardpan Guard", "common"],
        ["Stone Oven Stand", "rare"],
        ["Pretzel Fortify", "epic"],
      ]),
      spell: deckEntries([
        ["Ferment Fury", "rare"],
        ["Molasses Maelstrom", "epic"],
        ["Gluten Grudge", "legendary"],
      ]),
      relic: deckEntries([
        ["Crystalized Betrayal", "legendary"],
        ["Loaf Splitter Token", "rare"],
        ["Crumb Compass", "common"],
      ]),
    },
  },
};
