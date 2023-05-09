# Mebid medical healthcare Frontend 🚑

It is a web application focused on the provision of medical services where the purchase of pharmaceutical products and the scheduling of appointments in different areas of medicine are facilitated and, on the other hand, providing an administration interface to facilitate the management of the different services of the application.

## Features 📋

- Ecommerce to purchase pharmaceutical products.
- Platform to manage appointments both by the user and by the doctor.
- Login and register of users to allow use the different services of mebid.
- Registration, updating and deletion of doctors and products by administrators with their own platform.
- Profiles of users and doctors to show and manage his differents activities related with his appointments and personal data.
- A payment gateway was enabled to allow the purchase of products and appointments through credit and debit cards.
- The user and doctor are enable to update them personal data such as email, passwords, phone and images.

## Tech 👨‍💻

Mebid uses a number of technologies to work properly:

- [React](https://react.dev/) - React lets you build user interfaces out of individual pieces called components
- [Vite](https://vitejs.dev/) - Is a build tool that aims to provide a faster and leaner development experience for modern web projects.
- [SASS](https://sass-lang.com/) - An opinionated styleguide for writing sane, maintainable and scalable Sass.
- [Axios](https://axios-http.com/docs/intro) - Axios is a promise-based HTTP Client for node.js and the browser.
- [Redux](https://es.redux.js.org/) - Redux is a predictable container of JavaScript application state.
- [SWR](https://swr.vercel.app/) - SWR is a strategy to first return the data from cache (stale), then send the fetch request (revalidate), and finally come with the up-to-date data.
- [Cypress](https://www.cypress.io/) - With Cypress, you can easily create tests for your modern web applications, debug them visually, and automatically run them in your continuous integration builds.
- [Chakra UI](https://chakra-ui.com/) - Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.

## Installation 🔩

Mebid requires [Node.js](https://nodejs.org/) v16+ to run.

Install the dependencies and devDependencies and start the server.

```sh
pnpm install
pnpm run dev
```

_Due to we use vite, it provide us an easily environments variables to use between production and developments environments. We recomend read the .env.example to use your own env variable to run succesfully the app_

## TEST 🤖

To run cypress use:

```sh
npx cypress open
```

## DEVELOPERS 👩‍🎤

[Jean Carlo Vittory](https://github.com/JeanVittory) & [Sebastian Alvarez Henao](https://github.com/Salvarez0212)
