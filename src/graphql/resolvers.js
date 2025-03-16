import { Appetizer, Entree, Sandwich, SandwichHot } from '../models/models.js';

const resolvers = {
  Query: {
    allMenuItems: async () => {
      const appetizers = await Appetizer.findAll();
      const entrees = await Entree.findAll();
      const coldSandwiches = await Sandwich.findAll();
      const hotSandwiches = await SandwichHot.findAll();
      
      return {
        appetizers,
        entrees,
        sandwiches: {
          cold: coldSandwiches,
          hot: hotSandwiches
        },
      };
    }
  },
};

export default resolvers;
