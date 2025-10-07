# ScrollMaze MVP1: Dungeon Crawler Generator Suite

## Overview

**ScrollMaze** is a browser-based dungeon crawler prototype that generates heroes, monsters, items, traps, stories, relics, riddles, and board layouts. Set in a whimsical sugar-themed fantasy world where corrupted dwarves guard crystal treasures beneath the earth, players can explore procedural mazes filled with themed encounters.

This MVP focuses on the generator suite—randomized content creation for game elements—before implementing the full adventure loop, combat system, and board traversal mechanics.

## Game Lore & Theme

In the kingdom of Sugaria, neutral dwarves descended into the earth's crystal depths to locate the lost sugar crystals, the source of all sweetness and life. However, proximity to these ancient treasures corrupted many dwarves, turning them into guardians of the hoard alongside vigilant insect swarms.

Heroes from four classes must crawl through shifting mazes to reclaim the sugar crystals and return them to the starving surface kingdom. The adventure unfolds through a narrative scroll that records events in the past tense, creating an epic tale of exploration and heroism.

## Tech Stack

- **Frontend**: Pure HTML5 + CSS3 + JavaScript (no frameworks)
- **Styling**: Tailwind CSS via CDN for rapid prototyping (recommended for production: install via CLI/PostCSS)
- **Icons**: Unicode emojis for visual flair across all game elements
- **Architecture**: Single-page application with modular generator functions

## Project Structure

```
ScrollMaze/
├── index.html          # Main UI with generator panels and scroll
├── app.js             # Core logic, data models, and generators
├── README.md          # This documentation
└── plans/             # Development notes and planning documents
    └── 1,md          # Detailed development history and decisions
```

## Data Models & Rarity System

All game elements follow a consistent rarity system:

| Rarity | Color | Emoji | Dice Mod | Mana Mod | Description |
|--------|-------|-------|----------|----------|-------------|
| Common | Green | 🍃 | +0 | +0 | Basic elements |
| Rare | Blue | 💠 | +1 | +1 | Enhanced variants |
| Epic | Purple | 🔮 | +2 | +2 | Powerful items |
| Legendary | Orange | 🧡 | +3 | +3 | Ultimate rarities |

### Hero Classes

Four distinct hero archetypes with unique personalities, stats, and deck compositions:

- **Snobbish Paladin** (🛡️) - Judges others by perfection standards
- **Arrogant Mage** (🪄) - Corrects pronunciation obsessively  
- **Cookie-Stealing Archer** (🏹) - Can't resist unattended pastries
- **Double-Crossing Dwarf** (🪓) - Betrays allies over stale bread

Each hero has base dice/mana pools modified by rarity, plus class-specific attack/defense/spell/relic decks.

### Monster Families

Four creature types with thematic abilities and behaviors:

- **Beastly Wardens** (🐻) - Corrupted animals guarding tunnels
- **Crystal Hive** (🐜) - Vigilant insects protecting the hoard
- **Crumb-Bound Remains** (💀) - Reanimated undead beasts
- **Fae of the Deep** (🐉) - Goblins, trolls, and dragons dazzled by crystals

### Room Types

Seven tile categories that populate the maze grid:

- **Monster** (🕷️) - Combat encounters
- **Trap** (🪤) - Dice-based challenges
- **Item** (🎁) - Equipment and consumables
- **Story** (📖) - Narrative progression hooks
- **Recovery** (🌿) - Rest and resource restoration
- **Riddle** (❓) - Puzzle-solving challenges
- **Relic** (🗝️) - Powerful permanent upgrades

## Generator Suite

Each generator creates content with appropriate rarity weighting, visual rendering, and narrative logging.

### Hero Generator
- **Function**: [generateHero(rarityKey)](cci:1://file:///c:/Users/anist/OneDrive/Documents/GAMES/ScrollMaze/app.js:800:0-826:1)
- **Output**: Hero card with name, class, stats, and ability decks
- **UI**: Rarity cycling button, card display, deck insights panel

### Monster Generator  
- **Function**: [generateMonster(familyIndex)](cci:1://file:///c:/Users/anist/OneDrive/Documents/GAMES/ScrollMaze/app.js:828:0-855:1)
- **Output**: Monster card with family theme, stats, and ability decks
- **UI**: Family cycling button, card display, deck insights panel

### Item Generator
- **Function**: `generateItem(rarityKey)`
- **Output**: Item card with type, effect, and flavor text
- **UI**: Rarity cycling, card display

### Trap Generator
- **Function**: `generateTrap(rarityKey)`
- **Output**: Trap card with difficulty, effect, and flavor text
- **UI**: Rarity cycling, card display

### Story Generator
- **Function**: `generateStory()`
- **Output**: Story card with title, beats, reward, and mood
- **UI**: Card display and narrative logging

### Boss Generator
- **Function**: `generateBoss()`
- **Output**: Boss card with phase, family, and tactical behaviors
- **UI**: Card display and narrative logging

### Recovery Generator
- **Function**: `generateRecovery(rarityKey)`
- **Output**: Recovery area card with benefit and emoji
- **UI**: Rarity cycling, card display, narrative logging

### Riddle Generator
- **Function**: `generateRiddle(rarityKey)`
- **Output**: Riddle card with prompt, answer, and rarity
- **UI**: Rarity cycling, card display, narrative logging

### Relic Generator
- **Function**: `generateRelic(rarityKey)`
- **Output**: Relic card with name, power description, and emoji
- **UI**: Rarity cycling, card display, narrative logging

### Board Generator
- **Function**: `generateBoard()`
- **Output**: 3×4 grid of weighted room types with rarity distribution
- **UI**: Summary panel with room counts, visual grid display

## User Interface

The application provides a clean, emoji-rich interface:

- **Generator Panels**: Left column with buttons for each content type
- **Display Cards**: Central area showing generated content with Tailwind styling
- **Deck Insights**: Bottom-left panel showing hero/monster deck compositions
- **Board View**: Right panel displaying maze layout and room summaries
- **Event Scroll**: Bottom panel logging narrative in past tense

### Visual Design
- Color-coded rarity borders and badges
- Emoji icons for all game elements
- Responsive grid layouts
- Dark theme with slate color palette

## Usage Instructions

1. **Open Application**: Load [index.html](cci:7://file:///c:/Users/anist/OneDrive/Documents/GAMES/ScrollMaze/index.html:0:0-0:0) in a modern web browser
2. **Generate Content**: Click any "Generate" button to create random elements
3. **Cycle Rarities**: Use "Cycle Rarity" buttons to change generation parameters
4. **View Results**: Generated cards appear in their respective display areas
5. **Check Insights**: Deck summaries update for heroes and monsters
6. **Read Scroll**: Narrative events accumulate in the bottom log
7. **Explore Board**: Generate and view procedural maze layouts

## Combat & Trap Mechanics (Future)

While not implemented in this MVP, the planned systems include:

- **Dice Resolution**: Heroes roll dice pools (modified by rarity) for attack power and trap escapes
- **Mana System**: Spell casting and special abilities consume mana (rarity-scaled)
- **Deck Management**: Heroes draw from attack/defense/spell/relic decks during encounters
- **Trap Challenges**: Difficulty thresholds require dice successes to avoid status effects

## Development Roadmap

### MVP1 (Current)
- ✅ Generator suite implementation
- ✅ Basic UI and styling
- ✅ Rarity and weighting systems
- ⏳ Comprehensive documentation

### MVP2 (Next)
- 🔄 Interactive adventure loop
- 🔄 Board traversal mechanics
- 🔄 Combat system implementation
- 🔄 Trap resolution UI

### Future Enhancements
- 🎯 Save/load adventure states
- 🎯 Multiplayer support
- 🎯 Phaser.js integration for animations
- 🎯 Next.js migration for production
- 🎯 Advanced AI for dynamic storytelling

## Contributing

This is a prototype project. For development notes and planning documents, see the `plans/` directory.

## License

Prototype code - not licensed for commercial use.