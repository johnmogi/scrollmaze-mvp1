import { rarityOrder, rarityConfig } from "./data/rarity.js";
import {
  generateHero,
  formatHeroLog,
  nextHeroRarity,
  getHeroRarityLabel,
} from "./modules/hero.js";
import {
  generateMonster,
  formatMonsterLog,
  nextMonsterFamilyIndex,
  getMonsterFamilyLabel,
} from "./modules/monster.js";

const state = {
  heroRarityIndex: 0,
  hero: null,
  monsterFamilyIndex: 0,
  monster: null,
};

function setupButtons() {
  const heroButton = document.getElementById("generate-hero");
  const heroCycle = document.getElementById("cycle-hero-rarity");
  const monsterButton = document.getElementById("generate-monster");
  const monsterCycle = document.getElementById("cycle-monster-family");

  heroButton?.addEventListener("click", () => {
    const rarityKey = rarityOrder[state.heroRarityIndex];
    state.hero = generateHero(rarityKey);
    renderHeroCard(state.hero);
    appendToLog(formatHeroLog(state.hero));
  });

  heroCycle?.addEventListener("click", () => {
    state.heroRarityIndex = nextHeroRarity(state.heroRarityIndex);
    updateHeroRarityButton();
  });

  monsterButton?.addEventListener("click", () => {
    state.monster = generateMonster({
      familyIndex: state.monsterFamilyIndex,
    });
    renderMonsterCard(state.monster);
    appendToLog(formatMonsterLog(state.monster));
  });

  monsterCycle?.addEventListener("click", () => {
    state.monsterFamilyIndex = nextMonsterFamilyIndex(state.monsterFamilyIndex);
    updateMonsterFamilyButton();
  });
}

function updateHeroRarityButton() {
  const button = document.getElementById("cycle-hero-rarity");
  if (!button) return;
  const label = getHeroRarityLabel(state.heroRarityIndex);
  button.textContent = `Rarity: ${label}`;
}

function updateMonsterFamilyButton() {
  const button = document.getElementById("cycle-monster-family");
  if (!button) return;
  button.textContent = `Family: ${getMonsterFamilyLabel(state.monsterFamilyIndex)}`;
}

function renderHeroCard(hero) {
  const container = document.getElementById("hero-card");
  if (!container) return;
  if (!hero) {
    container.innerHTML = `<p class="text-sm text-slate-500">Press generate to discover a hero.</p>`;
    return;
  }

  const rarity = rarityConfig[hero.rarity] ?? rarityConfig.common;
  container.innerHTML = `
    <article class="rounded-2xl border ${rarity.color} bg-slate-900/70 p-4 shadow-inner shadow-slate-950/60">
      <header class="flex items-center justify-between">
        <div>
          <p class="text-xs uppercase tracking-[0.3em] ${rarity.accent}">${rarity.label}</p>
          <h3 class="mt-1 text-lg font-semibold text-slate-100">${hero.name}</h3>
          <p class="text-sm text-slate-300">${hero.title}</p>
        </div>
        <div class="text-4xl" aria-hidden="true">${hero.emoji}</div>
      </header>
      <p class="mt-3 text-sm text-slate-300">${hero.persona}</p>
      <dl class="mt-4 grid grid-cols-2 gap-4 text-xs text-slate-200">
        <div class="rounded-xl bg-slate-950/60 px-3 py-2">
          <dt class="uppercase tracking-widest text-slate-400">Dice</dt>
          <dd class="mt-1 text-lg font-semibold">${hero.dicePool} 🎲</dd>
        </div>
        <div class="rounded-xl bg-slate-950/60 px-3 py-2">
          <dt class="uppercase tracking-widest text-slate-400">Mana</dt>
          <dd class="mt-1 text-lg font-semibold">${hero.manaPool} ✨</dd>
        </div>
      </dl>
    </article>
  `;
}

function appendToLog(message) {
  const log = document.getElementById("event-log");
  if (!log) return;
  const entry = document.createElement("li");
  entry.className = "rounded-xl bg-slate-950/60 px-4 py-3 shadow-inner shadow-slate-950/70";
  entry.textContent = message;
  log.prepend(entry);
}

function renderMonsterCard(monster) {
  const container = document.getElementById("monster-card");
  if (!container) return;

  if (!monster) {
    container.innerHTML = `<p class="text-sm text-slate-500">Press generate to reveal a monster.</p>`;
    return;
  }

  const rarity = rarityConfig[monster.rarity] ?? rarityConfig.common;

  container.innerHTML = `
    <article class="rounded-2xl border ${rarity.color} bg-slate-900/70 p-4 shadow-inner shadow-slate-950/60">
      <header class="flex items-center justify-between">
        <div>
          <p class="text-xs uppercase tracking-[0.3em] ${rarity.accent}">${rarity.label}</p>
          <h3 class="mt-1 text-lg font-semibold text-slate-100">${monster.name}</h3>
          <p class="text-sm text-slate-300">${monster.familyLabel}</p>
        </div>
        <div class="text-4xl" aria-hidden="true">${monster.emoji}</div>
      </header>
      <p class="mt-3 text-sm text-slate-300">${monster.description}</p>
      <ul class="mt-4 space-y-2 text-xs text-slate-200">
        <li class="rounded-xl bg-slate-950/60 px-3 py-2">Dice Pool: ${monster.dicePool} 🎲</li>
        <li class="rounded-xl bg-slate-950/60 px-3 py-2">Mana Pool: ${monster.manaPool} ✨</li>
        <li class="rounded-xl bg-slate-950/60 px-3 py-2">Tactic: ${monster.tactic}</li>
      </ul>
    </article>
  `;
}

function init() {
  setupButtons();
  updateHeroRarityButton();
  updateMonsterFamilyButton();
}

document.addEventListener("DOMContentLoaded", init);
