# MazeScroll Adventure Generator Blueprint

## Objective
Create a procedural adventure generator that assembles a complete dungeon run including:
- A hero party (1–3 heroes)
- Sequential rooms populated with monsters, traps, riddles, story nodes, recovery areas, relics, and items
- A climactic boss encounter
- A narrative log describing key beats in whimsical pastry-fantasy tone
- A visual board showing start, path, and exit

## Existing Building Blocks
- `app.js` (to be modularized) already includes generators for heroes, monsters, items, traps, relics, bosses, riddles, recovery spots, and board layout.
- `rarityConfig`, `rarityOrder`, and deck utilities govern dice/mana scaling and selection logic.
- Rendering helpers (`renderHeroCard()`, `renderMonsterCard()`, `renderBoard()`, etc.) produce Tailwind-styled UI and log entries.
- `appendToLog()` maintains the legend scroll in past tense.

## Required Enhancements
- **Adventure assembly**: Implement `generateAdventure()` that orchestrates the existing generators, returning a structured object:
  ```js
  {
    party: HeroEntity[],
    board: {
      rows: number,
      cols: number,
      cells: RoomCell[][],
      start: { row: number, col: number },
      exit: { row: number, col: number },
      boss: { roomType: "boss", data: BossEntity }
    },
    storyThread: StoryPrompt,
    boss: BossEntity,
    log: string[]
  }
  ```
- **Room enrichment**: Extend `generateBoard()` to assign encounter payloads per cell (`monster`, `trap`, etc.) and mark special nodes (`start`, `exit`, `boss`).
- **Narrative synthesis**: Produce 5–10 log entries covering opening, exploration, setbacks, discoveries, and finale using existing format helpers and `storyPrompts` data.
- **Rendering**: Provide `renderAdventure()` that displays hero party, enriched board, and adventure summary. Add a new "Generate Full Adventure" button to the UI.
- **State management**: Track adventure state separately from individual card generators to avoid cross-feature conflicts.

## Stretch Goals (Post-MVP)
- Integrate dice resolution and mana consumption into simulated encounters.
- Save/export adventure state as JSON for replay.
- Add hover or modal previews for encounters on the board tiles.

## Tone Guidance
Maintain ScrollMaze's whimsical pastry-fantasy narration (e.g., "A faint glaze glistened on the tiles as they crossed into the Jelly Chamber").
