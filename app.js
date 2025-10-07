const rarityOrder = ["common", "rare", "epic", "legendary"];

const rarityConfig = {
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

const heroClasses = {
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

const monsterFamilies = [
  {
    key: "animals",
    label: "Beastly Wardens",
    emoji: "🐻",
    description: "Corrupted animals prowling sugar vault tunnels.",
    diceBase: 3,
    manaBase: 1,
    roster: deckEntries([
      ["Molasses Bear", "rare"],
      ["Caramel Wolf", "common"],
      ["Honeybadger Herald", "epic"],
      ["Syrup Serpent", "epic"],
      ["Licorice Lynx", "rare"],
    ]),
    abilities: {
      attack: deckEntries([
        ["Claw of Cravings", "common"],
        ["Syrup Slam", "rare"],
        ["Feral Fondant Frenzy", "epic"],
      ]),
      defense: deckEntries([
        ["Hide of Hard Candy", "rare"],
        ["Burrow Beneath", "common"],
        ["Glucose Guard", "epic"],
      ]),
      spell: deckEntries([
        ["Beastial Howl", "common"],
        ["Crystalline Roar", "rare"],
        ["Lunar Lick", "epic"],
      ]),
      relic: deckEntries([
        ["Clawed Sugar Sigil", "rare"],
        ["Amberfang Charm", "epic"],
        ["Wildwood Totem", "common"],
      ]),
    },
  },
  {
    key: "insect",
    label: "Crystal Hive",
    emoji: "🐜",
    description: "Vigilant insects sworn to the sweet hoard.",
    diceBase: 2,
    manaBase: 2,
    roster: deckEntries([
      ["Royal Jelly Wasp", "epic"],
      ["Sugarcane Centipede", "rare"],
      ["Quartz Mantis", "legendary"],
      ["Carapace Scarab", "common"],
      ["Candystripe Spider", "rare"],
    ]),
    abilities: {
      attack: deckEntries([
        ["Needle Nectar", "common"],
        ["Crystal Stinger", "rare"],
        ["Hivequake", "legendary"],
      ]),
      defense: deckEntries([
        ["Honeycomb Barrier", "rare"],
        ["Skitter Scatter", "common"],
        ["Amber Carapace", "epic"],
      ]),
      spell: deckEntries([
        ["Swarm Synchrony", "epic"],
        ["Pheromone Pulse", "rare"],
        ["Crystalized Venom", "legendary"],
      ]),
      relic: deckEntries([
        ["Queen's Crest", "legendary"],
        ["Dripping Hive Stone", "epic"],
        ["Worker's Token", "common"],
      ]),
    },
  },
  {
    key: "skeletal",
    label: "Crumb-Bound Remains",
    emoji: "💀",
    description: "Reanimated beasts and bugs held together by brittle sugar.",
    diceBase: 3,
    manaBase: 2,
    roster: deckEntries([
      ["Bone Beetle", "common"],
      ["Sugar Skull Wolf", "rare"],
      ["Caramelized Carcass", "epic"],
      ["Skeletal Swarm", "epic"],
      ["Gummy Revenant", "rare"],
    ]),
    abilities: {
      attack: deckEntries([
        ["Clatter Crunch", "common"],
        ["Brittle Bite", "rare"],
        ["Shatterstorm", "epic"],
      ]),
      defense: deckEntries([
        ["Rattle Guard", "common"],
        ["Bone Shield", "rare"],
        ["Crystalline Cage", "epic"],
      ]),
      spell: deckEntries([
        ["Reweave Remnant", "rare"],
        ["Liche Licorice", "epic"],
        ["Shivering Spike", "legendary"],
      ]),
      relic: deckEntries([
        ["Bonebinder Pin", "rare"],
        ["Sugared Charm of Return", "legendary"],
        ["Trinket of Tinkling Teeth", "common"],
      ]),
    },
  },
  {
    key: "faery",
    label: "Fae of the Deep",
    emoji: "🐉",
    description: "Goblins, trolls, and dragons dazzled by the crystals' glow.",
    diceBase: 4,
    manaBase: 3,
    roster: deckEntries([
      ["Glimmergob", "common"],
      ["Troll of Taffy", "rare"],
      ["Crystalwyrm", "legendary"],
      ["Fondant Drake", "epic"],
      ["Orchid Troll", "rare"],
    ]),
    abilities: {
      attack: deckEntries([
        ["Goblin Glint", "common"],
        ["Trollish Toss", "rare"],
        ["Dragonfire Drizzle", "legendary"],
      ]),
      defense: deckEntries([
        ["Fae Shimmer", "rare"],
        ["Crystal Shroud", "epic"],
        ["Goblin Scamper", "common"],
      ]),
      spell: deckEntries([
        ["Glamour Glaze", "rare"],
        ["Taffy Trickery", "epic"],
        ["Dragon Sugarstorm", "legendary"],
      ]),
      relic: deckEntries([
        ["Gleamstone Locket", "epic"],
        ["Goblin's Greed Coin", "rare"],
        ["Dragonhoard Crumb", "legendary"],
      ]),
    },
  },
];

const itemCatalog = [
  {
    name: "Crystallized Sugar Flask",
    rarity: "rare",
    emoji: "🧃",
    type: "elixir",
    effect: "Restored three mana to the imbiber and sweetened their breath.",
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
    effect: "Illuminated illusions and restored one mana to allies who basked in it.",
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
];

const trapCatalog = [
  {
    name: "Syrup Snare",
    rarity: "common",
    emoji: "🪤",
    difficulty: 4,
    effect: "Immobilized the unlucky until two dice successes freed them.",
    flavor: "A favorite prank of mischievous goblins.",
  },
  {
    name: "Crystallized Quicksand",
    rarity: "rare",
    emoji: "🧊",
    difficulty: 5,
    effect: "Dragged victims downward, costing one mana to escape.",
    flavor: "Forms where sugar veins melt and refreeze overnight.",
  },
  {
    name: "Fudge Hammer Pendulum",
    rarity: "epic",
    emoji: "🔨",
    difficulty: 6,
    effect: "Slammed with sticky force, shattering relics on failure.",
    flavor: "Built by resentful dwarves turned wardens.",
  },
  {
    name: "Taffy Tension Web",
    rarity: "rare",
    emoji: "🕸️",
    difficulty: 5,
    effect: "Drained one die from the next roll as the snare clung tight.",
    flavor: "Spun nightly by the Crystal Hive's artisan spiders.",
  },
  {
    name: "Marzipan Mirage",
    rarity: "legendary",
    emoji: "🌀",
    difficulty: 7,
    effect: "Lured intruders into false exits until riddles were solved.",
    flavor: "Only the sweetest whispers break the illusion.",
  },
];

const riddleDeck = [
  {
    prompt: "I crumble when praised, yet power armies when stored. What am I?",
    answer: "Hard bread ration",
    rarity: "common",
  },
  {
    prompt: "I am mined without pick, guarded by stings, melted for life. Name me.",
    answer: "Sugar crystal",
    rarity: "rare",
  },
  {
    prompt: "I breathe frost but forge warmth, hoarded by dragons under dough. Who am I?",
    answer: "Frostforge ember",
    rarity: "epic",
  },
  {
    prompt: "Once stolen, I sweeten betrayal; returned, I crown the true baker. What am I?",
    answer: "Gleam crown crumb",
    rarity: "legendary",
  },
];

const recoveryDeck = [
  {
    name: "Steam Baths of Sucrose",
    rarity: "rare",
    emoji: "🛁",
    benefit: "Restored two mana and soothed status ailments.",
  },
  {
    name: "Camp of Crusty Companions",
    rarity: "common",
    emoji: "⛺",
    benefit: "Allowed allies to redraw one card from any deck.",
  },
  {
    name: "Fondant Fountain",
    rarity: "epic",
    emoji: "⛲",
    benefit: "Granted a temporary relic infused with sweetness.",
  },
  {
    name: "Crystal Choir Niche",
    rarity: "legendary",
    emoji: "🎶",
    benefit: "Echoed melodies that recharged all dice to maximum.",
  },
];

const relicCatalog = [
  {
    name: "Goblet of Gleam",
    rarity: "epic",
    emoji: "🍷",
    power: "Doubled the effect of the next spell cast.",
  },
  {
    name: "Stinger Crown",
    rarity: "legendary",
    emoji: "👑",
    power: "Borrowed a die from every nearby creature for one roll.",
  },
  {
    name: "Crustbound Totem",
    rarity: "rare",
    emoji: "🪵",
    power: "Prevented the first trap trigger encountered.",
  },
  {
    name: "Dwarf's Double-Cross Coin",
    rarity: "rare",
    emoji: "🪙",
    power: "Allowed a reroll at the cost of sharing loot.",
  },
  {
    name: "Whisk of Whimsy",
    rarity: "common",
    emoji: "🥄",
    power: "Shuffled the user's deck and drew an extra card.",
  },
];

const storyPrompts = [
  {
    title: "Descent into the Crystal Hive",
    synopsis: "The party traced the humming tunnels where insects hummed lullabies to their hoard.",
    beats: [
      "They bargained with a glimmergob over a map dusted in sugar.",
      "They dodged syrup snares laid by corrupted dwarves.",
      "They uncovered a hidden nursery of crystallized larvae.",
    ],
    reward: "A cache of glimmerseeds and a clue to the sugar vault's key.",
  },
  {
    title: "Rescue of the Fading Bakery",
    synopsis: "Reports reached them that the royal ovens went cold as sugar vanished.",
    beats: [
      "They tracked stolen dough to a renegade paladin order.",
      "They unmasked an arrogant mage siphoning glaze for forbidden experiments.",
      "They returned warmth to the ovens with a relic ember.",
    ],
    reward: "The bakers pledged pastries and intel on the hive corridors.",
  },
  {
    title: "The Sugarbound Accord",
    synopsis: "Neutral dwarves demanded parley deep beneath the earth crystals.",
    beats: [
      "They answered riddles etched in caramel.",
      "They swayed a double-crossing dwarf back to the light with shared bread.",
      "They sealed an alliance guarded by a relic totem.",
    ],
    reward: "Safe passage tokens for one descent and a recovered relic shard.",
  },
  {
    title: "Maze of Echoing Crumbs",
    synopsis: "Legends spoke of corridors shifting with each crumble of bread.",
    beats: [
      "They mapped a living labyrinth guided by a cookie compass.",
      "They quelled a troll of taffy with stories of sweetness.",
      "They stored echoes of past heroes along the scroll.",
    ],
    reward: "The maze whispered the true location of the sugar heart.",
  },
];

const bossRoster = [
  {
    name: "Queen Melyssa of the Crystal Hive",
    rarity: "legendary",
    emoji: "👑",
    family: "insect",
    phase: "Twin Stinger Waltz",
    tactics: [
      "Summoned amber guardians each round.",
      "Stole mana with pheromone pulses.",
      "Forced heroes to share dice or suffer venom drains.",
    ],
  },
  {
    name: "Thrain the Sugared Betrayer",
    rarity: "epic",
    emoji: "🪓",
    family: "skeletal dwarf",
    phase: "Crustbreak Cataclysm",
    tactics: [
      "Cracked the floor into shifting plates of brittle candy.",
      "Turned relics against their owners for a turn.",
      "Demanded offerings to spare dice pools.",
    ],
  },
  {
    name: "Fondant Wyrm of the Deep",
    rarity: "legendary",
    emoji: "🐉",
    family: "faery dragon",
    phase: "Molten Confection Surge",
    tactics: [
      "Spewed molten sugar waves that sealed lanes.",
      "Gorged on mana drops to boost its own dice.",
      "Shielded itself with caramelized wings until riddles were solved.",
    ],
  },
  {
    name: "Gutterfang the Alley Archer",
    rarity: "rare",
    emoji: "🏹",
    family: "rogue elf",
    phase: "Shadowed Cookie Volley",
    tactics: [
      "Stole relics mid-aim with sticky strings.",
      "Split into sugary decoys under low light.",
      "Taunted heroes with stolen pastries to drain focus.",
    ],
  },
];

const roomTypeConfig = {
  trap: {
    label: "Trap",
    emoji: "🪤",
    badge: "border-rose-400/60 bg-rose-500/10 text-rose-100",
  },
  item: {
    label: "Item",
    emoji: "🎁",
    badge: "border-blue-400/60 bg-blue-500/10 text-blue-100",
  },
  story: {
    label: "Story",
    emoji: "📖",
    badge: "border-teal-400/60 bg-teal-500/10 text-teal-100",
  },
  recoveryarea: {
    label: "Recovery",
    emoji: "🌿",
    badge: "border-lime-400/60 bg-lime-500/10 text-lime-100",
  },
  monster: {
    label: "Monster",
    emoji: "🕷️",
    badge: "border-purple-400/60 bg-purple-500/10 text-purple-100",
  },
  riddle: {
    label: "Riddle",
    emoji: "❓",
    badge: "border-amber-400/60 bg-amber-500/10 text-amber-100",
  },
  relic: {
    label: "Relic",
    emoji: "🗝️",
    badge: "border-orange-400/60 bg-orange-500/10 text-orange-100",
  },
};

const boardRarityWeights = {
  common: 0.45,
  rare: 0.3,
  epic: 0.18,
  legendary: 0.07,
};

const bossRarityWeights = {
  epic: 0.55,
  legendary: 0.45,
};

const pastelBadges = {
  attack: "bg-rose-500/20 text-rose-200 border border-rose-400/60",
  defense: "bg-sky-500/20 text-sky-200 border border-sky-400/60",
  spell: "bg-indigo-500/20 text-indigo-200 border border-indigo-400/60",
  relic: "bg-amber-500/20 text-amber-200 border border-amber-400/60",
};

const roomTypeWeights = {
  monster: 0.24,
  trap: 0.2,
  item: 0.16,
  story: 0.14,
  recoveryarea: 0.1,
  riddle: 0.08,
  relic: 0.08,
};

const boardConfig = {
  rows: 3,
  cols: 4,
};

let heroRarityIndex = 0;
let monsterFamilyIndex = 0;
let itemRarityIndex = 0;
let trapRarityIndex = 0;
let recoveryRarityIndex = 0;
let riddleRarityIndex = 0;
let relicRarityIndex = 0;

let currentHero = null;
let currentMonster = null;
let currentItem = null;
let currentTrap = null;
let currentStory = null;
let currentBoss = null;
let currentBoard = null;
let currentRecovery = null;
let currentRiddle = null;
let currentRelic = null;

function deckEntries(entries) {
  return entries.map(([name, rarity]) => ({ name, rarity }));
}

function renderRecoveryCard(recovery) {
  const container = document.getElementById("recovery-card");
  const rarity = rarityConfig[recovery.rarity];
  container.innerHTML = `
    <div class="rounded-2xl border ${rarity.color} p-4 shadow-inner shadow-slate-900/60">
      <div class="flex items-center justify-between gap-4">
        <div>
          <p class="text-xs uppercase tracking-[0.3em] ${rarity.accent}">${rarity.label}</p>
          <h3 class="mt-1 text-lg font-semibold text-slate-100">${recovery.name}</h3>
        </div>
        <div class="text-4xl" aria-hidden="true">${recovery.emoji}</div>
      </div>
      <p class="mt-3 text-sm text-slate-200">${recovery.benefit}</p>
    </div>
  `;
}

function renderRiddleCard(riddle) {
  const container = document.getElementById("riddle-card");
  const rarity = rarityConfig[riddle.rarity];
  container.innerHTML = `
    <div class="rounded-2xl border ${rarity.color} p-4 shadow-inner shadow-slate-900/60">
      <p class="text-xs uppercase tracking-[0.3em] ${rarity.accent}">${rarity.label}</p>
      <h3 class="mt-2 text-lg font-semibold text-slate-100">${riddle.prompt}</h3>
      <p class="mt-3 text-sm text-amber-200">Answer: ${riddle.answer}</p>
    </div>
  `;
}

function renderRelicCard(relic) {
  const container = document.getElementById("relic-card");
  const rarity = rarityConfig[relic.rarity];
  container.innerHTML = `
    <div class="rounded-2xl border ${rarity.color} p-4 shadow-inner shadow-slate-900/60">
      <div class="flex items-center justify-between gap-4">
        <div>
          <p class="text-xs uppercase tracking-[0.3em] ${rarity.accent}">${rarity.label}</p>
          <h3 class="mt-1 text-lg font-semibold text-slate-100">${relic.name}</h3>
          <p class="text-sm text-slate-300">${relic.power}</p>
        </div>
        <div class="text-4xl" aria-hidden="true">${relic.emoji}</div>
      </div>
    </div>
  `;
}

function randomFrom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function weightedRandom(weightMap) {
  const entries = Array.isArray(weightMap)
    ? weightMap
    : Object.entries(weightMap).map(([key, weight]) => ({ key, weight }));

  const total = entries.reduce((sum, entry) => sum + entry.weight, 0);
  let roll = Math.random() * total;
  for (const entry of entries) {
    roll -= entry.weight;
    if (roll <= 0) {
      return entry.key ?? entry.value ?? entry;
    }
  }
  const last = entries[entries.length - 1];
  return last.key ?? last.value ?? last;
}

function pickCards(pool, rarity, count) {
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

function rollPersona(classKey) {
  const data = heroClasses[classKey];
  const name = randomFrom(data.names);
  const epithet = randomFrom(data.epithets);
  return `${name} ${epithet}`;
}

function generateHero(rarityKey) {
  const classKey = randomFrom(Object.keys(heroClasses));
  const heroData = heroClasses[classKey];
  const rarityData = rarityConfig[rarityKey];
  const dicePool = heroData.baseDice + rarityData.diceMod;
  const manaPool = heroData.baseMana + rarityData.manaMod;

  const deck = {
    attack: pickCards(heroData.decks.attack, rarityKey, 3),
    defense: pickCards(heroData.decks.defense, rarityKey, 2),
    spell: pickCards(heroData.decks.spell, rarityKey, 2),
    relic: pickCards(heroData.decks.relic, rarityKey, 1),
  };

  return {
    type: "hero",
    rarity: rarityKey,
    classKey,
    name: rollPersona(classKey),
    title: heroData.label,
    emoji: heroData.emoji,
    persona: heroData.persona,
    dicePool,
    manaPool,
    deck,
  };
}

function generateMonster(familyIndex) {
  const family = monsterFamilies[familyIndex];
  const rarityKey = randomFrom(rarityOrder);
  const rarityData = rarityConfig[rarityKey];
  const candidates = family.roster.filter((card) => card.rarity === rarityKey);
  const specimen = randomFrom(candidates.length ? candidates : family.roster);
  const dicePool = family.diceBase + rarityData.diceMod;
  const manaPool = family.manaBase + rarityData.manaMod;

  const deck = {
    attack: pickCards(family.abilities.attack, rarityKey, 3),
    defense: pickCards(family.abilities.defense, rarityKey, 2),
    spell: pickCards(family.abilities.spell, rarityKey, 2),
    relic: pickCards(family.abilities.relic, rarityKey, 1),
  };

  return {
    type: "monster",
    rarity: rarityKey,
    family,
    name: specimen.name,
    emoji: family.emoji,
    description: family.description,
    dicePool,
    manaPool,
    deck,
  };
}

function renderHeroCard(hero) {
  const container = document.getElementById("hero-card");
  const rarityData = rarityConfig[hero.rarity];
  container.innerHTML = `
    <div class="rounded-2xl border ${rarityData.color} p-4 shadow-inner shadow-slate-900/60">
      <div class="flex items-center justify-between gap-4">
        <div>
          <p class="text-xs uppercase tracking-[0.3em] ${rarityData.accent}">${rarityData.label}</p>
          <h3 class="mt-1 text-lg font-semibold text-slate-100">${hero.name}</h3>
          <p class="text-sm text-slate-300">${hero.title}</p>
        </div>
        <div class="text-4xl" aria-hidden="true">${hero.emoji}</div>
      </div>
      <p class="mt-3 text-sm text-slate-300">${hero.persona}</p>
      <dl class="mt-4 grid grid-cols-2 gap-3 text-xs text-slate-200">
        <div class="rounded-xl bg-slate-900/80 px-3 py-2">
          <dt class="uppercase tracking-widest text-slate-400">Dice Pool</dt>
          <dd class="mt-1 text-lg font-semibold">${hero.dicePool} 🎲</dd>
        </div>
        <div class="rounded-xl bg-slate-900/80 px-3 py-2">
          <dt class="uppercase tracking-widest text-slate-400">Mana</dt>
          <dd class="mt-1 text-lg font-semibold">${hero.manaPool} ✨</dd>
        </div>
      </dl>
      ${renderDeckList(hero.deck)}
    </div>
  `;
}

function renderMonsterCard(monster) {
  const container = document.getElementById("monster-card");
  const rarityData = rarityConfig[monster.rarity];
  container.innerHTML = `
    <div class="rounded-2xl border ${rarityData.color} p-4 shadow-inner shadow-slate-900/60">
      <div class="flex items-center justify-between gap-4">
        <div>
          <p class="text-xs uppercase tracking-[0.3em] ${rarityData.accent}">${rarityData.label}</p>
          <h3 class="mt-1 text-lg font-semibold text-slate-100">${monster.name}</h3>
          <p class="text-sm text-slate-300">${monster.family.label}</p>
        </div>
        <div class="text-4xl" aria-hidden="true">${monster.emoji}</div>
      </div>
      <p class="mt-3 text-sm text-slate-300">${monster.description}</p>
      <dl class="mt-4 grid grid-cols-2 gap-3 text-xs text-slate-200">
        <div class="rounded-xl bg-slate-900/80 px-3 py-2">
          <dt class="uppercase tracking-widest text-slate-400">Dice Pool</dt>
          <dd class="mt-1 text-lg font-semibold">${monster.dicePool} 🎲</dd>
        </div>
        <div class="rounded-xl bg-slate-900/80 px-3 py-2">
          <dt class="uppercase tracking-widest text-slate-400">Mana</dt>
          <dd class="mt-1 text-lg font-semibold">${monster.manaPool} ✨</dd>
        </div>
      </dl>
      ${renderDeckList(monster.deck)}
    </div>
  `;
}

function renderDeckList(deck) {
  return `
    <div class="mt-6 grid gap-3">
      ${Object.entries(deck)
        .map(
          ([key, cards]) => `
            <div class="rounded-2xl bg-slate-950/70 p-3">
              <div class="flex items-center justify-between text-xs uppercase tracking-widest text-slate-400">
                <span>${key}</span>
                <span>${cards.length} Cards</span>
              </div>
              <ul class="mt-2 space-y-2 text-sm">
                ${cards
                  .map((card) => {
                    const rarity = rarityConfig[card.rarity];
                    return `
                      <li class="flex items-center justify-between gap-3 rounded-xl ${pastelBadges[key]} px-3 py-2">
                        <span>${card.name}</span>
                        <span class="text-xs uppercase tracking-widest ${rarity.accent}">${rarity.emoji} ${rarity.label}</span>
                      </li>
                    `;
                  })
                  .join("")}
              </ul>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function updateDeckInsights() {
  const container = document.getElementById("deck-insights");
  container.innerHTML = "";

  if (!currentHero && !currentMonster) {
    container.innerHTML = `<p class="text-sm text-slate-400">Generate a hero or monster to view deck summaries.</p>`;
    return;
  }

  if (currentHero) {
    container.appendChild(createDeckSummaryCard(currentHero));
  }

  if (currentMonster) {
    container.appendChild(createDeckSummaryCard(currentMonster));
  }
}

function createDeckSummaryCard(entity) {
  const rarityData = rarityConfig[entity.rarity];
  const wrapper = document.createElement("div");
  wrapper.className = `rounded-2xl border ${rarityData.color} p-4 shadow-inner shadow-slate-950/40`;
  wrapper.innerHTML = `
    <div class="flex items-center justify-between">
      <div>
        <p class="text-xs uppercase tracking-[0.3em] ${rarityData.accent}">${rarityData.label}</p>
        <h3 class="mt-1 text-lg font-semibold text-slate-100">${entity.name}</h3>
        <p class="text-xs text-slate-400">${entity.type === "hero" ? heroClasses[entity.classKey].label : entity.family.label}</p>
      </div>
      <div class="text-3xl" aria-hidden="true">${entity.emoji}</div>
    </div>
    <div class="mt-3 grid grid-cols-2 gap-2 text-xs text-slate-300">
      <span class="rounded-xl bg-slate-900/80 px-3 py-2">Dice ${entity.dicePool}</span>
      <span class="rounded-xl bg-slate-900/80 px-3 py-2">Mana ${entity.manaPool}</span>
    </div>
    <ul class="mt-3 space-y-2 text-sm text-slate-200">
      ${Object.entries(entity.deck)
        .map(
          ([key, list]) => `
            <li class="rounded-xl bg-slate-950/60 px-3 py-2">
              <span class="text-xs uppercase tracking-widest text-slate-400">${key}</span>
              <p class="mt-1 text-sm">${list.map((card) => card.name).join(", ")}</p>
            </li>
          `
        )
        .join("")}
    </ul>
  `;
  return wrapper;
}

function appendToLog(message) {
  const log = document.getElementById("event-log");
  const item = document.createElement("li");
  item.className = "rounded-xl bg-slate-950/60 px-4 py-3 shadow-inner shadow-slate-950/70";
  item.textContent = message;
  log.prepend(item);
}

function formatHeroLog(hero) {
  const rarity = rarityConfig[hero.rarity];
  return `The party enlisted the ${rarity.label.toLowerCase()} ${hero.title.toLowerCase()}, known as ${hero.name}.`;
}

function formatMonsterLog(monster) {
  const rarity = rarityConfig[monster.rarity];
  return `A ${rarity.label.toLowerCase()} ${monster.family.label.toLowerCase()} emerged as ${monster.name}.`;
}

function formatItemLog(item) {
  const rarity = rarityConfig[item.rarity];
  return `They secured the ${rarity.label.toLowerCase()} item ${item.name}.`;
}

function formatTrapLog(trap) {
  const rarity = rarityConfig[trap.rarity];
  return `A ${rarity.label.toLowerCase()} trap called ${trap.name} was spotted before it sprung.`;
}

function formatStoryLog(story) {
  return `A new chronicle unfurled: ${story.title}.`;
}

function formatBossLog(boss) {
  return `Rumors whispered of ${boss.name}, preparing the ${boss.phase.toLowerCase()}.`;
}

function formatBoardLog(board) {
  return `The explorers charted a ${board.rows}x${board.cols} maze shimmering with diverse rooms.`;
}

function formatRecoveryLog(recovery) {
  const rarity = rarityConfig[recovery.rarity];
  return `They discovered a ${rarity.label.toLowerCase()} refuge named ${recovery.name}.`;
}

function formatRiddleLog(riddle) {
  const rarity = rarityConfig[riddle.rarity];
  return `A ${rarity.label.toLowerCase()} riddle barred the path with the query: "${riddle.prompt}".`;
}

function formatRelicLog(relic) {
  const rarity = rarityConfig[relic.rarity];
  return `A ${rarity.label.toLowerCase()} relic surfaced: ${relic.name}.`;
}

function updateHeroRarityButton() {
  const button = document.getElementById("cycle-hero-rarity");
  const rarity = rarityConfig[rarityOrder[heroRarityIndex]];
  button.textContent = `Rarity: ${rarity.emoji} ${rarity.label}`;
}

function updateMonsterFamilyButton() {
  const button = document.getElementById("cycle-monster-family");
  const family = monsterFamilies[monsterFamilyIndex];
  button.textContent = `Family: ${family.emoji} ${family.label}`;
}

function updateItemRarityButton() {
  const button = document.getElementById("cycle-item-rarity");
  const rarity = rarityConfig[rarityOrder[itemRarityIndex]];
  button.textContent = `Rarity: ${rarity.emoji} ${rarity.label}`;
}

function updateTrapRarityButton() {
  const button = document.getElementById("cycle-trap-rarity");
  const rarity = rarityConfig[rarityOrder[trapRarityIndex]];
  button.textContent = `Rarity: ${rarity.emoji} ${rarity.label}`;
}

function updateRecoveryRarityButton() {
  const button = document.getElementById("cycle-recovery-rarity");
  const rarity = rarityConfig[rarityOrder[recoveryRarityIndex]];
  button.textContent = `Rarity: ${rarity.emoji} ${rarity.label}`;
}

function updateRiddleRarityButton() {
  const button = document.getElementById("cycle-riddle-rarity");
  const rarity = rarityConfig[rarityOrder[riddleRarityIndex]];
  button.textContent = `Rarity: ${rarity.emoji} ${rarity.label}`;
}

function updateRelicRarityButton() {
  const button = document.getElementById("cycle-relic-rarity");
  const rarity = rarityConfig[rarityOrder[relicRarityIndex]];
  button.textContent = `Rarity: ${rarity.emoji} ${rarity.label}`;
}

function renderItemCard(item) {
  const container = document.getElementById("item-card");
  const rarity = rarityConfig[item.rarity];
  container.innerHTML = `
    <div class="rounded-2xl border ${rarity.color} p-4 shadow-inner shadow-slate-900/60">
      <div class="flex items-center justify-between gap-4">
        <div>
          <p class="text-xs uppercase tracking-[0.3em] ${rarity.accent}">${rarity.label}</p>
          <h3 class="mt-1 text-lg font-semibold text-slate-100">${item.name}</h3>
          <p class="text-sm text-slate-300 capitalize">${item.type}</p>
        </div>
        <div class="text-4xl" aria-hidden="true">${item.emoji}</div>
      </div>
      <p class="mt-3 text-sm text-slate-200">${item.effect}</p>
      <p class="mt-2 text-xs italic text-slate-400">${item.flavor}</p>
    </div>
  `;
}

function renderTrapCard(trap) {
  const container = document.getElementById("trap-card");
  const rarity = rarityConfig[trap.rarity];
  container.innerHTML = `
    <div class="rounded-2xl border ${rarity.color} p-4 shadow-inner shadow-slate-900/60">
      <div class="flex items-center justify-between gap-4">
        <div>
          <p class="text-xs uppercase tracking-[0.3em] ${rarity.accent}">${rarity.label}</p>
          <h3 class="mt-1 text-lg font-semibold text-slate-100">${trap.name}</h3>
          <p class="text-sm text-slate-300">Difficulty ${trap.difficulty}</p>
        </div>
        <div class="text-4xl" aria-hidden="true">${trap.emoji}</div>
      </div>
      <p class="mt-3 text-sm text-slate-200">${trap.effect}</p>
      <p class="mt-2 text-xs italic text-slate-400">${trap.flavor}</p>
    </div>
  `;
}

function renderStoryCard(story) {
  const container = document.getElementById("story-card");
  container.innerHTML = `
    <div class="rounded-2xl border border-teal-400/40 bg-teal-500/10 p-4 shadow-inner shadow-slate-900/60">
      <div class="flex items-center justify-between gap-4">
        <div>
          <p class="text-xs uppercase tracking-[0.3em] text-teal-200">Quest Thread</p>
          <h3 class="mt-1 text-lg font-semibold text-slate-100">${story.title}</h3>
          <p class="text-sm text-slate-300">${story.synopsis}</p>
        </div>
        <div class="text-3xl" aria-hidden="true">📜</div>
      </div>
      <ul class="mt-4 space-y-2 text-sm text-slate-200">
        ${story.beats.map((beat) => `<li class="rounded-xl bg-slate-950/60 px-3 py-2">${beat}</li>`).join("")}
      </ul>
      <p class="mt-3 text-sm text-teal-200">Reward: ${story.reward}</p>
      <p class="mt-2 text-xs italic text-slate-400">${story.mood}</p>
    </div>
  `;
}

function renderBossCard(boss) {
  const container = document.getElementById("boss-card");
  const rarity = rarityConfig[boss.rarity];
  container.innerHTML = `
    <div class="rounded-2xl border ${rarity.color} p-4 shadow-inner shadow-slate-900/60">
      <div class="flex items-center justify-between gap-4">
        <div>
          <p class="text-xs uppercase tracking-[0.3em] ${rarity.accent}">${rarity.label}</p>
          <h3 class="mt-1 text-lg font-semibold text-slate-100">${boss.name}</h3>
          <p class="text-sm text-slate-300 capitalize">${boss.family}</p>
        </div>
        <div class="text-4xl" aria-hidden="true">${boss.emoji}</div>
      </div>
      <p class="mt-3 text-sm text-orange-200">Phase: ${boss.phase}</p>
      <ul class="mt-3 space-y-2 text-sm text-slate-200">
        ${boss.tactics
          .map((tactic) => `<li class="rounded-xl bg-slate-950/60 px-3 py-2">${tactic}</li>`)
          .join("")}
      </ul>
    </div>
  `;
}

function renderBoard(board) {
  const summary = document.getElementById("board-summary");
  const grid = document.getElementById("board-grid");
  summary.innerHTML = "";
  grid.innerHTML = "";

  const counts = board.cells.flat().reduce((acc, cell) => {
    const key = cell.roomType;
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  Object.entries(counts).forEach(([roomType, count]) => {
    const config = roomTypeConfig[roomType];
    const item = document.createElement("div");
    item.className = `rounded-2xl border ${config.badge} px-4 py-3 text-sm shadow-inner shadow-slate-950/50`;
    item.innerHTML = `<span class="font-semibold">${config.emoji} ${config.label}</span><span class="ml-2 text-slate-200">${count}</span>`;
    summary.appendChild(item);
  });

  board.cells.forEach((row) => {
    const rowEl = document.createElement("div");
    rowEl.className = "grid gap-3 md:grid-cols-4";
    row.forEach((cell) => {
      const rarity = rarityConfig[cell.rarity];
      const roomMeta = roomTypeConfig[cell.roomType];
      const tile = document.createElement("div");
      tile.className = `rounded-2xl border ${rarity.color} p-3 shadow-inner shadow-slate-950/60`;
      tile.innerHTML = `
        <div class="flex items-center justify-between text-xs uppercase tracking-widest">
          <span class="${roomMeta.badge} inline-flex items-center gap-2 rounded-full px-2 py-1 font-semibold">${roomMeta.emoji} ${roomMeta.label}</span>
          <span class="${rarity.accent}">${rarity.emoji} ${rarity.label}</span>
        </div>
        <p class="mt-2 text-sm text-slate-100">${cell.label}</p>
      `;
      rowEl.appendChild(tile);
    });
    grid.appendChild(rowEl);
  });
}

function setupEventHandlers() {
  document.getElementById("generate-hero").addEventListener("click", () => {
    currentHero = generateHero(rarityOrder[heroRarityIndex]);
    renderHeroCard(currentHero);
    updateDeckInsights();
    appendToLog(formatHeroLog(currentHero));
  });

  document.getElementById("generate-monster").addEventListener("click", () => {
    currentMonster = generateMonster(monsterFamilyIndex);
    renderMonsterCard(currentMonster);
    updateDeckInsights();
    appendToLog(formatMonsterLog(currentMonster));
  });

  document.getElementById("cycle-hero-rarity").addEventListener("click", () => {
    heroRarityIndex = (heroRarityIndex + 1) % rarityOrder.length;
    updateHeroRarityButton();
  });

  document.getElementById("cycle-monster-family").addEventListener("click", () => {
    monsterFamilyIndex = (monsterFamilyIndex + 1) % monsterFamilies.length;
    updateMonsterFamilyButton();
  });

  document.getElementById("generate-item").addEventListener("click", () => {
    const rarity = rarityOrder[itemRarityIndex];
    currentItem = generateItem(rarity);
    renderItemCard(currentItem);
    appendToLog(formatItemLog(currentItem));
  });

  document.getElementById("cycle-item-rarity").addEventListener("click", () => {
    itemRarityIndex = (itemRarityIndex + 1) % rarityOrder.length;
    updateItemRarityButton();
  });

  document.getElementById("generate-trap").addEventListener("click", () => {
    const rarity = rarityOrder[trapRarityIndex];
    currentTrap = generateTrap(rarity);
    renderTrapCard(currentTrap);
    appendToLog(formatTrapLog(currentTrap));
  });

  document.getElementById("cycle-trap-rarity").addEventListener("click", () => {
    trapRarityIndex = (trapRarityIndex + 1) % rarityOrder.length;
    updateTrapRarityButton();
  });

  document.getElementById("generate-story").addEventListener("click", () => {
    currentStory = generateStory();
    renderStoryCard(currentStory);
    appendToLog(formatStoryLog(currentStory));
  });

  document.getElementById("generate-boss").addEventListener("click", () => {
    currentBoss = generateBoss();
    renderBossCard(currentBoss);
    appendToLog(formatBossLog(currentBoss));
  });

  document.getElementById("generate-recovery").addEventListener("click", () => {
    const rarity = rarityOrder[recoveryRarityIndex];
    currentRecovery = generateRecovery(rarity);
    renderRecoveryCard(currentRecovery);
    appendToLog(formatRecoveryLog(currentRecovery));
  });

  document.getElementById("cycle-recovery-rarity").addEventListener("click", () => {
    recoveryRarityIndex = (recoveryRarityIndex + 1) % rarityOrder.length;
    updateRecoveryRarityButton();
  });

  document.getElementById("generate-riddle").addEventListener("click", () => {
    const rarity = rarityOrder[riddleRarityIndex];
    currentRiddle = generateRiddle(rarity);
    renderRiddleCard(currentRiddle);
    appendToLog(formatRiddleLog(currentRiddle));
  });

  document.getElementById("cycle-riddle-rarity").addEventListener("click", () => {
    riddleRarityIndex = (riddleRarityIndex + 1) % rarityOrder.length;
    updateRiddleRarityButton();
  });

  document.getElementById("generate-relic").addEventListener("click", () => {
    const rarity = rarityOrder[relicRarityIndex];
    currentRelic = generateRelic(rarity);
    renderRelicCard(currentRelic);
    appendToLog(formatRelicLog(currentRelic));
  });

  document.getElementById("cycle-relic-rarity").addEventListener("click", () => {
    relicRarityIndex = (relicRarityIndex + 1) % rarityOrder.length;
    updateRelicRarityButton();
  });

  document.getElementById("generate-board").addEventListener("click", () => {
    currentBoard = generateBoard();
    renderBoard(currentBoard);
    appendToLog(formatBoardLog(currentBoard));
  });

  document.getElementById("clear-log").addEventListener("click", () => {
    const log = document.getElementById("event-log");
    log.innerHTML = "";
  });
}

function init() {
  updateHeroRarityButton();
  updateMonsterFamilyButton();
  updateItemRarityButton();
  updateTrapRarityButton();
  updateRecoveryRarityButton();
  updateRiddleRarityButton();
  updateRelicRarityButton();
  updateDeckInsights();
  setupEventHandlers();
}

document.addEventListener("DOMContentLoaded", init);
