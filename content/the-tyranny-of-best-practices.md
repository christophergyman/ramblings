---
title: "The Tyranny of Best Practices"
date: "2026-02-28"
category: "opinion"
description: "Best practices are useful defaults, not universal truths. Knowing when to break them is the real skill."
---

Every few months, a new "best practice" sweeps through the developer community like a wave. Use this pattern. Avoid that anti-pattern. Structure your project *this* way or you're doing it wrong.

And mostly, these practices *are* good. They encode hard-won lessons from people who've made expensive mistakes. But somewhere along the way, we started treating guidelines as gospel.

## The problem with rules

Here's what happens: a senior engineer at a large company solves a real problem with a specific pattern. They write a blog post. The pattern becomes a "best practice." Thousands of developers adopt it without understanding the *context* that made it necessary.

> "Every best practice has a context that is rarely communicated." — Someone, probably

Consider some examples:

- **"Never use `any` in TypeScript"** — Useful for large team codebases with high churn. Overkill for a weekend prototype where you're exploring an API shape.
- **"Always write tests first"** — TDD is powerful for well-understood domains. Less useful when you're still discovering what the interface should even look like.
- **"Separate concerns into microservices"** — Solved real scaling problems at Netflix. Creates operational nightmares for a team of three.

## Context is everything

The best engineers I know don't follow rules. They understand *trade-offs*. They can articulate *why* a pattern exists, and therefore *when* it doesn't apply.

This isn't the same as being contrarian. It's the opposite — it requires a deeper understanding of the principles behind the practices.

## A useful heuristic

Before adopting any best practice, ask three questions:

1. **What problem does this solve?** If you can't articulate it, you don't need it yet.
2. **Do I have that problem?** Not "might I have it someday" — do I have it *now*?
3. **What does this cost?** Every abstraction has a cost in complexity, onboarding time, and cognitive overhead.

If the answers are clear, adopt away. If they're fuzzy, you might be cargo-culting.

## The real skill

Junior developers learn best practices. Senior developers learn when to break them. The gap between those two stages isn't knowledge — it's judgment. And judgment only comes from making mistakes with real stakes.

So go ahead, use `any` in your prototype. Ship the monolith. Skip the test for that throwaway script. Just know *why* you're doing it, and be ready to change course when the context shifts.

That's not sloppy engineering. That's pragmatism.
