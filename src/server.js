import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './graphql/schema.js';
import resolvers from './graphql/resolvers.js';
import { populateDatabase } from './db/populate.js';

const app = express();

const server = new ApolloServer({ typeDefs, resolvers });
await server.start();

server.applyMiddleware({ app });

populateDatabase()
  .then(() => {
    console.log('Database populated successfully!');

    app.listen(4000, () => {
      console.log('Apollo server running at http://localhost:4000' + server.graphqlPath);
    });
  })
  .catch((err) => {
    console.error('Error populating database:', err);
  });

export default app;