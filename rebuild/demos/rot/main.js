import { rarityOrder, rarityConfig } from "../../src/data/rarity.js";
import { heroClasses } from "../../src/data/heroes.js";
import { monsterFamilies } from "../../src/data/monsters.js";
import { itemCatalog } from "../../src/data/items.js";
import { trapCatalog } from "../../src/data/traps.js";
import { recoveryCatalog } from "../../src/data/recoveries.js";
import { riddleCatalog } from "../../src/data/riddles.js";
import { relicCatalog } from "../../src/data/relics.js";
import { storyPrompts } from "../../src/data/stories.js";
import { bossRoster } from "../../src/data/bosses.js";
import { randomFrom, weightedRandom } from "../../src/utils/random.js";
import { pickCards } from "../../src/utils/deck.js";

function pickHero() {
  const classEntries = Object.entries(heroClasses);
  const [classKey, heroClass] = randomFrom(classEntries);
  const rarityKey = randomFrom(rarityOrder);
  const rarity = rarityConfig[rarityKey];
  const persona = randomFrom(heroClass.names);
  const epithet = randomFrom(heroClass.epithets);

  return {
    name: `${persona} ${epithet}`,
    title: heroClass.label,
    rarityKey,
    rarity,
    emoji: heroClass.emoji,
    dicePool: heroClass.baseDice + (rarity.diceMod ?? 0),
    manaPool: heroClass.baseMana + (rarity.manaMod ?? 0),
    deck: {
      attack: pickCards(heroClass.decks.attack, rarityKey, 2),
      defense: pickCards(heroClass.decks.defense, rarityKey, 1),
      spell: pickCards(heroClass.decks.spell, rarityKey, 1),
    },
  };
}

function pickMonster() {
  const familyEntries = Object.entries(monsterFamilies);
  const [, family] = randomFrom(familyEntries);
  const rosterEntry = randomFrom(family.roster);
  const rarityKey = rosterEntry.rarity;
  const rarity = rarityConfig[rarityKey] ?? rarityConfig.common;

  return {
    name: rosterEntry.name,
    rarityKey,
    rarity,
    emoji: family.emoji,
    family: family.label,
    tactic: randomFrom(family.tactics),
    dicePool: family.baseDice + (rarity.diceMod ?? 0),
    manaPool: family.baseMana + (rarity.manaMod ?? 0),
  };
}

function buildBoard() {
  const width = 9;
  const height = 9;
  const digger = new ROT.Map.Digger(width, height, {
    roomWidth: [3, 4],
    roomHeight: [3, 4],
    corridorLength: [2, 3],
  });

  const board = Array.from({ length: height }, () => Array(width).fill({ type: "void" }));
  const rooms = [];

  digger.create((x, y, contents) => {
    if (contents === 0) {
      board[y][x] = { type: "void" };
      return;
    }

    rooms.push({ x, y });
    board[y][x] = { type: "floor" };
  });

  const roomTypes = [
    { key: "monster", emoji: "🕷️" },
    { key: "trap", emoji: "🪤" },
    { key: "item", emoji: "🎁" },
    { key: "recovery", emoji: "🌿" },
    { key: "riddle", emoji: "❓" },
    { key: "relic", emoji: "🗝️" },
    { key: "story", emoji: "📖" },
  ];

  const annotated = rooms.map((room) => {
    const marker = randomFrom(roomTypes);
    board[room.y][room.x] = { type: marker.key, emoji: marker.emoji };
    return { ...room, type: marker.key, emoji: marker.emoji };
  });

  const center = annotated[Math.floor(annotated.length / 2)] ?? { x: 4, y: 4, type: "start", emoji: "★" };
  center.type = "start";
  center.emoji = "★";
  board[center.y][center.x] = { type: "start", emoji: "★" };

  return {
    width,
    height,
    grid: board,
    rooms: annotated,
    start: center,
  };
}

function pickFromCatalog(catalog, rarityKey) {
  const filtered = rarityKey ? catalog.filter((entry) => entry.rarity === rarityKey) : catalog;
  const pool = filtered.length ? filtered : catalog;
  return randomFrom(pool);
}

function simulateCombat(hero, monster) {
  const rounds = [];
  let heroHP = hero.dicePool * 2;
  let monsterHP = monster.dicePool * 2;
  let round = 1;

  while (heroHP > 0 && monsterHP > 0 && round <= 5) {
    const heroRoll = rollDice(hero.dicePool) + (hero.manaPool > 0 ? rollDice(1) : 0);
    const monsterRoll = rollDice(monster.dicePool) + (monster.manaPool > 0 ? rollDice(1) : 0);

    if (heroRoll >= monsterRoll) {
      const damage = heroRoll - monsterRoll;
      monsterHP -= damage;
      rounds.push({ round, heroRoll, monsterRoll, result: `Hero hits for ${damage}` });
    } else {
      const damage = monsterRoll - heroRoll;
      heroHP -= damage;
      rounds.push({ round, heroRoll, monsterRoll, result: `Monster hits for ${damage}` });
    }

    round += 1;
  }

  let outcome = "Stalemate";
  if (heroHP > monsterHP) {
    outcome = "Hero triumphs";
  } else if (monsterHP > heroHP) {
    outcome = "Monster prevails";
  }

  return {
    rounds,
    heroHP: Math.max(heroHP, 0),
    monsterHP: Math.max(monsterHP, 0),
    outcome,
  };
}

function rollDice(count) {
  let total = 0;
  for (let i = 0; i < count; i += 1) {
    total += Math.floor(Math.random() * 6) + 1;
  }
  return total;
}

function renderHero(hero) {
  const el = document.getElementById("hero");
  el.innerHTML = `
    <h2>Hero</h2>
    <dl>
      <div>
        <dt>Name</dt>
        <dd>${hero.name}</dd>
      </div>
      <div>
        <dt>Class</dt>
        <dd>${hero.title} ${hero.emoji}</dd>
      </div>
      <div>
        <dt>Rarity</dt>
        <dd><span class="tag">${hero.rarity.emoji} ${hero.rarity.label}</span></dd>
      </div>
      <div>
        <dt>Dice / Mana</dt>
        <dd>${hero.dicePool}🎲 / ${hero.manaPool}✨</dd>
      </div>
    </dl>
    <ul>
      <li><strong>Attack:</strong> ${hero.deck.attack.map((card) => card.name).join(", ")}</li>
      <li><strong>Defense:</strong> ${hero.deck.defense.map((card) => card.name).join(", ")}</li>
      <li><strong>Spell:</strong> ${hero.deck.spell.map((card) => card.name).join(", ")}</li>
    </ul>
  `;
}

function renderMonster(monster) {
  const el = document.getElementById("monster");
  el.innerHTML = `
    <h2>Monster</h2>
    <dl>
      <div>
        <dt>Name</dt>
        <dd>${monster.name}</dd>
      </div>
      <div>
        <dt>Family</dt>
        <dd>${monster.family} ${monster.emoji}</dd>
      </div>
      <div>
        <dt>Rarity</dt>
        <dd><span class="tag">${monster.rarity.emoji} ${monster.rarity.label}</span></dd>
      </div>
      <div>
        <dt>Dice / Mana</dt>
        <dd>${monster.dicePool}🎲 / ${monster.manaPool}✨</dd>
      </div>
    </dl>
    <ul>
      <li><strong>Tactic:</strong> ${monster.tactic}</li>
    </ul>
  `;
}

function renderBoard(board, stops) {
  const el = document.getElementById("board");
  const display = board.grid
    .map((row) =>
      row
        .map((cell) => {
          if (cell.type === "void") return "·";
          return cell.emoji ?? "·";
        })
        .join(" ")
    )
    .join("\n");

  el.innerHTML = `
    <h2>9×9 Board</h2>
    <pre>${display}</pre>
    <ul>
      ${stops.map((stop) => `<li><strong>${stop.label}:</strong> ${stop.summary}</li>`).join("")}
    </ul>
  `;
}

function renderCombat(combat) {
  const el = document.getElementById("combat");
  el.innerHTML = `
    <h2>Combat</h2>
    <pre>${combat.rounds
      .map((round) => `Round ${round.round}: Hero ${round.heroRoll} vs Monster ${round.monsterRoll} → ${round.result}`)
      .join("\n")}
HP Remaining → Hero: ${combat.heroHP} / Monster: ${combat.monsterHP}
Outcome → ${combat.outcome}
    </pre>
  `;
}

function renderLoot({ item, trap, recovery, riddle, relic }) {
  const el = document.getElementById("loot");
  el.innerHTML = `
    <h2>Findings</h2>
    <ul>
      <li><strong>Item:</strong> ${item.name} (${item.rarity}) — ${item.effect}</li>
      <li><strong>Trap:</strong> ${trap.name} (Diff ${trap.difficulty}) — ${trap.effect}</li>
      <li><strong>Recovery:</strong> ${recovery.name} — ${recovery.benefit}</li>
      <li><strong>Riddle:</strong> ${riddle.prompt} → ${riddle.answer}</li>
      <li><strong>Relic:</strong> ${relic.name} — ${relic.power}</li>
    </ul>
  `;
}

function renderStory(story, boss) {
  const el = document.getElementById("story");
  el.innerHTML = `
    <h2>Story Thread</h2>
    <p><strong>${story.title}</strong> — ${story.synopsis}</p>
    <ul>${story.beats.map((beat) => `<li>${beat}</li>`).join("")}</ul>
    <p><em>Reward:</em> ${story.reward}</p>
    <p><strong>Boss Looming:</strong> ${boss.name} (${boss.phase})</p>
  `;
}

function init() {
  const hero = pickHero();
  const monster = pickMonster();
  const board = buildBoard();
  const stops = buildAdventureStops(board);

  const item = pickFromCatalog(itemCatalog, randomFrom(rarityOrder));
  const trap = pickFromCatalog(trapCatalog, randomFrom(rarityOrder));
  const recovery = pickFromCatalog(recoveryCatalog, randomFrom(rarityOrder));
  const riddle = pickFromCatalog(riddleCatalog, randomFrom(rarityOrder));
  const relic = pickFromCatalog(relicCatalog, randomFrom(rarityOrder));
  const story = randomFrom(storyPrompts);
  const boss = randomFrom(bossRoster);

  const combat = simulateCombat(hero, monster);

  renderHero(hero);
  renderMonster(monster);
  renderBoard(board, stops);
  renderLoot({ item, trap, recovery, riddle, relic });
  renderCombat(combat);
  renderStory(story, boss);
}

function buildAdventureStops(board) {
  const labels = {
    start: "Starting Chamber",
    monster: "Monster Lair",
    trap: "Trap Site",
    item: "Loot Cache",
    recovery: "Rest Spot",
    riddle: "Puzzle Gate",
    relic: "Relic Vault",
    story: "Story Shrine",
  };

  return board.rooms.slice(0, 6).map((room, index) => {
    const label = labels[room.type] ?? "Chamber";
    return {
      index,
      label,
      summary: `(${room.x}, ${room.y}) marked by ${room.emoji}`,
    };
  });
}

document.addEventListener("DOMContentLoaded", init);
