---
type: projects
title: Neon Drift
description: An arcade racing game set in a neon-soaked cyberpunk city. Features a custom physics model, destructible environments, and an original synthwave soundtrack.
tags: [Unreal Engine, C++, Blueprints, Physics, Procedural Audio]
github: https://github.com/kadexero/neon-drift
liveUrl: https://kadexero.itch.io/neon-drift
media:
  - /games/neon-drift.jpg
  - /games/neon-drift-2.jpg
  - /games/neon-drift.mp4
image: /games/neon-drift.jpg
---

**Neon Drift** is a love letter to arcade racers of the 90s, rebuilt with modern rendering tech and a physical driving model that rewards skill over button-mashing.

## Technical Highlights

- Custom vehicle physics in Unreal Engine C++: per-wheel suspension, tire friction model with slip angle calculation, and aerodynamic drag
- Procedural city block generation that assembles track layouts from authored tile sets with adjacency constraints
- Real-time geometry destruction using Chaos physics for barrier crashes and environment interactions
- Procedural audio system that layers engine pitch, tire screech frequency, and spatial reverb based on car speed and surface material

## Soundtrack

Collaborated with two independent artists to produce an original 8-track synthwave OST. The audio system dynamically crossfades tracks based on race position and proximity to checkpoints, creating a live DJ-style experience.
