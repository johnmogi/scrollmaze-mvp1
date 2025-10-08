export function randomFrom(array) {
  if (!array?.length) {
    return null;
  }
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

export function weightedRandom(weightMap) {
  const entries = Array.isArray(weightMap)
    ? weightMap
    : Object.entries(weightMap).map(([key, weight]) => ({ key, weight }));

  const totalWeight = entries.reduce((sum, entry) => sum + entry.weight, 0);
  if (totalWeight <= 0) {
    return entries[entries.length - 1]?.key ?? null;
  }

  let roll = Math.random() * totalWeight;
  for (const entry of entries) {
    roll -= entry.weight;
    if (roll <= 0) {
      return entry.key ?? entry.value ?? entry;
    }
  }

  const last = entries[entries.length - 1];
  return last?.key ?? last?.value ?? last ?? null;
}

export function sampleWithoutReplacement(array, count) {
  if (!array?.length || count <= 0) {
    return [];
  }

  const pool = [...array];
  const result = [];

  while (result.length < count && pool.length) {
    const index = Math.floor(Math.random() * pool.length);
    const [picked] = pool.splice(index, 1);
    result.push(picked);
  }

  return result;
}
