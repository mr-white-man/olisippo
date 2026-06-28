---
type: projects
title: Batatas
description: A mobile puzzle-action game where players rewind and fast-forward time to solve combat encounters. 250K+ downloads across iOS and Android.
tags: [Unity, C#, Mobile, Time Mechanics, TouchInput, Analytics]
github: https://github.com/kadexero/chrono-breach
liveUrl: https://apps.apple.com/chrono-breach
image: /games/chrono-breach.jpg
---

**Chrono Breach** puts time itself in the player's hands. Every action is recorded and can be rewound — enemies, projectiles, and environmental hazards all move backwards in perfect sync.

## Technical Highlights

- Implemented a deterministic state-record/playback system storing per-frame snapshots of all dynamic objects at 30fps with delta compression
- Gesture recognition for swipe-to-rewind and pinch-to-pause inputs using custom recognizer layered over Unity's touch API
- Adaptive difficulty: hidden skill rating adjusts enemy speed, attack frequency, and pattern complexity based on rolling performance windows
- LiveOps-ready with Firebase Remote Config and Analytics integration; ran A/B tests on tutorial flow that improved D1 retention by 18%

## Design Notes

The rewind mechanic needed to feel physical and satisfying, not just a "undo button." Haptics, particle trails left by rewound objects, and a VHS-distortion shader on the screen during rewind all contribute to making time manipulation feel visceral.
