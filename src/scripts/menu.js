import "../scripts/menu-styles.css"
import hamburgerImg from "../assets/images/hamburger.png"
import cheeseburgerImg from "../assets/images/cheeseburger.png"
import baconburgerImg from "../assets/images/baconburger.png"
import regularFriesImg from "../assets/images/regular-fries.png"
import loadedFriesImg from "../assets/images/loaded-fries.png"
import milkshakesImg from "../assets/images/milkshakes.png"
import softDrinksImg from "../assets/images/soft-drinks.png"


export default function loadMenu() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const menuContainer = document.createElement("div");
    menuContainer.id = "menu-container";
    const customSectiion = document.createElement("section");
    customSectiion.id = "custom-selection";
    const customHeader = document.createElement("h1")
    customHeader.textContent = "Build Your Burger"

    content.appendChild(menuContainer);
    menuContainer.append(customHeader);

    customBurger.forEach((burger) => {
        const cardContainer = document.createElement("div");
        cardContainer.id = "card-container"
        cardContainer.classList.add("custom-card");
        const card = document.createElement("div");
        card.id = "card-content"
        card.classList.add("custom-card");

        const image = document.createElement("img");
        const cardName = document.createElement("h2");
        const cardDesc = document.createElement("p");
        const cardPrice = document.createElement("p");
        image.setAttribute("src", burger.image);
        cardName.textContent = burger.name;
        cardDesc.textContent = burger.description;
        cardPrice.textContent = burger.price;

        menuContainer.appendChild(customSectiion);
        customSectiion.appendChild(cardContainer);
        cardContainer.appendChild(card);
        card.append(image, cardName, cardDesc, cardPrice);
    });

    const toppingSection = document.createElement("section");
    toppingSection.id = "topping-section";
    const toppingContainer = document.createElement("div");
    toppingContainer.id = "topping-container"
    const toppingHeader = document.createElement("h1")
    toppingHeader.id = "topping-header";
    toppingHeader.textContent = "Choose Your Toppings"

    menuContainer.append(toppingHeader);
    
    toppings.forEach((topping) => {
        const cardContainer = document.createElement("div");
        cardContainer.id = "card-container"
        cardContainer.classList.add("toppings-card");
        const card = document.createElement("div");
        card.id = "card-content"

        const cardName = document.createElement("h2");
        const cardDesc = document.createElement("p");

        cardName.textContent = topping.name;
        cardDesc.textContent = topping.description;

        menuContainer.appendChild(toppingSection);
        toppingSection.append(toppingContainer)
        toppingContainer.appendChild(cardContainer);
        cardContainer.appendChild(card);
        card.append(cardName, cardDesc);

    });

    const sideDrinkSection = document.createElement("section");
    sideDrinkSection.id = "side-drink-section";
    const sideDrinkHeader = document.createElement("h1");
    sideDrinkHeader.textContent = "Sides & Beverages";

    menuContainer.append(sideDrinkHeader);

    sidesAndDrinks.forEach((sideAndDrink) => {
        const cardContainer = document.createElement("div");
        cardContainer.id = "card-container"
        cardContainer.classList.add("custom-card");
        const card = document.createElement("div");
        card.id = "card-content"
        card.classList.add("custom-card");

        const image = document.createElement("img");
        const cardName = document.createElement("h2");
        const cardDesc = document.createElement("p");
        const cardPrice = document.createElement("p");
        image.setAttribute("src", sideAndDrink.image);
        cardName.textContent = sideAndDrink.name;
        cardDesc.textContent = sideAndDrink.description;
        cardPrice.textContent = sideAndDrink.price;

        menuContainer.appendChild(sideDrinkSection);
        sideDrinkSection.appendChild(cardContainer);
        cardContainer.appendChild(card);
        card.append(image, cardName, cardDesc, cardPrice);
    });
}

const customBurger = [
    {
        name: "Hamburger",
        description: "Hand-formed, seasoned beef patty nestled in a toasted sesame bun, layered with fresh toppings and condiments of your choosing.",
        price: "$9.75",
        image: hamburgerImg
    },
    {
        name: "Cheeseburger",
        description: "American-style cheese melthed on seasoned beef patty nestled in a toasted sesame bun, layered with fresh toppings and condiments of your choosing.",
        price: "$10.75",
        image: cheeseburgerImg
    },
    {
        name: "Baconburger",
        description: "Hand-formed, seasoned beef patty layered with crispy bacon and nestled in a toasted sesame bun, layered with fresh toppings and condiments of your choosing.",
        price: "$12.75",
        image: baconburgerImg
    }
];

const toppings = [
    {
        name: "Lettuce",
        description: "Torn by hand for optimum freshness and traction to hold toppings."
    },
    {
        name: "Pickles",
        description: "Exactly five pickles, for a salty, briny, and crunchy texture."
    },
    {
        name: "Tomatoes",
        description: "Two slices for an even tomato-to-bite ratio every time. Sliced fresh daily."
    },
    {
        name: "Grilled Onions",
        description: "Freshly chopped by hand and grilled on the flat top for optimal flavor."
    },
    {
        name: "Grilled Mushrooms",
        description: "Baby portobello mushrooms, grilled until golden for extra taste and body."
    },
    {
        name: "Jalapeño Peppers",
        description: "Fresh, hand-chopped jalapeño peppers for the spiciest bite."
    },
    {
        name: "Green Peppers",
        description: "A row of fresh, thinly sliced green peppers lining the bottom bun."
    },
    {
        name: "Relish",
        description: "Sweet and sour relish. Always delish."
    },
    {
        name: "Ketchup",
        description: "Top things off with smooth and sweet Heinz ketchup."
    },
    {
        name: "Mayonnaise",
        description: "A thick smooth layer of mayonnaise, always evenly spread."
    }
];

const sidesAndDrinks = [
    {
        name: "Regular Fries",
        description: "Crispy, golden strips of potato with a fluffy interior, perfectly seasoned and irresistibly satisfying with every bite.",
        price: "+$4.50",
        image: regularFriesImg
    },
    {
        name: "Bussin' Fries",
        description: "Golden, crispy fries piled high with melted cheese, crispy bacon bits, green onions, and dizzled with sour cream.",
        price: "+$6.50",
        image: loadedFriesImg
    },
    {
        name: "Milkshakes",
        description: "Your choice of a creamy vanillia, chocolate or strawberry milkshake topped with whipcream and a fresh cherry.",
        price: "+$8.00",
        image: milkshakesImg
    },
    {
        name: "Soft Drinks",
        description: "Your choice of Coca-Cola, Ginger Ale, Dr. Pepper, Sprite, Root Beer, or Bottled Water",
        price: "+$3.00",
        image: softDrinksImg
    }
];