# Mock Etsy Item Details Microservice

> Implemented an item details component for an Etsy clone. Packaged with other microservices to approximate a functional Etsy item listing page.

![](ScreenShot1.png)

## Related Projects

- https://github.com/mock-etsy/item-details
- https://github.com/mock-etsy/header-and-search
- https://github.com/mock-etsy/cnebs-reviews

## Tech Stack

- React
- JavaScript
- Node.js
- Express
- Axios
- MySQL
- knex.js
- Babel
- Webpack
- React-Bootstrap
- Broadcast Channel API
- Docker
- AWS (Elastic Beanstalk & RDS)

## Optimizations
I optimized page load speed by using text compression middleware and switching webpack to production mode to decrease my bundle size, increasing my web score on Google PageSpeed to 99 and 83 on mobile.

I refactored to use knex.js to sanitize database queries and decrease security vulnerabilities.

## Usage

> Some usage instructions:
> npm install
> Start server with following: npm run server-dev
> Navigate to site by going to localhost:3001 (port subject to change)

### Installing Dependencies

From within the root directory:

> npm install

