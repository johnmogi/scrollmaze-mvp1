import { rarityConfig, rarityOrder } from "../../data/rarity.js";
import { heroClasses as heroClassData } from "../../data/heroes.js";
import { pickCards } from "../../utils/deck.js";
import { randomFrom } from "../../utils/random.js";

function rollPersona(classKey) {
  const data = heroClassData[classKey];
  const name = randomFrom(data.names);
  const epithet = randomFrom(data.epithets);
  return `${name} ${epithet}`;
}

export function generateHero(rarityKey) {
  const classKey = randomFrom(Object.keys(heroClassData));
  const heroData = heroClassData[classKey];
  const rarityData = rarityConfig[rarityKey];
  const dicePool = heroData.baseDice + rarityData.diceMod;
  const manaPool = heroData.baseMana + rarityData.manaMod;

  const deck = {
    attack: pickCards(heroData.decks.attack, rarityKey, 3, rarityOrder),
    defense: pickCards(heroData.decks.defense, rarityKey, 2, rarityOrder),
    spell: pickCards(heroData.decks.spell, rarityKey, 2, rarityOrder),
    relic: pickCards(heroData.decks.relic, rarityKey, 1, rarityOrder),
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

export function formatHeroLog(hero) {
  const rarity = rarityConfig[hero.rarity];
  return `The party enlisted the ${rarity.label.toLowerCase()} ${hero.title.toLowerCase()}, known as ${hero.name}.`;
}

export { heroClassData as heroClasses };
