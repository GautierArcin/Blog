![tailwind-nextjs-banner](/public/static/images/twitter-card.png)

# Tailwind Nextjs Starter Blog

[![GitHub Repo stars](https://img.shields.io/github/stars/timlrx/tailwind-nextjs-starter-blog?style=social)](https://GitHub.com/timlrx/tailwind-nextjs-starter-blog/stargazers/)
[![GitHub forks](https://img.shields.io/github/forks/timlrx/tailwind-nextjs-starter-blog?style=social)](https://GitHub.com/timlrx/tailwind-nextjs-starter-blog/network/)
[![Twitter URL](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2Ftimlrxx)](https://twitter.com/timlrxx)
[![Sponsor](https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&link=https://github.com/sponsors/timlrx)](https://github.com/sponsors/timlrx)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/GautierArcin/i18n-tailwind-nextjs-starter-blog/tree/demo/next-translate)

Unofficial i18n fork of the excellent [Tailwind CSS blogging starter template](https://github.com/timlrx/tailwind-nextjs-starter-blog) implementing sub-path i18n routing & `next-translate`. 
I try to maintin it as up to date as possible with main repo.

Check out the documentation below to get started (or on main repo) to get started.

Feel free to contribute if you see any features missing.

## Examples

- [Demo Blog](https://tailwind-nextjs-starter-blog-seven.vercel.app) - this repo
- [My blog](www.gautierarcin.com)

Using the template? Feel free to create a PR and add your blog to this list.

## Motivation

I wanted found  [Tailwind CSS blogging starter template](https://github.com/timlrx/tailwind-nextjs-starter-blog) and was quite happy with it. Only problem is that it didn't supported multiple langages and I wanted to create a blog in both english and french. 

## Features

All of the main repo Features &
- Sub-path routing with locale(s)
- Multi-langage post support
- Optimized & flexible multi-locale SEO

## Quick Start Guide 

Please follow [main repo](https://github.com/timlrx/tailwind-nextjs-starter-blog)'s' **Quick Start Guide** section for general instructions. This section will only cover what to do to add your own(s) locale(s) to the site.



1. JS (official support) - `npx degit https://github.com/timlrx/tailwind-nextjs-starter-blog.git` or TS (community support) - `npx degit timlrx/tailwind-nextjs-starter-blog#typescript`
2. Personalize `siteMetadata.js` (site related information)
3. Personalize `authors/default.md` (main author)
4. Modify `projectsData.js`
5. Modify `headerNavLinks.js` to customize navigation links
6. Add blog posts
7. Deploy on Vercel


## Extend / Customize

`data/siteMetadata.js` - contains most of the site related information which should be modified for a user's need.

`data/authors/default.md` - default author information (required). Additional authors can be added as files in `data/authors`.

`data/projectsData.js` - data used to generate styled card in projects page.

`data/headerNavLinks.js` - navigation links.

`data/logo.svg` - replace with your own logo.

`data/blog` - replace with your own blog posts.

`public/static` - store assets such as images and favicons.

`tailwind.config.js` and `css/tailwind.css` - contain the tailwind stylesheet which can be modified to change the overall look and feel of the site.

`components/social-icons` - to add other icons, simply copy an svg file from [Simple Icons](https://simpleicons.org/) and map them in `index.js`. Other icons uses [heroicons](https://heroicons.com/).

`components/MDXComponents.js` - pass your own JSX code or React component by specifying it over here. You can then call them directly in the `.mdx` or `.md` file. By default, a custom link and image component is passed.

`layouts` - main templates used in pages.

`pages` - pages to route to. Read the [Next.js documentation](https://nextjs.org/docs) for more information

## Post

### Frontmatter

Frontmatter follows [Hugo's standards](https://gohugo.io/content-management/front-matter/).

Currently 7 fields are supported.

```
title (required)
date (required)
tags (required, can be empty array)
lastmod (optional)
draft (optional)
summary (optional)
images (optional, if none provided defaults to socialBanner in siteMetadata config)
authors (optional list which should correspond to the file names in `data/authors`. Uses `default` if none is specified)
layout (optional list which should correspond to the file names in `data/layouts`)
```

Here's an example of a post's frontmatter:

```
---
title: 'Introducing Tailwind Nexjs Starter Blog'
date: '2021-01-12'
lastmod: '2021-01-18'
tags: ['next-js', 'tailwind', 'guide']
draft: false
summary: 'Looking for a performant, out of the box template, with all the best in web technology to support your blogging needs? Checkout the Tailwind Nextjs Starter Blog template.'
images: ['/static/images/canada/mountains.jpg', '/static/images/canada/toronto.jpg']
authors: ['default', 'sparrowhawk']
layout: PostLayout
---
```

### Compose

Run `node ./scripts/compose.js` to bootstrap a new post.

Follow the interactive prompt to generate a post with pre-filled front matter.


## Support

Using the template? Support this effort by giving a star on Github, sharing your own blog and giving a shoutout on Twitter or be a project [sponsor](https://github.com/sponsors/timlrx).

## Licence

[MIT](https://github.com/timlrx/tailwind-nextjs-starter-blog/blob/master/LICENSE) © [Timothy Lin](https://www.timrlx.com)
