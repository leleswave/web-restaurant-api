import { gql } from 'apollo-server-express';

const typeDefs = gql`
 type Query {
  allMenuItems: Menu
}

type Menu {
  appetizers: [Appetizer]
  entrees: [Entree]
  sandwiches: Sandwiches
  soupAndSaladCombos: [SoupAndSaladCombo]
  fajitas: [Fajita]
  tacos: [Taco]
  enchiladas: [Enchilada]
  quiche: [Quiche]
  greenSalad: [GreenSalad]
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

type SoupAndSaladCombo {
  name: String
  price: Float
}

type Fajita {
  name: String
  description: String
  price: Float
}

type Taco {
  name: String
  description: String
  price: Float
}

type Enchilada {
  name: String
  description: String
  unoPrice: Float
  dosPrice: Float
  tresPrice: Float
}

type Quiche {
  name: String
  description: String
  price: Float
}

type GreenSalad {
  name: String
  description: String
  price: Float
}

`;

export default typeDefs;
