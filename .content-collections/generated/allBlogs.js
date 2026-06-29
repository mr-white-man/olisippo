
export default [
  {
    "title": "Game Feel: The Invisible Work That Makes Players Stay",
    "date": "2026-01-05",
    "summary": "No one talks about game feel in design documents. It lives in the gap between specification and implementation — in frame data, screen shake, and particle counts.",
    "tags": [
      "Game Feel",
      "Polish",
      "Design",
      "Animation"
    ],
    "author": "Kade Xero",
    "content": "When a game feels *bad*, players quit. They don't know why. They say the game \"just doesn't feel right.\" What they're responding to is the sum of a thousand micro-decisions that nobody explicitly designed but somebody had to implement.\r\n\r\nThat somebody is usually the programmer who cares too much.\r\n\r\n## The Juice Framework\r\n\r\nI use a mental framework I call **JUICE** when evaluating and implementing game feel:\r\n\r\n- **J**olt — Does every action have a physical consequence? Screen shake, camera snap, controller vibration.\r\n- **U**nderstanding — Does the player instantly know what happened? Clear visual and audio feedback, no ambiguity.\r\n- **I**mpact — Does it feel *heavy*? Weight, follow-through, squash-and-stretch.\r\n- **C**ontinuity — Does motion flow? Easing curves, anticipation frames, commitment windows.\r\n- **E**cho — Does the world react? Environmental responses, secondary animations, particle trails.\r\n\r\n## A Case Study: The Rewind in Chrono Breach\r\n\r\nThe rewind mechanic in Chrono Breach was technically functional on day one. Objects moved backwards. It worked.\r\n\r\nIt felt like garbage.\r\n\r\nHere's what we added over six weeks of polish:\r\n\r\n1. **VHS distortion shader** — chromatic aberration + scanline noise during rewind. Now time *looks* broken.\r\n2. **Reversed audio pitch** — all SFX run at 0.7x pitch backwards. The soundscape warps.\r\n3. **Haptic pattern** — dual-motor rumble in a \"heartbeat\" pattern. Tactile confirmation.\r\n4. **Particle trails** — rewound objects leave ghosted afterimages of their forward-played positions. Players can see the future.\r\n5. **Camera micro-shake** — 3-frame random offset at ±2px. Nervous energy.\r\n6. **Easing on entry/exit** — 6-frame ease in at start of rewind, 4-frame snap back to normal speed.\r\n\r\nEach of these changes took between 30 minutes and 2 days. None of them are in any design document. All of them are in player reviews — disguised as the word \"satisfying.\"\r\n\r\n## The Invisible Contract\r\n\r\nGame feel is the invisible contract between developer and player. When it's right, players extend you enormous goodwill. When it's wrong, they blame it on everything except the thing that's actually wrong.\r\n\r\nShip the mechanics. Then spend equal time on the feel. Your retention metrics will thank you.",
    "_meta": {
      "filePath": "game-feel-invisible-work.md",
      "fileName": "game-feel-invisible-work.md",
      "directory": ".",
      "extension": "md",
      "path": "game-feel-invisible-work"
    }
  },
  {
    "title": "Why Procedural Generation is the Future of Replayability",
    "date": "2026-02-10",
    "summary": "Handcrafted levels are beautiful but finite. Procedural generation, done right, can create infinite variance while still feeling authored. Here's how I approach it.",
    "tags": [
      "Procedural Gen",
      "Game Design",
      "Systems"
    ],
    "author": "Kade Xero",
    "content": "There's a recurring debate in game dev circles: handcrafted vs. procedural. It's a false dichotomy. The best games don't choose — they use procedural systems as an authoring multiplier.\r\n\r\n## The Authoring Multiplier\r\n\r\nWhen I built the generation system for **Void Protocol**, I wasn't trying to remove myself from the level design process. I was trying to encode my design intent into rules, then let the system express those rules across millions of configurations.\r\n\r\nThink of it this way: a handcrafted level is a sentence. A procedural grammar is a language. One is a masterpiece; the other is a communication system. Masterpieces are finite. Languages are not.\r\n\r\n## The Three Layers\r\n\r\nEvery procedural system I build operates on three layers:\r\n\r\n**1. Structural Layer** — The large-scale topology. Room counts, corridor density, hub-and-spoke vs. linear progression, dead-end frequency. This is where pacing lives.\r\n\r\n**2. Thematic Layer** — What goes *in* the spaces. Enemy factions, loot tables, environmental storytelling props. This is where tone lives.\r\n\r\n**3. Surprise Layer** — Low-frequency high-impact events. Elite enemy variants, secret rooms, environmental hazards. This is where memory lives.\r\n\r\nPlayers remember their *Void Protocol* run because of layer 3 moments. They replay for layer 1 variance. They survive because of layer 2 balance.\r\n\r\n## The Hard Part: Failure Modes\r\n\r\nProcedural generation fails in two directions:\r\n\r\n- **Too random**: Feels like noise. No coherent spatial logic, no sense that a designer cared.\r\n- **Too constrained**: Feels like a small set of handcrafted levels in a trench coat.\r\n\r\nThe solution is always constraints. More constraints. Ruthlessly tuned constraints. Every rule I add is really a failure mode I've observed and patched. The system doesn't create levels — it navigates a vast space of *acceptable* levels.\r\n\r\n## What's Coming\r\n\r\nReal-time ML-assisted generation is going to change this conversation entirely. Not because it replaces authored systems, but because it can learn player preferences and adapt the constraint weights dynamically per-session. That's the unlock I'm watching closely.\r\n\r\nThe future of replayability isn't infinite content. It's infinite *personalization*.",
    "_meta": {
      "filePath": "procedural-generation-future.md",
      "fileName": "procedural-generation-future.md",
      "directory": ".",
      "extension": "md",
      "path": "procedural-generation-future"
    }
  },
  {
    "title": "Shipping Your First Commercial Game: What the Tutorials Don't Cover",
    "date": "2025-11-18",
    "summary": "The technical challenges of indie game development are well-documented. The business, legal, and psychological challenges are not. Here's what I learned shipping Void Protocol.",
    "tags": [
      "Indie Dev",
      "Shipping",
      "Business",
      "Lessons"
    ],
    "author": "Kade Xero",
    "content": "You've built the game. The build is stable. You're ready to ship.\r\n\r\nYou are not ready to ship.\r\n\r\nHere's everything I wish someone had told me before we launched Void Protocol.\r\n\r\n## The Launch Window is Not the Launch\r\n\r\nSteam's new release algorithm front-loads visibility in the first 2 weeks. Every bug that slips through, every missing feature in your store page, every delay in responding to reviews — these compound asymmetrically during that window.\r\n\r\nWe spent 3 weeks before launch doing nothing but building the store page, trailer, press kit, and Discord server. That was the right call. We also spent 3 weeks fixing bugs we found during that process. That was also the right call.\r\n\r\nShip slow so launch can be fast.\r\n\r\n## Legal Exists\r\n\r\n- Get a business entity before you collect money. Sole proprietorship minimum, LLC preferred.\r\n- Your music licensing needs to cover streaming platforms *and* content creation. These are different licenses. Check both.\r\n- GDPR applies to you if any EU player downloads your game. Analytics, crash reporters, even Steam's own regional data — you need a privacy policy.\r\n- Platform fees, payment processor fees, and distributor cuts all compound. Know your effective margin before you set a price.\r\n\r\n## The Reviews You Don't Respond To\r\n\r\nNegative reviews will arrive. Some will be fair. Some will be unhinged. The correct response to both is: don't respond publicly when you're angry.\r\n\r\nI responded to a negative review at 2am, 3 days post-launch. We'd shipped a major bug in a patch. I was defensive. It read poorly. That exchange lives forever on the store page.\r\n\r\nRespond to reviews when you've slept. Respond professionally. Respond with patches, not arguments.\r\n\r\n## You Will Want to Quit\r\n\r\nThree to four weeks post-launch, after the initial visibility bump fades and sales plateau, you will enter a psychological valley. The energy that sustained crunch is gone. The dopamine of launch-week numbers is gone. The game is out and the world is... fine with it.\r\n\r\nThis is normal. It's not failure.\r\n\r\nBuild something small. Write. Take a weekend off. Then come back and start the post-mortem. The lessons in that valley are the ones that make your next game better.",
    "_meta": {
      "filePath": "shipping-first-commercial-game.md",
      "fileName": "shipping-first-commercial-game.md",
      "directory": ".",
      "extension": "md",
      "path": "shipping-first-commercial-game"
    }
  }
]