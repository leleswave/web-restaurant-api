import { Appetizer, Entree, Sandwich, SandwichHot } from '../models/models.js';

const menu = {
    appetizers: [
        { name: "Iceberg Wedge Salad with House Cured Bacon", description: "tomato salsa gorgonzola", price: 7.50 },
        { name: "Sautéed Shredded Brussels Sprouts", description: "bacon hazelnuts gorgonzola", price: 6.95 },
        { name: "Kale Salad", description: "parmesan crisp corn radish garlic-lemon vinaigrette", price: 7.50 },
        { name: "Pecan Crusted Utah Goat Cheese with Basil-Mint Pesto", description: "grilled tomato salsa crostini", price: 6.95 },
        { name: "Chicken and Cabbage Eggrolls", description: "hot & sour dipping sauce", price: 6.95 }
    ],
    entrees: [
        { name: "Farfalle Pasta with Braised Pork in Tomato Cream", description: "capers butternut squash kale", price: 12.95 },
        { name: "Stout Braised Bratwurst", description: "horseradish mashed potatoes roasted root veggies grilled onion", price: 13.95 },
        { name: "Salmon & Crispy Tofu in Yellow Curry Sauce", description: "vegetable sauté golden raisin chutney", price: 15.95 },
        { name: "Sesame Shrimp", description: "udon noodles ramen broth shiitake mushrooms bean sprouts scallions", price: 13.95 }
    ],
    sandwiches: {
        cold: [
            { name: "Turkey & Avocado", description: "with tomato", halfPrice: 7.95, fullPrice: 9.25 },
            { name: "Pub Club", description: "turkey, bacon, lettuce, tomato", halfPrice: 7.95, fullPrice: 9.25 },
            { name: "Rare Roast Beef & Swiss", description: "sweet-hot mustard, lettuce, red onion", halfPrice: 7.95, fullPrice: 9.25 },
            { name: "Veggie", description: "pepper jack, avocado, sprout, tomato", halfPrice: 7.95, fullPrice: 9.25 }
        ],
        hot: [
            { name: "Southwest Chicken Breast", description: "Grilled Onion, Poblano Pepper, Tomato, Lettuce, Jack Cheese", price: 9.50 },
            { name: "Portobello Fresh Mozzarella", description: "Caramelized Onion, Roasted Pepper, Tomato, Field Greens, Basil Aioli", price: 9.50 },
            { name: "Chipotle BBQ Pork Sandwich", description: "with Pickled Jalapeño Slaw", price: 9.50 },
            { name: "Bacon Burger", description: "Swiss, Lettuce, Tomato", price: 9.25 },
            { name: "Mexi Burger", description: "Pepper Relish, Pepper Jack, Tomato, Lettuce, Guacamole", price: 9.25 },
            { name: "Herb Marinated Top Sirloin", description: "Crimini Mushrooms, Caramelized Onion, Gorgonzola, Basil Aioli, Served Open Faced on Focaccia", price: 10.95 },
            { name: "Roast Beef with Ancho Au Jus", description: "Jack Cheese, Grilled Onions, Served on Crumb Bros. Baguette", price: 9.75 },
            { name: "Blackened Catfish", description: "Creole Peppers & Onions, Fresh Herb Aioli, Served on house made Sourdough", price: 9.75 }
        ]
    },
};


const isDatabasePopulated = async () => {
    const appetizerCount = await Appetizer.count();
    const entreeCount = await Entree.count();
    const sandwichCount = await Sandwich.count();
    const sandwichHotCount = await SandwichHot.count();


    return appetizerCount > 0 || entreeCount > 0 || sandwichCount > 0 || sandwichHotCount > 0;
};

const populateDatabase = async () => {
    try {

        const isPopulated = await isDatabasePopulated();

        if (isPopulated) {
            console.log('The database is already populated!');
        } else {

            await Appetizer.bulkCreate(menu.appetizers);


            await Entree.bulkCreate(menu.entrees);

            await Sandwich.bulkCreate(menu.sandwiches.cold);


            await SandwichHot.bulkCreate(menu.sandwiches.hot);

            console.log('Data successfully inserted into the database!');
        }
    } catch (error) {
        console.error('Error populating the database:', error);
    }
};

export { populateDatabase };
