import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    allMenuItems: Menu
  }

  type Menu {
    appetizers: [Appetizer]
    entrees: [Entree]
    sandwiches: Sandwiches
  }

  type Appetizer {
    name: String
    description: String
    price: Float
  }

  type Entree {
    name: String
    description: String
    price: Float
  }

  type Sandwiches {
    cold: [Sandwich]
    hot: [SandwichHot]
  }

  type SandwichHot {
    name: String
    description: String
    price: Float
  }

  type Sandwich {
    name: String
    description: String
    halfPrice: Float
    fullPrice: Float
  }

`;

export default typeDefs;
