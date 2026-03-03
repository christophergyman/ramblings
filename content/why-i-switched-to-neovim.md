---
title: "Why I Switched to Neovim"
date: "2026-02-15"
category: "tools"
description: "After years of VS Code, I finally made the jump. Here's what convinced me."
---

I resisted for a long time. VS Code was *fine*. It had extensions for everything, a decent terminal, and I knew every shortcut. But something kept nagging at me — the latency. That barely perceptible delay between keystroke and response that you stop noticing until you use something faster.

## The tipping point

It wasn't one thing. It was a accumulation:

- Opening a large TypeScript project took 8+ seconds
- Extension host crashes became weekly events
- The Electron wrapper consumed 800MB of RAM before I'd written a line of code

Meanwhile, a colleague was editing at what looked like the speed of thought. His cursor *teleported*. Files opened instantly. I asked what he was using.

"Neovim," he said, as if it were obvious.

## The first week

Let me be honest: the first week was brutal. I couldn't even figure out how to quit (yes, the meme is real). My productivity dropped to maybe 30% of normal. I kept reaching for `Cmd+P` and getting nothing.

But I stuck with it, and by day four something clicked. The modal editing model started making sense. Instead of *reaching* for shortcuts, I was *composing* them:

```
ciw    — change inner word
da"    — delete around quotes
vip    — select inner paragraph
```

These aren't shortcuts. They're a **language**. And once you start thinking in that language, going back to point-and-click feels like handwriting after learning to type.

## My setup today

I keep it minimal:

- **lazy.nvim** for plugin management
- **Telescope** for fuzzy finding
- **Treesitter** for syntax highlighting
- **LSP** via mason.nvim for TypeScript, Rust, Go
- A custom statusline (about 40 lines of Lua)

Total startup time: 45ms. Memory usage: ~60MB. No Electron in sight.

## Would I recommend it?

Only if you enjoy the process of learning tools deeply. Neovim rewards curiosity and punishes passivity. If you want an editor that works perfectly out of the box, stick with VS Code — it's genuinely great.

But if you've ever felt like your editor is *in the way* rather than *getting out of the way*, give Neovim a weekend. You might not go back.
