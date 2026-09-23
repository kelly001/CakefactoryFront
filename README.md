# CakeFactory

**2022 unfinished side project — paused and not in active development.**

An early prototype of an online service for browsing cakes and other sweets and requesting a cake order. Kept as a snapshot of a side project from 2022.

## What's included

- A small sample cake catalog with search.
- Individual cake pages with descriptions and properties.
- An order enquiry form with contact details and a callback option.

Built with React 17, TypeScript, Redux, React Router, and Bootstrap 5 using Create React App.

## Original ideas

These were planned features, not an active roadmap:

- An interactive cake builder.
- A complete online shop for ready-made cakes.
- Order management, customer profiles, and a loyalty program.

## Run locally

```sh
npm install
npm start
```

The frontend opens at http://localhost:3000. To create a production build:

```sh
npm run build
```

## Limitations

This is an incomplete prototype, not a production-ready shop. The catalog uses hardcoded sample data, and search and responsive layouts have known issues.

The enquiry form expects a separate PHP backend at `http://localhost/cakefactory/save_order.php`. That backend is not included in this repository, so submitting orders requires it to be set up separately.

Dependencies reflect the project's original setup and have not been modernized.
