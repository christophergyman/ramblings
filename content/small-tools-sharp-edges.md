---
title: "Small Tools, Sharp Edges"
date: "2026-01-20"
category: "technical"
description: "Why composable CLI tools still beat integrated platforms for most of what I do."
---

There's an old Unix philosophy that keeps proving itself right: write programs that do one thing well, and compose them with pipes and scripts.

In 2026, this feels almost quaint. We have platforms that handle everything from code editing to deployment to monitoring, all under one roof. And yet, I keep coming back to small, sharp tools.

## The appeal of platforms

I get it. Platforms reduce friction. You don't have to choose between five CI providers, three hosting platforms, and two monitoring solutions. You sign up, connect your repo, and things Just Work.

For teams that need to move fast without deep infrastructure knowledge, this is genuinely valuable.

## Where they fall apart

The cracks appear at the edges:

- **Customization** — When you need the platform to do something it wasn't designed for, you're stuck. File a feature request and wait six months.
- **Debugging** — When something breaks inside a platform's abstraction, you're debugging a black box. Good luck finding the issue when you can't see the logs.
- **Lock-in** — Every platform-specific configuration, workflow, and integration is a dependency. Moving away means rewriting, not just reconfiguring.

## My current stack

For personal projects and small-team work, I've settled on a collection of tools that compose well:

```bash
# Deploy
rsync -avz ./dist/ server:/var/www/site/

# Monitor
curl -s https://mysite.dev | grep -q "expected" || notify

# Backup
tar czf backup-$(date +%Y%m%d).tar.gz ./data/
```

None of these are impressive. All of them are understandable, debuggable, and replaceable. I can read each command, understand what it does, and modify it in seconds.

## The composability advantage

Small tools compose in ways their authors never intended. That's not a bug — it's the whole point. A JSON API, a shell pipe, and `jq` can replace an entire dashboard for certain use cases.

The key insight is that **simplicity compounds**. Each simple tool you understand deeply is a building block. Platforms give you a finished building, but you can't rearrange the rooms.

## When to reach for the platform

I'm not a purist. Platforms win when:

- The problem domain is genuinely complex (Kubernetes, large-scale databases)
- The team doesn't have infrastructure expertise
- Time-to-market matters more than flexibility

But for everything else? Give me a Makefile and `ssh`.
