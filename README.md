
# Web Restaurant API

This project implements a **GraphQL API** for a restaurant, allowing queries for the full menu and fetching information about different categories of dishes, including **appetizers**, **entrees**, **sandwiches**, **tacos**, **enchiladas**, **fajitas**, **quiche**, and **green salads**.

## 🔀 Branch Information

* **🌳 `main` Branch:** This branch contains the core implementation of the GraphQL API for the restaurant menu.
* **💾 `SQLite` Branch:** This branch contains an implementation demonstrating how to connect the API with a SQLite database.
* **💻 `cmd` Branch:** This branch includes a small Node.js script designed to run as a binary. It allows users to execute GraphQL queries against the restaurant API directly from the terminal.


## Technologies Used (Main)

- **Node.js**: JavaScript runtime environment for the server.
- **GraphQL**: API for flexible and efficient data querying.
- **Mocha**: Test framework for JavaScript.
- **Chai**: Assertion library for testing APIs and functions.
- **Express**: Web framework for building the server.


## Prerequisites

Before running the project, you need to have **Node.js** installed. To check the versions, use the following commands:

```bash
node -v
npm -v
```

The recommended version of **Node.js** for this project is **v23.5.0** (or higher). The **npm** version should be **11.1.0**.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/leleswave/web-restaurant-api.git
cd web-restaurant-api
```

2. Install the dependencies:

```bash
npm install
```

This will install all the necessary dependencies for the project.

## Running the API

To run the API, use the following command:

```bash
npm start
```

The server will start and be available at `http://localhost:4000/graphql`. You can use this URL to test your API with a tool like **Postman** or **GraphiQL**.

## Testing the API

The project uses **Mocha** for automated testing. To run the tests, use the command:

```bash
npm test
```

The tests cover the following aspects of the API:

- **Menu Categories**: Verifies that the menu categories are populated correctly and are not empty.
- **Item Prices**: Ensures that prices are valid numbers and correctly set.
- **Menu Items**: Verifies that menu items have non-empty names, valid prices, and that certain categories contain vegetarian items, different prices, and tacos priced over 9.

Example of test output:

```
  GraphQL API Category
    ✔ should fetch items by category
    ✔ should have at least two items in the sandwiches category
    ✔ should ensure enchiladas category is not empty

  GraphQL API Prices
    ✔ should fetch entrees with price
    ✔ should fetch sandwiches with full and half price
    ✔ should fetch enchiladas with valid prices
    ✔ should fetch soup and salad combos with valid prices
    ✔ should fetch quiche menu with price
    ✔ should have price as a number for all items
    ✔ should have all prices greater than zero
    ✔ should fetch green salads with different prices
    ✔ should have tacos with prices greater than 9

  GraphQL API General
    ✔ should fetch the full menu
    ✔ should fetch valid fajitas
    ✔ should return correct menu item for a taco
    ✔ should have non-null names for all menu items
    ✔ should have non-empty names for all menu items
    ✔ should fetch vegetarian tacos
    ✔ should have fajitas with 'Steak' in their name

  19 passing (62ms)
```

### Dependencies

- **graphql**: Library for implementing GraphQL.
- **express**: Web server framework.
- **mocha**: Testing framework.
- **chai**: Assertion library.
- **supertest**: For performing integration tests of the API.
