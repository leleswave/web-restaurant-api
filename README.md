# Restaurant Menu API (SQLite Branch)

This branch of the web-restaurant-api uses SQLite as the database for storing and retrieving restaurant menu data.

## Description

This Node.js application provides a GraphQL API for managing restaurant menu data. It utilizes SQLite for persistent data storage, making it lightweight and easy to deploy.

## Features

* **GraphQL API:** Provides a GraphQL endpoint for querying and mutating menu data.
* **SQLite Database:** Uses SQLite for data persistence, ideal for development and small-scale deployments.
* **Automatic Database Population:** Automatically creates and populates the SQLite database on startup if it doesn't exist.
* **Data Models:** Defines data models for menu items using Sequelize ORM.
* **Easy Setup:** Simple installation and setup process.

## Technologies Used

* Node.js
* GraphQL
* Express.js
* Sequelize ORM
* SQLite

## Prerequisites

* Node.js (v14 or later)
* npm (or yarn)

## Installation

1.  Clone the repository:

    ```bash
    git clone [https://github.com/leleswave/web-restaurant-api.git](https://github.com/leleswave/web-restaurant-api.git)
    ```

2.  Navigate to the `SQLite` branch:

    ```bash
    git checkout SQLite
    ```

3.  Install dependencies:

    ```bash
    npm install
    ```

## Usage

To start the development server and automatically populate the database, run:

```bash
npm start