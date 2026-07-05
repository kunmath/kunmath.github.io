---
title: "Don't run /init for agents"
description: "Auto-generated AGENTS.md files feel thorough, but they bloat your context, anchor the model to stale facts, and duplicate what agents can discover on their own. Write yours by hand."
date: 2026-07-05
tags:
  - ai
  - agents
  - tooling
---

Everyone tells you to generate an `AGENTS.md` to make your agent smarter. In my experience, the auto-generated ones do the opposite.

The `AGENTS.md` or `CLAUDE.md` files have become the main steering mechanism for the agents in our repos. Yet many people either don't know about these files or use them in a way that makes the agent perform worse. I'm sharing my thoughts on how I use them and the findings I've had from constant tweaking.

**What is AGENTS.md:** The models don't know anything about our codebases and build their context as they explore them within a session. The `AGENTS.md` file is just a text section that gets appended to every session, so the model has it in its context window. It's a way of providing instructions that you would otherwise have to give repeatedly in your prompts.

This is where `/init` comes in. Many harnesses — Claude Code, OpenCode, Codex — ship a command that generates the file for you: file graphs, formatting rules, the tech stack, every flow in the project. It feels thorough. That's the trap. These files make a good `README` for a dev getting to know the repo, but they're redundant for a model.

These files balloon fast, often 800–1000 lines. Append that to every session and you're burning nearly **5k tokens** before the work even starts. Worse than the waste is the anchoring: when the model sees something stated up top, it trusts it and stops looking. So when your file goes stale, or you want to deviate from the existing flow, the model sticks to it and gets it wrong.

And here's the part that makes `/init` redundant: modern models are already excellent at exploring code. They use tools, read the actual files, and figure out how things are done today, no hand-fed map required.

So what *should* go in the file? The one thing the model can't recover from the code: the **why**. It can see *how* things are structured, but not the decisions behind that structure — those rarely survive in the code itself. Tell it what you're building and why things are shaped the way they are. Theo makes the same point in his [video](https://youtu.be/xJaMTo2YgO8?si=7ei9OU1Ad4mRPW1n): express your intent clearly, and short, simple prompts will carry you a long way.

The other thing to mention in `AGENTS.md` are the points that live outside the current repo: links to design docs, related projects, or a test harness you have that sits outside the repo. I work on a multi-repo project, and I mention the local path for each in `AGENTS.md`, along with the scope each repo handles. You can also list build commands for a complex setup, though models are increasingly good at figuring those out.

So don't go running the `/init` command in your coding apps, and don't have an agent generate the file either. Spend some time mentioning the important points and hand-write your own `AGENTS.md` — you'll feel the improvement from the very next session.

Happy coding!
