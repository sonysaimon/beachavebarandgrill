/* Beach Ave Bar & Grill — menu data (from the April 2026 printed menus).
   To change a price or dish, edit it here; menu.html and the home-page
   happy hour board render from this file. Prices do not include tax. */

const MENUS = {
  food: {
    label: "Food",
    note: "Served daily from open to close. Prices do not include tax. Parties of 8 or more may be subject to an 18% gratuity.",
    categories: [
      {
        name: "Starters",
        items: [
          { name: "Dirty Fries", desc: "Fries, queso cheese sauce, pulled pork, green onions, corn and bean salsa, red pepper pico, sour cream", price: "15.95" },
          { name: "Wings", desc: "Hot, lemon pepper, Korean BBQ, or salt and pepper, served with ranch dip", price: "18.95" },
          { name: "Calamari", desc: "Spiced squid on tartar sauce, shishito peppers, cucumber, crispy chickpeas, sumac aioli", price: "18.25" },
          { name: "Seafood Chowder", desc: "Crab, prawns, smoked salmon, lobster stock, croutons", price: "14.25" },
          { name: "Guacamole & Chips", desc: "In-house guacamole, corn tortilla chips", price: "12.95" },
          { name: "Bao Pockets", desc: "Korean BBQ pork, pickled cabbage and carrots, cilantro crema, cucumber", price: "14.95" },
          { name: "Tuna Poke Tostadas", desc: "Two crispy corn tortillas topped with tuna poke, avocado, pineapple salsa, mango coulis, macadamia nuts, sesame seeds", price: "12.50" },
          { name: "Avocado Tostadas", desc: "Two crispy corn tortillas topped with avocado, refried beans, red pepper pico, lettuce, feta, cilantro crema, Valentina's hot sauce", price: "11.50" },
          { name: "Sticky BBQ Rib Ends", desc: "Pork rib ends, Hawaiian BBQ sauce glaze", price: "16.95" },
          { name: "Buffalo Chicken Sliders", desc: "Buffalo chicken, iceberg lettuce, tomato, pickles, chipotle mayo", price: "15.75" },
          { name: "Seven Layer Bean Dip & Chips", desc: "Refried beans, guacamole, sour cream, olives, queso cheese sauce, red pepper pico, green onion", price: "13.95" }
        ]
      },
      {
        name: "Tacos",
        note: "Two tacos per order — add a third for $7",
        items: [
          { name: "Prawn", desc: "Chipotle prawns, honey slaw, red pepper pico", price: "14.50" },
          { name: "Jerk Chicken", desc: "Jerk chicken, shishito aioli, napa cabbage, mango jicama salad", price: "14.75" },
          { name: "Ahi Tuna", desc: "Seared rare ahi tuna, pickled cabbage, cilantro crema, cucumber, guacamole, mango coulis, serrano peppers", price: "15.50" }
        ]
      },
      {
        name: "Salads",
        note: "Add chicken, sautéed prawns or ahi tuna $5.95–$7.95",
        items: [
          { name: "Kale Quinoa Salad", desc: "Kale, quinoa, fennel, seasonal berries, goat cheese, pecans, peashoots, pecan vinaigrette", price: "17.95" },
          { name: "Beach House Salad", desc: "Heritage greens, cucumber, tomato, feta, roasted seeds, carrots, maple dijon vinaigrette", price: "16.25" },
          { name: "Rad Caesar", desc: "Romaine hearts, radicchio, crispy capers, croutons, parmesan", price: "16.95" }
        ]
      },
      {
        name: "Handhelds",
        note: "All served with fries. Substitute caesar or beach house salad $1.95, dirty fries $2.50. Add-ons: guacamole $2.95, bacon $2.95, mushrooms $2.50, gluten-free bun $2.50",
        items: [
          { name: "Beach Burger", desc: "Double stacked CAB beef burger, cheddar, beach sauce, veggies, brioche", price: "22.95" },
          { name: "Hickory BBQ Burger", desc: "Double stacked CAB beef burger, bacon, cheddar, pickles, bbq sauce, chipotle mayo, hickory sticks, brioche", price: "23.50" },
          { name: "Fried Chicken Sandwich", desc: "Crispy chicken breast, spicy cajun butter, pickles, mayo, honey slaw, brioche", price: "23.95" },
          { name: "Seafood Club", desc: "Crab, prawns, smoked salmon, bacon, old bay mayo, veggies, sourdough", price: "24.95" },
          { name: "Bacon Cubano Sandwich", desc: "Mojo pork, bacon, mustard blend, swiss cheese, mayo, pickles, pressed brioche", price: "23.95" },
          { name: "Beyond Beach Burger", desc: "Plant-based burger, american cheddar, veggies, guacamole, brioche", price: "23.50" }
        ]
      },
      {
        name: "Mussels",
        items: [
          { name: "Chorizo Tomato", desc: "Atlantic mussels, onion, red pepper, chorizo sausage, tomato broth", price: "21.50" },
          { name: "Coconut Lemongrass", desc: "Atlantic mussels, onion, red pepper, coconut lemongrass broth", price: "21.50" }
        ]
      },
      {
        name: "Big Plates",
        items: [
          { name: "Beef Bolognese Linguine", desc: "San Marzano bolognese sauce, fresh basil, parmesan", price: "24.50" },
          { name: "Seafood Pasta", desc: "Prawns, salmon, mussels, sundried tomato, calabrian chili, lemon dill cream sauce", price: "27.95" },
          { name: "Cod & Chips", desc: "Two pieces of cod, fries, honey slaw, lemon caper tartar", price: "22.95" },
          { name: "Jambalaya", desc: "Creole style chicken, prawns, chorizo, celery, red peppers, green onion, tomato brown rice", price: "25.50" }
        ]
      },
      {
        name: "Dessert",
        items: [
          { name: "Ice Cream Waffle", desc: "Liège waffle, chocolate, caramel, skor crumble, vanilla ice cream", price: "11.95" },
          { name: "Feature Cheesecake", desc: "Rotating cheesecake with chantilly cream and chocolate sauce", price: "11.95" }
        ]
      }
    ]
  },

  brunch: {
    label: "Brunch",
    note: "Saturday & Sunday, 10am–2pm. Prices do not include tax.",
    categories: [
      {
        name: "Eggs Benedict",
        note: "All served on english muffins, with poached eggs, brown butter hollandaise and a side of tater tots",
        items: [
          { name: "Bacon Benny", price: "18.95" },
          { name: "Tomato Mushroom Benny", price: "18.25" },
          { name: "Lox and Cream Cheese Benny", price: "19.50" },
          { name: "Guacamole Benny", price: "17.95" },
          { name: "Pulled Pork Benny", price: "19.50" }
        ]
      },
      {
        name: "Brunch Plates",
        note: "Add-ons: three slices of bacon $4.25, egg $1.95, toast $2.95, avocado $1.95, tater tots $3.95, waffle $6.95, syrup $1",
        items: [
          { name: "Chicken 'n Waffles", desc: "Liège waffles, fried chicken breast, honey butter, chantilly cream, fresh berries, maple syrup", price: "20.50" },
          { name: "Waffles 'n Fruit", desc: "Liège waffles, chantilly cream, icing sugar, maple syrup, fresh berries", price: "17.50" },
          { name: "BBQ Skillet", desc: "Tater tots, pulled pork, red pepper pico, swiss cheese, bbq sauce, two poached eggs, brown butter hollandaise", price: "19.95" },
          { name: "Breakfast Burger", desc: "CAB burger patty, bacon, scrambled egg, cheddar, brown butter hollandaise, veggies, tater tots", price: "19.50" },
          { name: "Two Egg Scramble", desc: "Two scrambled eggs, sourdough toast, three pieces of bacon, tater tots", price: "15.95" },
          { name: "Avocado Toast", desc: "Sourdough toast, one smashed avocado, citrus, radish, grape tomato, feta", price: "15.25" }
        ]
      },
      {
        name: "Starters & More",
        items: [
          { name: "Wings", desc: "Hot, lemon pepper, Korean BBQ, or salt and pepper, served with ranch dip", price: "18.95" },
          { name: "Prawn Tacos", desc: "Chipotle prawns, honey slaw, red pepper pico", price: "14.50" },
          { name: "Guacamole & Chips", desc: "In-house guacamole, corn tortilla chips", price: "12.95" },
          { name: "Seafood Chowder", desc: "Crab, prawns, smoked salmon, lobster stock, croutons", price: "14.25" },
          { name: "Cod & Chips", desc: "Two pieces of cod, fries, honey slaw, lemon caper tartar", price: "22.95" }
        ]
      },
      {
        name: "Salads",
        note: "Add chicken, sautéed prawns or ahi tuna $5.95–$7.95",
        items: [
          { name: "Kale Quinoa Salad", desc: "Kale, quinoa, fennel, seasonal berries, goat cheese, pecans, peashoots, pecan vinaigrette", price: "17.95" },
          { name: "Beach House Salad", desc: "Heritage greens, cucumber, tomato, feta, roasted seeds, carrots, maple dijon vinaigrette", price: "16.25" },
          { name: "Rad Caesar", desc: "Romaine hearts, radicchio, crispy capers, croutons, parmesan", price: "16.95" }
        ]
      },
      {
        name: "Handhelds",
        note: "All served with fries. Substitute caesar or beach house salad $1.95, dirty fries $2.50",
        items: [
          { name: "Beach Burger", desc: "Double stacked CAB beef burger, cheddar, beach sauce, veggies, brioche", price: "22.95" },
          { name: "Hickory BBQ Burger", desc: "Double stacked CAB beef burger, bacon, cheddar, pickles, bbq sauce, chipotle mayo, hickory sticks, brioche", price: "23.50" },
          { name: "Fried Chicken Sandwich", desc: "Crispy chicken breast, cajun butter, pickles, mayo, honey slaw, brioche", price: "23.95" },
          { name: "Bacon Cubano", desc: "Mojo pork, bacon, mustard blend, swiss cheese, mayo, pickles, pressed brioche", price: "23.95" },
          { name: "Beyond Beach Burger", desc: "Plant-based burger, american cheddar, veggies, hummus, brioche", price: "23.50" }
        ]
      },
      {
        name: "Dessert",
        items: [
          { name: "Ice Cream Waffle", desc: "Liège waffle, chocolate, caramel, skor crumble, vanilla ice cream", price: "11.95" },
          { name: "Feature Cheesecake", desc: "Rotating cheesecake with chantilly cream and chocolate sauce", price: "11.95" }
        ]
      }
    ]
  },

  drinks: {
    label: "Drinks",
    note: "Prices do not include tax.",
    categories: [
      {
        name: "Beer & Cider",
        note: "16oz on tap",
        items: [
          { name: "Strange Fellows Talisman Pale Ale", desc: "4.0%", price: "8.50" },
          { name: "Phillips Reverb West Coast IPA", desc: "6.4%", price: "8.50" },
          { name: "Parkside Pilsner", desc: "4.9%", price: "8.25" },
          { name: "Beach Time Lager", desc: "4.5%", price: "8.00" },
          { name: "Rewind Rainbow Road Tropical Sour", desc: "5.0%", price: "9.00" },
          { name: "33 Acres of Sunshine French Blanche", desc: "5.0%", price: "8.50" },
          { name: "Brave Brewing Hazy IPA", desc: "6.0%", price: "8.25" },
          { name: "Hoyne Dark Matter", desc: "5.3%", price: "9.00" },
          { name: "Greenhill Cider", desc: "6.0% · 13oz", price: "9.50" },
          { name: "Slackwater Brewing Amber Ale", desc: "5.5%", price: "8.50" }
        ]
      },
      {
        name: "Cocktails",
        items: [
          { name: "Beach Blue Margarita", desc: "2oz — tequila, beach blue mix, lime juice, basil tincture. Upgrade to Don Julio Reposado +$4.50", price: "14.25" },
          { name: "Tropical Treat", desc: "1.5oz — house rum blend, mango nectar, lime juice, coconut water, coconut milk clarified (contains soy)", price: "16.50" },
          { name: "Imitation Gold", desc: "2oz — rye, Grand Marnier, orange juice, cava, chocolate bitters", price: "14.50" },
          { name: "Purple Reign", desc: "2oz — Empress 1908 gin, Bitter Bianca, lime juice, simple syrup, cava, sakura cherry bitters", price: "16.95" },
          { name: "The Fino Print", desc: "2oz — sesame and kelp infused vodka, Tio Pepe fino sherry, saline solution, soda water", price: "13.95" }
        ]
      },
      {
        name: "Red Wine",
        note: "6oz / 9oz / 750ml",
        items: [
          { name: "Da Silva Vinho Tinto Syrah", desc: "Dry — smoke, black pepper, cassis", price: "12.50 / 18 / 50" },
          { name: "Bench 1775 Merlot", desc: "Dry — leather, raspberry, spices", price: "11.50 / 16.50 / 46" },
          { name: "Cono Sur Cabernet", desc: "Dry — currant, plum, red berries", price: "9.75 / 13.75 / 39" }
        ]
      },
      {
        name: "White & Rosé",
        note: "6oz / 9oz / 750ml",
        items: [
          { name: "Cono Sur Bicicleta Rosé", desc: "Dry — cherry, strawberry", price: "10 / 14.75 / 40" },
          { name: "Hester Creek Pinot Gris", desc: "Dry — apple, lemon", price: "9.75 / 13.75 / 39" },
          { name: "Joie Noble Blend", desc: "Off-dry — lychee, stone fruit", price: "13 / 19 / 52" },
          { name: "Church & State Chardonnay", desc: "Dry — peaches, almond, vanilla", price: "11.50 / 16.50 / 46" }
        ]
      },
      {
        name: "Sparkling",
        note: "6oz / 750ml",
        items: [
          { name: "Castelfino Cava Brut", desc: "Toasty, green apple, citrus", price: "12.95 / 50" },
          { name: "Bottega Prosecco Gold Brut", desc: "Pear, citrus, white flowers", price: "— / 74" },
          { name: "Moët & Chandon Brut Impérial", desc: "Poached pear, almond, lemon", price: "— / 155" }
        ]
      },
      {
        name: "Reserve Bottles",
        items: [
          { name: "Muga Rioja Reserva", desc: "Spain, 2018 — berries, chocolate, walnut", price: "72" },
          { name: "Chianti Classico Riserva San Felice", desc: "Chianti, 2020 — black cherry, black truffle, dark wood, full body", price: "70" },
          { name: "Duck Hunter Sauvignon Blanc", desc: "Marlborough, 2021 — passionfruit, lime, lemongrass", price: "65" },
          { name: "La Chablissienne La Pierrelée", desc: "Chablis, 2020 — lemon, jasmine, flint, mineral", price: "92" },
          { name: "Chocolate Block Boekenhoutskloof", desc: "South Africa, 2019 — plum, blackcurrant, raspberry, oak", price: "99" }
        ]
      },
      {
        name: "Back Bar",
        note: "1oz",
        items: [
          { name: "Montelobos Mezcal", price: "12.50" },
          { name: "Don Julio Reposado", price: "16.50" },
          { name: "Hendrick's Gin", price: "11.95" },
          { name: "Glenfiddich 12 yr", price: "11.95" },
          { name: "Grey Goose", price: "12.95" },
          { name: "Empress 1908 Gin", price: "13.95" },
          { name: "Johnnie Walker Red", price: "9.50" },
          { name: "Luksusowa Vodka", price: "9.50" },
          { name: "Fernet Branca", price: "10.95" },
          { name: "Limoncello", price: "8.95" },
          { name: "Sambuca", price: "8.95" },
          { name: "Forty Creek Cream", price: "8.50" },
          { name: "Hennessy V.S.", price: "14.95" },
          { name: "St Rémy V.S.O.P.", price: "8.50" },
          { name: "Crown Royal", price: "10.00" },
          { name: "Monkey Shoulder", price: "11.95" }
        ]
      },
      {
        name: "Non-Alcoholic",
        items: [
          { name: "Grapefruit Sour", desc: "Grapefruit juice, lime juice, syrup, lemon lime soda", price: "7.95" },
          { name: "The Sailor's Soda", desc: "Dill and basil syrup, muddled cucumber, lime juice, sea salt, soda water", price: "7.95" },
          { name: "Heineken 0.0% Beer", price: "6.95" },
          { name: "Saintly 0% Sparkling Rosé", desc: "6oz glass / 750ml bottle", price: "9.50 / 36" }
        ]
      }
    ]
  },

  happyhour: {
    label: "Happy Hour",
    note: "Monday–Friday, 3pm–5pm. Prices do not include tax.",
    categories: [
      {
        name: "Drinks",
        items: [
          { name: "Beach Time Lager", desc: "16oz tap", price: "5.50" },
          { name: "Brave Brewing Hazy IPA", desc: "16oz tap", price: "5.50" },
          { name: "Hester Creek Pinot Gris", desc: "6oz", price: "7.50" },
          { name: "Cono Sur Cabernet", desc: "6oz", price: "7.50" },
          { name: "Cono Sur Rosé", desc: "6oz", price: "7.50" }
        ]
      },
      {
        name: "Snacks",
        items: [
          { name: "Happy Hour Hot Dog", desc: "Tomatoes, pickles, red relish, mustard, pepperoncini, onions", price: "7.50" },
          { name: "Happy Hour Veggie Dog", desc: "Tomatoes, pickles, red relish, mustard, pepperoncini, onions", price: "8.50" },
          { name: "Happy Hour Guacamole", desc: "In-house guacamole, tortilla chips", price: "8.50" },
          { name: "Chopped Cheese Sliders", desc: "CAB beef, american cheddar, pickles, beach sauce", price: "9.50" },
          { name: "Pulled Pork Sliders", desc: "BBQ pulled pork, chipotle mayo, guacamole, pickled onion", price: "9.50" },
          { name: "Avocado Tostada", desc: "Corn tortilla, refried beans, avocado, red pepper pico, lettuce, feta", price: "8.50" }
        ]
      }
    ]
  }
};
