# kunalmathur — personal site

Personal site and writing of [Kunal Mathur](https://github.com/kunmath) —
embedded systems & IoT. Built with [Astro](https://astro.build), deployed to
GitHub Pages.

## Develop

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
npm run preview    # serve the built site locally
```

## Writing a post

Add a Markdown file to `src/content/blog/`:

```md
---
title: "Post title"
description: "One-sentence summary shown in lists, RSS, and meta tags."
date: 2026-07-05
tags: [embedded, linux]
draft: false
---

Post body…
```

Set `draft: true` to keep a post out of the build until it's ready.

## Deploy

Pushes to `main` build and publish via `.github/workflows/deploy.yml`
(GitHub Pages, using the official Astro action). If the repo is not a
`<user>.github.io` user site, set `base` in `astro.config.mjs` to the repo
name.

## Structure

- `src/consts.ts` — site metadata, author links, navigation
- `src/styles/global.css` — the whole design system (editorial serif, warm palette, dark mode)
- `src/layouts/Base.astro` — HTML shell, meta tags, theme bootstrap
- `src/pages/` — home, blog index, post pages, about, 404, RSS
- `src/content/blog/` — posts (Markdown, validated by `src/content.config.ts`)
