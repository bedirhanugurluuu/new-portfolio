# Portfolio (leerob.com–inspired)

A minimal personal site built with **Next.js**, **React**, and **Tailwind CSS**, inspired by the layout of [leerob.com](https://leerob.com/).

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- Geist + Geist Mono

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize

Edit `src/data/site.ts` to change:

- Handle, name, location, email
- Bio (default / long)
- Notes
- Blog posts

## Structure

```
src/
  app/
    page.tsx              # Home
    notes/[slug]/page.tsx # Note pages
    blog/[slug]/page.tsx  # Blog posts
  components/             # Bio, lists, header, footer
  data/site.ts            # All content
```

## Note

This is an original recreation of the *layout pattern*, not a fork of Lee Robinson’s source. Replace the placeholder copy with your own writing before publishing.
