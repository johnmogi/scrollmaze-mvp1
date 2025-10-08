import { rarityConfig, rarityOrder } from "../data/rarity.js";
import { heroClasses } from "../data/heroes.js";
import { randomFrom } from "../utils/random.js";
import { pickCards } from "../utils/deck.js";

function rollPersona(heroClass) {
  const name = randomFrom(heroClass.names);
  const epithet = randomFrom(heroClass.epithets);
  return {
    name,
    epithet,
    persona: heroClass.persona,
  };
}

export function generateHero(rarityKey) {
  const classKeys = Object.keys(heroClasses);
  const classKey = randomFrom(classKeys);
  const heroClass = heroClasses[classKey];
  const persona = rollPersona(heroClass);
  const rarity = rarityConfig[rarityKey] ?? rarityConfig.common;
  const dicePool = heroClass.baseDice + (rarity.diceMod ?? 0);
  const manaPool = heroClass.baseMana + (rarity.manaMod ?? 0);

  return {
    type: "hero",
    rarity: rarityKey,
    classKey,
    title: heroClass.label,
    name: `${persona.name} ${persona.epithet}`,
    emoji: heroClass.emoji,
    persona: persona.persona,
    dicePool,
    manaPool,
    deck: {
      attack: pickCards(heroClass.decks.attack, rarityKey, 3),
      defense: pickCards(heroClass.decks.defense, rarityKey, 2),
      spell: pickCards(heroClass.decks.spell, rarityKey, 2),
      relic: pickCards(heroClass.decks.relic, rarityKey, 1),
    },
  };
}

export function formatHeroLog(hero) {
  const rarity = rarityConfig[hero.rarity] ?? rarityConfig.common;
  return `The party enlisted the ${rarity.label.toLowerCase()} ${hero.title.toLowerCase()}, known as ${hero.name}.`;
}

export function nextHeroRarity(currentIndex = 0) {
  return (currentIndex + 1) % rarityOrder.length;
}

export function getHeroRarityLabel(index) {
  const key = rarityOrder[index];
  return `${rarityConfig[key].emoji} ${rarityConfig[key].label}`;
}
