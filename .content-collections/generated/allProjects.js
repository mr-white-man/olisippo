
export default [
  {
    "title": "Batatas",
    "description": "A mobile puzzle-action game where players rewind and fast-forward time to solve combat encounters. 250K+ downloads across iOS and Android.",
    "tags": [
      "Unity",
      "C#",
      "Mobile",
      "Time Mechanics",
      "TouchInput",
      "Analytics"
    ],
    "github": "https://github.com/kadexero/chrono-breach",
    "liveUrl": "https://apps.apple.com/chrono-breach",
    "image": "/games/chrono-breach.jpg",
    "media": [
      "/games/chrono-breach.jpg",
      "/games/chrono-breach-2.jpg",
      "/games/chrono-breach.mp4"
    ],
    "content": "**Chrono Breach** puts time itself in the player's hands. Every action is recorded and can be rewound — enemies, projectiles, and environmental hazards all move backwards in perfect sync.\r\n\r\n## Technical Highlights\r\n\r\n- Implemented a deterministic state-record/playback system storing per-frame snapshots of all dynamic objects at 30fps with delta compression\r\n- Gesture recognition for swipe-to-rewind and pinch-to-pause inputs using custom recognizer layered over Unity's touch API\r\n- Adaptive difficulty: hidden skill rating adjusts enemy speed, attack frequency, and pattern complexity based on rolling performance windows\r\n- LiveOps-ready with Firebase Remote Config and Analytics integration; ran A/B tests on tutorial flow that improved D1 retention by 18%\r\n\r\n## Design Notes\r\n\r\nThe rewind mechanic needed to feel physical and satisfying, not just a \"undo button.\" Haptics, particle trails left by rewound objects, and a VHS-distortion shader on the screen during rewind all contribute to making time manipulation feel visceral.",
    "_meta": {
      "filePath": "chrono-breach.md",
      "fileName": "chrono-breach.md",
      "directory": ".",
      "extension": "md",
      "path": "chrono-breach"
    }
  },
  {
    "title": "Neon Drift",
    "description": "An arcade racing game set in a neon-soaked cyberpunk city. Features a custom physics model, destructible environments, and an original synthwave soundtrack.",
    "tags": [
      "Unreal Engine",
      "C++",
      "Blueprints",
      "Physics",
      "Procedural Audio"
    ],
    "github": "https://github.com/kadexero/neon-drift",
    "liveUrl": "https://kadexero.itch.io/neon-drift",
    "image": "/games/neon-drift.jpg",
    "media": [
      "/games/neon-drift.jpg",
      "/games/neon-drift-2.jpg",
      "/games/neon-drift.mp4"
    ],
    "content": "**Neon Drift** is a love letter to arcade racers of the 90s, rebuilt with modern rendering tech and a physical driving model that rewards skill over button-mashing.\r\n\r\n## Technical Highlights\r\n\r\n- Custom vehicle physics in Unreal Engine C++: per-wheel suspension, tire friction model with slip angle calculation, and aerodynamic drag\r\n- Procedural city block generation that assembles track layouts from authored tile sets with adjacency constraints\r\n- Real-time geometry destruction using Chaos physics for barrier crashes and environment interactions\r\n- Procedural audio system that layers engine pitch, tire screech frequency, and spatial reverb based on car speed and surface material\r\n\r\n## Soundtrack\r\n\r\nCollaborated with two independent artists to produce an original 8-track synthwave OST. The audio system dynamically crossfades tracks based on race position and proximity to checkpoints, creating a live DJ-style experience.",
    "_meta": {
      "filePath": "neon-drift.md",
      "fileName": "neon-drift.md",
      "directory": ".",
      "extension": "md",
      "path": "neon-drift"
    }
  },
  {
    "title": "The Last Signal",
    "description": "A psychological horror narrative game where players investigate an abandoned Antarctic research station through corrupted audio logs and fragmented terminal entries.",
    "tags": [
      "Unity",
      "C#",
      "Narrative Design",
      "FMOD",
      "Horror",
      "Atmosphere"
    ],
    "github": "https://github.com/kadexero/the-last-signal",
    "liveUrl": "https://kadexero.itch.io/the-last-signal",
    "image": "/games/last-signal.jpg",
    "media": [
      "/games/the-last-signal.jpg",
      "/games/the-last-signal-2.jpg",
      "/games/the-last-signal.mp4"
    ],
    "content": "**The Last Signal** is a solo-developed horror experience built in 72 hours for a game jam, then expanded over 3 months into a full release.\r\n\r\n## Technical Highlights\r\n\r\n- Entire narrative delivered through diegetic interfaces: corrupted terminal text, degraded audio logs, and physical document scanning\r\n- FMOD integration for dynamic audio mixing; environmental sounds procedurally layer based on player location, time of exploration, and discovered lore items\r\n- Custom terminal emulator UI system with simulated command parsing, glitch effects, and time-delayed text reveal\r\n- Atmospheric rendering: volumetric fog via ray-marched shader, film grain and vignette post-processing, flickering light simulation\r\n\r\n## From Jam to Release\r\n\r\nStarted as a 72-hour jam entry that placed 2nd in the Horror category. The core loop — exploring corrupted data to piece together what happened — resonated enough that I spent another 3 months expanding the story, polishing the atmosphere, and shipping it on itch.io where it sits at 4.8/5 stars from 1,200+ ratings.",
    "_meta": {
      "filePath": "the-last-signal.md",
      "fileName": "the-last-signal.md",
      "directory": ".",
      "extension": "md",
      "path": "the-last-signal"
    }
  },
  {
    "title": "Void Protocol",
    "description": "A roguelike FPS with fully procedural level generation, holographic UI, and 4-player online co-op. Shipped on Steam with 40K+ players.",
    "tags": [
      "Unity",
      "C#",
      "HLSL",
      "Procedural Gen",
      "Multiplayer",
      "Steam"
    ],
    "github": "https://github.com/kadexero/void-protocol",
    "liveUrl": "https://store.steampowered.com/app/void-protocol",
    "image": "/games/void-protocol.jpg",
    "media": [
      "/games/void-protocol.jpg",
      "/games/void-protocol-2.jpg",
      "/games/void-protocol.mp4"
    ],
    "content": "**Void Protocol** is a sci-fi roguelike FPS set in an abandoned deep-space research station overrun by corrupted AI constructs. Every run generates a new station layout, enemy loadout, and narrative thread.\r\n\r\n## Technical Highlights\r\n\r\n- Custom procedural generation system using BSP tree room splitting + corridor weaving, producing 10,000+ unique level configurations per seed\r\n- Wrote all HLSL shaders from scratch: holographic scanline effect, energy shield distortion, chromatic aberration on death screen\r\n- Networked 4-player co-op with authoritative server model, client-side prediction, and rollback for hit detection\r\n- Steam integration: achievements, leaderboards, workshop mod support, and P2P relay via Steam Datagram Relay\r\n\r\n## Design Philosophy\r\n\r\nThe goal was to make every run feel like uncovering a different nightmare. The procedural systems aren't just spatial — enemy behavior trees reconfigure based on player progression patterns, making the AI feel adaptive rather than scripted.",
    "_meta": {
      "filePath": "void-protocol.md",
      "fileName": "void-protocol.md",
      "directory": ".",
      "extension": "md",
      "path": "void-protocol"
    }
  }
]