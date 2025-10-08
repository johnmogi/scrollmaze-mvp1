import { bossRoster, bossRarityWeights } from "../data/bosses.js";
import { rarityConfig } from "../data/rarity.js";
import { randomFrom, weightedRandom } from "../utils/random.js";

export function generateBoss() {
  if (!bossRoster.length) {
    return null;
  }

  const rarityKey = weightedRandom(
    Object.entries(bossRarityWeights).map(([key, weight]) => ({ key, weight }))
  );

  const candidates = bossRoster.filter((boss) => boss.rarity === rarityKey);
  const choice = randomFrom(candidates.length ? candidates : bossRoster);
  return choice ? { ...choice, rarityKey } : null;
}

export function formatBossLog(boss) {
  if (!boss) {
    return "No tyrants stirred in the maze depths.";
  }

  const rarity = rarityConfig[boss.rarity] ?? rarityConfig.common;
  return `Rumors whispered of ${boss.name}, preparing the ${boss.phase.toLowerCase()}.`;
}
