import menu from '../data/menu.js';

const commonResolver = {
    name: (parent) => parent.name,
    description: (parent) => parent.description,
    price: (parent) => parent.price
}
const resolvers = {
    Query: {
        allMenuItems: () => menu
    },
    Sandwiches: {
        cold: () => menu.sandwiches.cold,
        hot: () => menu.sandwiches.hot
    },
    Appetizer: commonResolver,
    Entree: commonResolver,
    Sandwich: {
        name: (parent) => parent.name,
        description: (parent) => parent.description,
        halfPrice: (parent) => parent.half_price,
        fullPrice: (parent) => parent.full_price
    },
    SoupAndSaladCombo: {
        name: (parent) => parent.name,
        price: (parent) => parent.price,
    },
    Fajita: commonResolver,
    Taco: commonResolver,
    Enchilada: {
        name: (parent) => parent.name,
        description: (parent) => parent.description,
        unoPrice: (parent) => parent.uno_price,
        dosPrice: (parent) => parent.dos_price,
        tresPrice: (parent) => parent.tres_price
    },
    Quiche: commonResolver,
    GreenSalad: commonResolver
};

export default resolvers;

