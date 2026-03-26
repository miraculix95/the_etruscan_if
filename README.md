# The Etruscan — A Solo Adventure

A self-contained interactive fiction game set in the 6th-century BCE Mediterranean, inspired by Mika Waltari's historical novel.

## Play

Open `index.html` in any modern browser. No server, no dependencies, no installation.

**[Play online via GitHub Pages](https://miraculix95.github.io/the_etruscan_if/)** (once enabled)

## What It Is

A text adventure with illustrated scenes, sound effects, and a dice-based skill system — all in a single HTML file (~1.7 MB, zero external dependencies at runtime).

**Features:**
- Three character classes: Warrior, Seer, Merchant
- Dice-based skill checks and a pebble resource economy
- 46+ scenes across 2 acts with bottleneck narrative architecture
- Illustrated scenes (AI-generated via Flux/Replicate)
- Sound effects (AI-generated via ElevenLabs)
- Checkpoint save system
- Warm terracotta visual design (Cinzel + Crimson Text typography)

## Built With

This game was built as a human-AI collaboration:

- **Text & logic:** Claude (Anthropic)
- **Illustrations:** Flux via Replicate
- **Sound effects:** ElevenLabs
- **Design & direction:** Human

## Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Terra | `#B85042` | Accent, headings |
| Sand | `#E7E8D1` | Body text |
| Sage | `#A7BEAE` | Secondary accent |
| Dark | `#2A1A0E` | Background |
| Gold | `#C9A84C` | Highlights, rewards |

## Technical Notes

The entire game is a single HTML file containing inline CSS, JavaScript, and base64-encoded assets. This architecture was chosen deliberately: the game works offline, loads instantly, and can be distributed by simply sharing one file.

For the technical analysis, design rationale, and business plan behind this project, see the companion document: *Ship the Story — An Interactive Fiction Handbook & Business Plan for The Etruscan*.

## License

MIT License. See [LICENSE](LICENSE) for details.

The game's narrative is inspired by Mika Waltari's *The Etruscan* (1955). The novel remains under copyright until 2050 (EU: life + 70 years; Waltari d. 1979). This game is an original interactive work, not a reproduction of the novel.

## Author

Bastian Brand — built with AI assistance, March 2026.
