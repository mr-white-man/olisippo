---
type: studies
title: "Void Protocol Post-Mortem: What Worked, What Broke, What We'd Do Differently"
subtitle: A technical and design retrospective on shipping a roguelike FPS with 8 developers in 14 months
date: 2026-01-20
tags: [Post-Mortem, Roguelike, Multiplayer, Procedural Gen]
outcomes:
  - Procedural generation constraints reduced broken level generation from 12% to 0.3%
  - Rollback netcode replaced delay-based model, cutting perceived latency by 60%
  - Modular shader architecture reduced shader compilation stalls by 80%
---

Void Protocol shipped in November 2025 after 14 months of development with a team of 8. It reached 40K players in the first month. It also shipped with 3 critical bugs, two design pillars we abandoned mid-production, and one complete networking rewrite.

This is a technical post-mortem. No PR spin. Here's what actually happened.

## What Worked

### Procedural Generation Architecture

The BSP + corridor weaving system held up. The key decision that saved us was separating **spatial generation** from **content population**. The generator never places enemies or items — it only produces spatial graphs. A second pass handles all content placement against a constraint set.

This separation meant we could iterate on enemy placement rules without touching generation code, and vice versa. When balance required "fewer dead ends near player spawn," we added a constraint rule in 20 minutes. That would have been a week of work if spatial and content logic were coupled.

### Holographic Shader Pipeline

Writing our own HLSL was terrifying at first. In retrospect, it gave us visual coherence that off-the-shelf assets couldn't. Every glow, every scanline, every UI element uses the same underlying shader math. The game *looks* like it was made by one visual system, not assembled from an asset store.

Lesson: Own your visual identity at the shader level. The investment compounds.

## What Broke

### Delay-Based Networking

We launched with a delay-based networking model. It was the familiar choice. It was the wrong choice for a fast-paced FPS with varied global player latency.

At 150ms+ ping, hit detection felt wrong. Players were shooting behind where enemies appeared to be. Reviews called it "janky." The word hurt because it was accurate.

We rewrote to rollback netcode 6 weeks post-launch. It required:
- Deterministic game state for all networked objects
- Per-input frame buffer per client
- Server-side history buffer for hit reconciliation
- Full input replay system

Two months of work to fix a foundational choice we made at day 30 of production. The lesson: prototype your networking model with your actual gameplay loop, at actual distances, before you commit.

### The Companion System

We planned a companion AI that would communicate through audio logs and terminal messages. It would learn player behavior and adapt its commentary. This was on the roadmap until month 10.

We cut it. Not because it was bad — the prototype was compelling. We cut it because we were 6 weeks from launch and the core loop wasn't fun enough without polish, and polish was where all remaining time went.

Good features die on the altar of "the game needs to be fun first." This one was always going to die. We should have killed it at month 6 instead of month 10 and reinvested those cycles earlier.

## What We'd Do Differently

1. **Network model decision at week 2, not week 4.** Prototype with geographic distance from day one.
2. **Cut the companion system at month 4.** Good features need to earn their place earlier or not at all.
3. **Localization pipeline at project start, not month 11.** Retrofitting a 14-language pipeline is miserable.
4. **More external playtests in months 3-6.** We playtested heavily in months 10-12, which is too late to act on structural feedback.
