import { recoveryCatalog } from "../data/recoveries.js";
import { rarityConfig } from "../data/rarity.js";
import { randomFrom } from "../utils/random.js";

export function generateRecovery(rarityKey) {
  const filtered = rarityKey
    ? recoveryCatalog.filter((entry) => entry.rarity === rarityKey)
    : recoveryCatalog;
  const pool = filtered.length ? filtered : recoveryCatalog;
  const choice = randomFrom(pool);
  return choice ? { ...choice } : null;
}

export function formatRecoveryLog(recovery) {
  if (!recovery) {
    return "No sanctuaries revealed themselves this delve.";
  }

  const rarity = rarityConfig[recovery.rarity] ?? rarityConfig.common;
  return `They discovered a ${rarity.label.toLowerCase()} refuge named ${recovery.name}.`;
}
