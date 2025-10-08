export function randomFrom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export function weightedRandom(weightMap) {
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
