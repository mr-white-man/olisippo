
export default [
  {
    "title": "72-Hour Game Jam Retrospective: The Last Signal",
    "subtitle": "How a horror jam entry became a 4.8-star release — and what the jam format taught about design under constraints",
    "date": "2025-08-14",
    "tags": [
      "Game Jam",
      "Horror",
      "Solo Dev",
      "Narrative Design",
      "FMOD"
    ],
    "outcomes": [
      "Shipped a playable build in 72 hours with zero crunch debt to the expanded version",
      "Diegetic UI approach cut UI development time by 40% vs. traditional HUD",
      "Jam constraints forced the narrative structure that players cite most in positive reviews"
    ],
    "content": "Every game developer should do game jams. Not because jams are fun — they are, sometimes, in the way that a survival situation is fun in retrospect — but because constraints are the best teacher game development has.\r\n\r\nHere's what building The Last Signal in 72 hours taught me that 14 months of Void Protocol did not.\r\n\r\n## The Constraint That Shaped Everything\r\n\r\nThe jam theme was \"Signal/Noise.\" I had 30 minutes to decide what I was building.\r\n\r\nMy first instinct was a communications-based puzzle game — intercept signals, decode noise. Technically interesting, probably dull to play.\r\n\r\nThe constraint forced the pivot: what if the *player* is the source of both signal and noise? What if the story exists as corrupted data, and the act of playing reconstructs it?\r\n\r\nThe diegetic terminal/audio log format came from that pivot. There's no HUD because there's never a reason for a HUD — the player is interacting with in-universe interfaces. That choice, born from a 30-minute constraint deadline, is the single most-praised element in every review.\r\n\r\nConstraints don't limit creativity. They collapse possibility space until only the interesting solutions remain.\r\n\r\n## Technical Scope Discipline\r\n\r\n72 hours forces ruthless scope decisions. My rule for jams: **identify the one thing that would make someone remember the game, and protect that at all costs.**\r\n\r\nFor The Last Signal, that one thing was the terminal emulator UI. I spent 18 of 72 hours on it. Text rendering, cursor blink timing, fake command parsing, glitch effects. Everything else — audio, lighting, level layout — was built to support the terminal, not compete with it.\r\n\r\nWhen I expanded the game post-jam, this clarity of focus was the map. Every addition had to serve the terminal experience or justify its existence some other way.\r\n\r\n## From Jam to Release: The Expansion Arc\r\n\r\nThe jam build was 20 minutes long. The release is 2.5 hours.\r\n\r\nThe expansion process:\r\n- **Month 1**: Audio pass. Added FMOD integration, spatial mixing, reverb zones, reversed voice logs. The game was already atmospheric; audio made it *frightening*.\r\n- **Month 2**: Narrative expansion. Wrote 40+ additional log entries, three new \"endings\" based on which data the player reconstructs, and layered environmental storytelling props.\r\n- **Month 3**: Polish. Volumetric fog pass, updated lighting, accessibility options (font size, text speed, color filters), and a full localization pass for EN/ES/FR.\r\n\r\nThe key discipline: I did not change the core loop. Not once. The jam loop was correct. Expansion only deepened it.\r\n\r\n## What Jams Actually Teach\r\n\r\n- **Scope discipline**: The hardest professional skill, practiced in extreme conditions.\r\n- **Constraint creativity**: Limitations are not obstacles. They are design prompts.\r\n- **Vertical slice speed**: Shipping a playable experience in 72 hours is a skill that transfers directly to milestone builds.\r\n- **Emotional clarity**: You have no time to equivocate. You learn what you actually value in a game.\r\n\r\nDo the jam. Ship the build. Read the feedback. Then do another jam.",
    "_meta": {
      "filePath": "game-jam-retrospective.md",
      "fileName": "game-jam-retrospective.md",
      "directory": ".",
      "extension": "md",
      "path": "game-jam-retrospective"
    }
  },
  {
    "title": "Void Protocol Post-Mortem: What Worked, What Broke, What We'd Do Differently",
    "subtitle": "A technical and design retrospective on shipping a roguelike FPS with 8 developers in 14 months",
    "date": "2026-01-20",
    "tags": [
      "Post-Mortem",
      "Roguelike",
      "Multiplayer",
      "Procedural Gen"
    ],
    "outcomes": [
      "Procedural generation constraints reduced broken level generation from 12% to 0.3%",
      "Rollback netcode replaced delay-based model, cutting perceived latency by 60%",
      "Modular shader architecture reduced shader compilation stalls by 80%"
    ],
    "content": "Void Protocol shipped in November 2025 after 14 months of development with a team of 8. It reached 40K players in the first month. It also shipped with 3 critical bugs, two design pillars we abandoned mid-production, and one complete networking rewrite.\r\n\r\nThis is a technical post-mortem. No PR spin. Here's what actually happened.\r\n\r\n## What Worked\r\n\r\n### Procedural Generation Architecture\r\n\r\nThe BSP + corridor weaving system held up. The key decision that saved us was separating **spatial generation** from **content population**. The generator never places enemies or items — it only produces spatial graphs. A second pass handles all content placement against a constraint set.\r\n\r\nThis separation meant we could iterate on enemy placement rules without touching generation code, and vice versa. When balance required \"fewer dead ends near player spawn,\" we added a constraint rule in 20 minutes. That would have been a week of work if spatial and content logic were coupled.\r\n\r\n### Holographic Shader Pipeline\r\n\r\nWriting our own HLSL was terrifying at first. In retrospect, it gave us visual coherence that off-the-shelf assets couldn't. Every glow, every scanline, every UI element uses the same underlying shader math. The game *looks* like it was made by one visual system, not assembled from an asset store.\r\n\r\nLesson: Own your visual identity at the shader level. The investment compounds.\r\n\r\n## What Broke\r\n\r\n### Delay-Based Networking\r\n\r\nWe launched with a delay-based networking model. It was the familiar choice. It was the wrong choice for a fast-paced FPS with varied global player latency.\r\n\r\nAt 150ms+ ping, hit detection felt wrong. Players were shooting behind where enemies appeared to be. Reviews called it \"janky.\" The word hurt because it was accurate.\r\n\r\nWe rewrote to rollback netcode 6 weeks post-launch. It required:\r\n- Deterministic game state for all networked objects\r\n- Per-input frame buffer per client\r\n- Server-side history buffer for hit reconciliation\r\n- Full input replay system\r\n\r\nTwo months of work to fix a foundational choice we made at day 30 of production. The lesson: prototype your networking model with your actual gameplay loop, at actual distances, before you commit.\r\n\r\n### The Companion System\r\n\r\nWe planned a companion AI that would communicate through audio logs and terminal messages. It would learn player behavior and adapt its commentary. This was on the roadmap until month 10.\r\n\r\nWe cut it. Not because it was bad — the prototype was compelling. We cut it because we were 6 weeks from launch and the core loop wasn't fun enough without polish, and polish was where all remaining time went.\r\n\r\nGood features die on the altar of \"the game needs to be fun first.\" This one was always going to die. We should have killed it at month 6 instead of month 10 and reinvested those cycles earlier.\r\n\r\n## What We'd Do Differently\r\n\r\n1. **Network model decision at week 2, not week 4.** Prototype with geographic distance from day one.\r\n2. **Cut the companion system at month 4.** Good features need to earn their place earlier or not at all.\r\n3. **Localization pipeline at project start, not month 11.** Retrofitting a 14-language pipeline is miserable.\r\n4. **More external playtests in months 3-6.** We playtested heavily in months 10-12, which is too late to act on structural feedback.",
    "_meta": {
      "filePath": "void-protocol-postmortem.md",
      "fileName": "void-protocol-postmortem.md",
      "directory": ".",
      "extension": "md",
      "path": "void-protocol-postmortem"
    }
  }
]