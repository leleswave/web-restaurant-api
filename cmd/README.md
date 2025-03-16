# Restaurant Menu CLI

A command-line tool to query a GraphQL API for restaurant menu data.

## Description

This Node.js CLI tool allows developers and testers to interact with a GraphQL API endpoint for restaurant menu data directly from the command line. It leverages Commander.js for easy command-line argument parsing and `node-fetch` (or built-in fetch) to make HTTP requests to the GraphQL API.

**Note:** This CLI is designed to query a specific GraphQL API structure related to a restaurant menu. The output structure will mirror the data structure and the GraphQL schema of the API being queried.

## Features

* **Query GraphQL APIs:** Sends GraphQL queries to a specified endpoint.
* **Command-Line Interface:** Easy-to-use command-line interface with clear options.
* **Flexible Testing:** Quickly test GraphQL queries and inspect the results.
* **Output Aligned with API Structure:** The CLI returns data in a format that mirrors the GraphQL API's schema and data structure.

## Technologies Used

* Node.js
* Commander.js
* `node-fetch` (or built-in fetch)

## Prerequisites

* Node.js (v14 or later)
* npm (or yarn)

## Installation

1.  Clone the repository:

    ```bash
    git clone [https://github.com/leleswave/web-restaurant-api.git](https://github.com/leleswave/web-restaurant-api.git)
    ```

2.  Navigate to the `cmd` branch:

    ```bash
    git checkout cmd
    ```

3.  Navigate to the `cmd` directory:

    ```bash
    cd cmd
    ```

4.  Install dependencies:

    ```bash
    npm install
    ```

5.  Create a symbolic link to the executable:

    ```bash
    npm link
    ```

## Usage

 ```bash
    restaurant-menu --query '<graphql_query>'
  ```

## Example
 
 ```bash
   restaurant-menu --query "{ allMenuItems { sandwiches { cold { name } } } }"
  ```

 ```bash
      {
        "data": 
            {
                "allMenuItems": 
                    {
                        "sandwiches": 
                            {
                                "cold": [
                                            {
                                                "name": "Turkey & Avocado"
                                            },
                                            {
                                                "name": "Pub Club"
                                            },
                                            {
                                                "name": "Rare Roast Beef & Swiss"
                                            },
                                            {
                                                "name": "Veggie"
                                            }
                                        ]
                            }
                }
            }
    }
    