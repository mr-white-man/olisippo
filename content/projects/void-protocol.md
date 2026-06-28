---
type: projects
title: Void Protocol
description: A roguelike FPS with fully procedural level generation, holographic UI, and 4-player online co-op. Shipped on Steam with 40K+ players.
tags: [Unity, C#, HLSL, Procedural Gen, Multiplayer, Steam]
github: https://github.com/kadexero/void-protocol
liveUrl: https://store.steampowered.com/app/void-protocol
image: /games/void-protocol.jpg
---

**Void Protocol** is a sci-fi roguelike FPS set in an abandoned deep-space research station overrun by corrupted AI constructs. Every run generates a new station layout, enemy loadout, and narrative thread.

## Technical Highlights

- Custom procedural generation system using BSP tree room splitting + corridor weaving, producing 10,000+ unique level configurations per seed
- Wrote all HLSL shaders from scratch: holographic scanline effect, energy shield distortion, chromatic aberration on death screen
- Networked 4-player co-op with authoritative server model, client-side prediction, and rollback for hit detection
- Steam integration: achievements, leaderboards, workshop mod support, and P2P relay via Steam Datagram Relay

## Design Philosophy

The goal was to make every run feel like uncovering a different nightmare. The procedural systems aren't just spatial — enemy behavior trees reconfigure based on player progression patterns, making the AI feel adaptive rather than scripted.
