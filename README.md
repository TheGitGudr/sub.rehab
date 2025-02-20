# sub.rehab

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).



## Add subreddit links

To add a new subreddit or links for an existing one, edit [`./data/subreddits.json`](data/subreddits.json) and add a new object
to the `subs` array. The object should have the following properties:

```json
{
  "name": "r/<sub name>",
  "links": [{ "service": "<discord | lemmy | kbin>", "url": "<url>", "official": true | false }]
},
```

## Development

### Tools

sub.rehab is developed using:
- [Next.js](https://nextjs.org/)
- [Mantine](https://mantine.dev/)
- [react-icons](https://react-icons.github.io/react-icons/)

### Getting Started

You'll need [Node.js version 18](https://nodejs.org/en/) and [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) installed.

Install dependencies:
```bash
yarn install
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.
