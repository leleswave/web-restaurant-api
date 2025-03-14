const menu = {
    appetizers: [
      {
        name: "Iceberg Wedge Salad with House Cured Bacon",
        description: "tomato salsa gorgonzola",
        price: 7.50
      },
      {
        name: "Sautéed Shredded Brussels Sprouts",
        description: "bacon hazelnuts gorgonzola",
        price: 6.95
      },
      {
        name: "Kale Salad",
        description: "parmesan crisp corn radish garlic-lemon vinaigrette",
        price: 7.50
      },
      {
        name: "Pecan Crusted Utah Goat Cheese with Basil-Mint Pesto",
        description: "grilled tomato salsa crostini",
        price: 6.95
      },
      {
        name: "Chicken and Cabbage Eggrolls",
        description: "hot & sour dipping sauce",
        price: 6.95
      }
    ],
    entrees: [
      {
        name: "Farfalle Pasta with Braised Pork in Tomato Cream",
        description: "capers butternut squash kale",
        price: 12.95
      },
      {
        name: "Stout Braised Bratwurst",
        description: "horseradish mashed potatoes roasted root veggies grilled onion",
        price: 13.95
      },
      {
        name: "Salmon & Crispy Tofu in Yellow Curry Sauce",
        description: "vegetable sauté golden raisin chutney",
        price: 15.95
      },
      {
        name: "Sesame Shrimp",
        description: "udon noodles ramen broth shiitake mushrooms bean sprouts scallions",
        price: 13.95
      }
    ],
    sandwiches: {
      cold: [
        {
          name: "Turkey & Avocado",
          description: "with tomato",
          half_price: 7.95,
          full_price: 9.25
        },
        {
          name: "Pub Club",
          description: "turkey, bacon, lettuce, tomato",
          half_price: 7.95,
          full_price: 9.25
        },
        {
          name: "Rare Roast Beef & Swiss",
          description: "sweet-hot mustard, lettuce, red onion",
          half_price: 7.95,
          full_price: 9.25
        },
        {
          name: "Veggie",
          description: "pepper jack, avocado, sprout, tomato",
          half_price: 7.95,
          full_price: 9.25
        }
      ],
      hot: [
        {
          name: "Southwest Chicken Breast",
          description: "Grilled Onion, Poblano Pepper, Tomato, Lettuce, Jack Cheese",
          price: 9.50
        },
        {
          name: "Portobello Fresh Mozzarella",
          description: "Caramelized Onion, Roasted Pepper, Tomato, Field Greens, Basil Aioli",
          price: 9.50
        },
        {
          name: "Chipotle BBQ Pork Sandwich",
          description: "with Pickled Jalapeño Slaw",
          price: 9.50
        },
        {
          name: "Bacon Burger",
          description: "Swiss, Lettuce, Tomato",
          price: 9.25
        },
        {
          name: "Mexi Burger",
          description: "Pepper Relish, Pepper Jack, Tomato, Lettuce, Guacamole",
          price: 9.25
        },
        {
          name: "Herb Marinated Top Sirloin",
          description: "Crimini Mushrooms, Caramelized Onion, Gorgonzola, Basil Aioli, Served Open Faced on Focaccia",
          price: 10.95
        },
        {
          name: "Roast Beef with Ancho Au Jus",
          description: "Jack Cheese, Grilled Onions, Served on Crumb Bros. Baguette",
          price: 9.75
        },
        {
          name: "Blackened Catfish",
          description: "Creole Peppers & Onions, Fresh Herb Aioli, Served on house made Sourdough",
          price: 9.75
        }
      ]
    },
    soupAndSaladCombos: [
      {
        name: "French Onion or Soup of the Day",
        price: 4.95
      },
      {
        name: "French Onion or Soup of the Day Combo with small green salad, fresh fruit or house pasta",
        price: 7.25
      },
      {
        name: "French Onion or Soup of the Day Combo with half pasta of the day",
        price: 8.75
      }
    ],
    fajitas: [
      {
        name: "Chicken Fajitas",
        description: "Onions, Poblano and Bell Peppers, Guacamole, Two Salsas",
        price: 10.95
      },
      {
        name: "Sirloin Steak Fajitas",
        description: "Onions, Poblano and Bell Peppers, Carrots, Onion, Guacamole, Two Salsas",
        price: 10.95
      }
    ],
    tacos: [
      {
        name: "Beer Battered Fish",
        description: "with Jalapeño Remoulade, Roasted Salsa, Cabbage",
        price: 9.95
      },
      {
        name: "Carne Asada",
        description: "marinated sirloin with Guacamole, Tomatillo Salsa",
        price: 9.95
      },
      {
        name: "Citrus Marinated Chicken",
        description: "with Guacamole, Tomatillo Salsa",
        price: 9.95
      },
      {
        name: "Grilled Veggie",
        description: "with Zucchini, Yellow Squash, Bell Peppers, Onion, Guacamole, Tomatillo Salsa",
        price: 9.95
      }
    ],
    enchiladas: [
      {
        name: "Beef, Chicken, Cheese, or Veggie Enchiladas",
        description: "with Southwestern Succotash, Black Beans with Chipotle Crema",
        uno_price: 8.50,
        dos_price: 9.95,
        tres_price: 11.50
      },
      {
        name: "Chili Relleno",
        description: "Stuffed with Jack Cheese & Corn Glazed Yam, Chayote Squash Succotash, Red Chili Sauce",
        uno_price: 8.50,
        dos_price: 9.95,
        tres_price: 11.50
      },
      {
        name: "Pepita Crusted Salmon",
        description: "with Chipotle Glaze, chevre whipped yams, jicama slaw, tomatillo sauce",
           uno_price: 8.50,
        dos_price: 9.95,
        tres_price: 11.50
      }
    ],
    quiche: [
      {
        name: "Bacon, Swiss, Mushroom, Zucchini and Mushroom Quiche",
        description: "Choice of Fresh Fruit or Green Salad",
        price: 8.95
      }
    ],
    greenSalad: [
      {
        name: "Grilled Red Trout Salad",
        description: "Lentils, Tomatoes, Cukes, Green Beans, Red Bells, Almonds, Sundried Tomato Vinaigrette",
        price: 10.95
      },
      {
        name: "Smoked Turkey Cheese Tortellini Salad",
        description: "Bacon, Tomato, Cucumber, Egg, Black Bean-Corn Salsa, Avocado",
        price: 9.95
      },
      {
        name: "Asian Grilled Chicken Salad",
        description: "Snow Peas, Carrot Slaw, Red Bells, Water Chestnut, Peanuts, Baby Corn, Cilantro, Cukes, Spicy Peanut Dressing",
        price: 10.50
      },
      {
        name: "Southwest Grilled Chicken Salad",
        description: "Tomato, Guacamole, pepitas, Jicama, Corn & Black Bean Salsa, Orange Wedges, Spicy Citrus Vinaigrette",
        price: 10.50
      },
      {
        name: "Mediterranean Italian Sausage Salad",
        description: "Artichoke Hearts, Green Beans, Roma Tomato, Kalamatas, Red Onion, Cucumber, Croutons, Parmesan, Fresh Mozzarella, Gorgonzola Vinaigrette",
        price: 9.95
      },
      {
        name: "Grilled Salmon Salad",
        description: "Artichoke tapenade, shredded kale, corn, radish, parmesan crisps",
        price: 11.50
      }
    ]
  };
    
  
  export default menu; 

