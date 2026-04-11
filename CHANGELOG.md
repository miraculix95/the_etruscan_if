# Changelog

All notable changes to The Etruscan are documented here.

## Product Status

**The Etruscan** is a browser-based interactive fiction game set in the 5th-century BCE Mediterranean, inspired by Mika Waltari's historical novel. Play as one of four character classes (Storm-Born, Warrior, Seer, Seafarer) and navigate a branching narrative through ancient Delphi with dice-based skill checks, an omen/defy system, illustrated scenes, and ambient audio.

Act I is complete and playable at [theetruscanif.vercel.app](https://theetruscanif.vercel.app). Act II is accessible via beta password. The game is a single HTML file with zero dependencies, works offline, and runs in any modern browser.

---

## 2026-04-06

### Shipped
- **Auto-save system**: game state saved every scene to localStorage; "Resume" button on title screen when returning
- **Text size toggle** (A+/A++/A): 3 levels, scales via zoom on desktop, element-specific on mobile, saved to localStorage
- **Top-bar redesign**: larger buttons (16-19px), sand color, higher default opacity; font-size and fullscreen controls prominent on title screen only
- **Start Game button**: gold border + gold text CTA, fills on hover
- **Handbook updates**: Ch.25/26 GTM updated with competition post-mortem; new Ch.29 (IF community landscape)

### Context
- First beta feedback received from IntFiction.org community (rovarsson and jkj_yuio)
- IFComp and Spring Thing competition windows both confirmed closed for V1

---

## 2026-04-05

### Shipped
- **Beta testing request** posted on IntFiction.org
- **Title screen UX fix**: buttons above the fold, title image properly cropped
- **Restart fix**: clears pending outcomes, returns to title screen
- **Sound fixes**: removed sound from title screen, added birdsong SFX for road_to_delphi
- **Encyclopedia timing**: "The Etruscans" entry now unlocks at road_to_delphi instead of character_select
- **Handbook Ch.1 restructured**: three-part adventure game history (American, European, Japanese traditions)
- **LLM parser trend research** added to handbook (Countdown City, LampGPT, Taleweaver++)

---

## 2026-04-04

### Shipped
- **157 narrative outcome texts** for all choices with effects, written in Waltari-style prose
- **5 game design issues documented** (GD-01 through GD-05): class abilities, inventory impact, stat inflation, pebble economy, omen/defy consequences

---

## 2026-04-03

### Shipped
- **Act I massively expanded** (F-112): 111 total scenes (43 main + 40 side quests + hubs), up from ~25
- **77 unique Flux images** generated for Act I (900x514 JPEG, oil painting style); 87 total images in game
- **GitHub README rewritten** (F-107): 4 Playwright screenshots, Play Now link, download link, OG/Twitter meta tags, repo topics
- **Promotional image** (F-111): Recraft V3 with title text rendered in image, 3 sizes (OG, itch.io, full)
- **Sound expansion**: 8 new ElevenLabs SFX (campfire, wind, sacred, crowd, tension, friendship, mystery, combat); scene-sound mappings expanded from 23 to 98
- **Background music system**: looping ambient track with crossfade, separate Music/Effects volume sliders with logarithmic curve
- **UI improvements**: pebble tooltips repositioned, toast word-wrap on mobile, outcome interstitial system (inline below scene text)

---

## 2026-04-02

### Shipped
- **Developer act switch** (F-113): ACT_CONFIG in scenes.js, URL override `?acts=1,2`, beta password gate at act boundary (SHA-256)
- **Beta access gate**: password-protected unlock at Act I ending with themed toast and error feedback

---

## 2026-03-27

### Shipped
- **Responsive design**: hamburger menu, slide-in sidebar drawer, font/padding scaling, touch targets, breakpoints at 768px and 480px
- **Fullscreen toggle + Back button** added to top bar
- **Accessibility baseline** (F-106): focus-visible outlines, ARIA labels on landmarks and buttons, keyboard navigation
- **Copyright language review** (F-110): "based on" changed to "inspired by" throughout
- **Bug fixes**: character name collisions with NPCs, inventory tooltip positioning, top-bar button contrast, sidebar button contrast
- **Toast system overhaul**: stat-change toasts 5s (was 2.5s), encyclopedia toasts clickable with direct link to entry (8s, gold style), checkpoint toast styled with sage border (6s)
- **Mobile title screen**: CTA above the fold, reduced paddings/fonts
- **About page**: CONTROLS section added (mouse/Tab/Enter, mobile menu)
- **Encyclopedia unlock toasts** now show entry names
- **Reference documentation**: game_runtime_systems.md (technical reference) and game_runtime_guidebook.md (industry best practices)

---

## 2026-03-26

### Shipped
- **Game deployed to Vercel** at theetruscanif.vercel.app
- **GitHub repository** created and made public (miraculix95/the_etruscan_if, MIT licensed)
- **Ship the Story handbook** completed (28 chapters)
- **Project documentation** created (CLAUDE.md, PRD, scrum board)
- **Scene data extraction** (F-301 Stage A): scenes.js separated from index.html, Vercel config updated, build.sh for single-file distribution
- **Encyclopedia panel** (F-102): overlay UI with search/filters, 24 lore entries by category
- **Inventory system** (F-103): 4x3 visual grid, 12 story items, tooltips with lore, checkpoint save/load
- **Bug fix**: "About This Game" returns to current scene instead of resetting to title
