#!/usr/bin/env node

import { graphql, buildSchema } from "graphql";
import typeDefs from "../src/graphql/schema.js";
import resolvers from "../src/graphql/resolvers.js";
import { program } from "commander";
import process from 'process';

process.removeAllListeners('warning');
const schema = buildSchema(typeDefs.loc.source.body);

async function executeQuery(queryString) {
  try {
    const result = await graphql({
      schema,
      source: queryString,
      rootValue: resolvers.Query,
    });

    console.log(JSON.stringify(result, null, 2));
  } catch (error) {
    console.error("Error:", error.message);
  }
}


program
  .option("-q, --query <queryString>", "Executes a GraphQL query")
  .action((options) => {
    if (options.query) {
      executeQuery(options.query);
    } else {
      console.error("Error: provide a query using --query");
      process.exit(1);
    }
  });

program.parse(process.argv);
