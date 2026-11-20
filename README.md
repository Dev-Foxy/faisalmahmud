# Portfolio — how to edit content

All content lives in the `content/` folder. You don't need to touch any components.

```
content/
├── site.ts            ← wording for every page (hero, services, about, contact, socials…)
├── projects/          ← one Markdown file per project
│   ├── fragcy.md
│   └── …
└── blog/              ← one Markdown file per blog post
    ├── future-of-ai-agents.md
    └── …
```

Run `npm run dev`, edit a file, save, and the page updates.

---

## Add a project

1. Put the screenshots in `public/project/` (any name, e.g. `myapp-cover.png`, `myapp-2.png`).
2. Copy an existing file in `content/projects/` and rename it. **The file name becomes the URL**:
   `my-app.md` → `/projects/my-app`.
3. Edit the top section (front matter) and write the case study underneath:

```md
---
title: My App                     # required
summary: One or two sentences.    # required — shown on cards
category: Web App                 # also used for the filter buttons on /projects
year: 2026
role: Design & development
client: Acme Inc.
stack: [Next.js, Prisma, Stripe]
cover: /project/myapp-cover.png   # leave empty for a typographic cover
coverAlt: Dashboard overview
gallery:                          # extra screenshots on the project page
  - /project/myapp-2.png
color: "#1b1b1b"                  # background behind the screenshot
ink: "#ffffff"                    # text colour on that background
liveUrl: https://example.com
githubUrl:
featured: true                    # false = only on /projects, not the home page
order: 4                          # lower numbers come first
draft: false                      # true = hidden on the live site (still visible in dev)
---

## The brief

What the client needed…

## What I built

- Bullet points, **bold**, [links](https://…) and images all work:

![Checkout flow](/project/myapp-3.png)
```

## Add a blog post

Create `content/blog/my-post.md` (→ `/blog/my-post`):

```md
---
title: My Post Title       # required
date: 2026-11-20           # required — newest posts appear first
excerpt: One-line summary shown on cards.
category: Web Dev
cover: /blog/my-cover.png
tags: [Next.js, Design]
draft: false
---

Your article in Markdown. The first paragraph is styled as a larger intro.

## A heading

> A quote shows as a large italic pull-quote.
```

Reading time is calculated automatically.

## Edit page wording

Open `content/site.ts`. Every section is labelled. Two shortcuts work in headlines and paragraphs:

- `*word*` → the orange italic accent (e.g. `"websites *that*"`)
- `**word**` → highlighted text

Common edits:

| What | Where in `site.ts` |
| --- | --- |
| Name, email, location, “available” badge | `PERSON` |
| Social links (empty ones are hidden) | `SOCIALS` |
| Home hero, stats, section titles | `HOME` |
| Services list | `SERVICES` |
| Process steps | `PROCESS` |
| About page | `ABOUT` |
| Skills tabs | `SKILL_TABS` |
| Contact page | `CONTACT` |
| Footer call-to-action | `FOOTER` |
| Browser title / Google description | `SEO` |

Your portrait is `lib/hero.png`. Replace the file and keep the same name.

If a required field is missing, the dev server shows an error naming the file and the field.

---

## SEO

Most of this is automatic. The sitemap, robots.txt, share images and Google structured data all update when you add projects or posts.

**Before you go live:**

1. Set your domain in `content/site.ts` → `SEO.siteUrl` (e.g. `"https://faisalmahmud.com"`).
   On Vercel it falls back to your production URL if you leave it empty.
2. Add the site to [Google Search Console](https://search.google.com/search-console). Paste the verification
   code into `SEO.googleVerification`, deploy, then submit `https://your-domain/sitemap.xml`.
3. Do the same in [Bing Webmaster Tools](https://www.bing.com/webmasters) (it can import from Search Console).

**What's included**

| Feature | Where |
| --- | --- |
| Page titles, descriptions, keywords | `SEO` and `PAGE_SEO` in `site.ts`; project and post pages use their own front matter |
| Sitemap / robots | `/sitemap.xml`, `/robots.txt` |
| Share images (WhatsApp, LinkedIn, X…) | generated automatically for every page, project and post |
| Structured data | Person + freelance ProfessionalService (Bangladesh + worldwide), FAQ, breadcrumbs, case studies, blog posts |
| FAQ rich results | edit `FAQ` in `site.ts` |

**What moves rankings most from here**

- **A Google Business Profile** as a "Web developer" in Dhaka. This is the biggest boost for "web developer in Bangladesh" searches.
- **More case studies** with real results, each targeting a phrase (e.g. "e-commerce website for a fragrance brand in Bangladesh").
- **Blog posts** that answer what clients search for, e.g. "How much does a website cost in Bangladesh?" or "Next.js vs WordPress for small business".
- **Links back to your site** from your GitHub, LinkedIn, Fiverr/Upwork profiles, client sites ("Website by Faisal Mahmud") and Bangladeshi directories.
- **Reviews and testimonials** from real clients, added to the site.
