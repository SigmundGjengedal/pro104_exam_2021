const MenuModule = ( function (){

    const menuArray = [
        // 5 pizzas
        {
            menuNr: 1,
            itemName: "Cheese and Tomato",
            itemType: "Pizza",
            largePrice: 169,
            mediumPrice: 139,
            allergies: "Wheat, soy, milk",
            amountSoldThisYear: 65,
            grossPrItem: 30,
            image: "pizzaLowRes.jpg"

        },
        {
            menuNr: 2,
            itemName: "Ham and Pepperoni",
            itemType: "Pizza",
            largePrice: 169,
            mediumPrice: 139,
            allergies: "Wheat, soy, milk",
            amountSoldThisYear: 56,
            grossPrItem: 28,
            image: "pizzaLowRes.jpg"
        },
        {
            menuNr: 3,
            itemName: "Ham and Mushroom",
            itemType: "Pizza",
            largePrice: 169,
            mediumPrice: 139,
            allergies: "Wheat, soy, milk",
            amountSoldThisYear: 80,
            grossPrItem: 40,
            image: "pizzaLowRes.jpg"

        },
        {
            menuNr: 4,
            itemName: "The Tropical",
            itemType: "Pizza",
            largePrice: 169,
            mediumPrice: 139,
            allergies: "Wheat, soy, milk",
            amountSoldThisYear: 68,
            grossPrItem: 21,
            image: "pizzaLowRes.jpg"

        },
        {
            menuNr: 5,
            itemName: "Spicy Chicken",
            itemType: "Pizza",
            largePrice: 169,
            mediumPrice: 139,
            allergies: "Whete, soy, milk, selleri, mustard",
            amountSoldThisYear: 70,
            grossPrItem: 28,
            image: "pizzaLowRes.jpg"

        },
        //5 Beverages
        {
            menuNr: 6,
            itemName: "Coka Cola",
            itemType: "Beverage",
            largePrice: 49,
            mediumPrice: 39,
            amountSoldThisYear: 60,
            grossPrItem: 25,
            image: "drinkLowRes.jpeg"
        },
        {
            menuNr: 7,
            itemName: "Sprite",
            itemType: "Beverage",
            largePrice: 49,
            mediumPrice: 39,
            amountSoldThisYear: 82,
            grossPrItem: 25,
            image: "drinkLowRes.jpeg"
        },
        {
            menuNr: 8,
            itemName: "Bubblywater",
            itemType: "Beverage",
            largePrice: 39,
            mediumPrice: 29,
            amountSoldThisYear: 62,
            grossPrItem: 25,
            image: "drinkLowRes.jpeg"
        },
        {
            menuNr: 9,
            itemName: "Carlsberg",
            itemType: "Beverage",
            largePrice: 99,
            mediumPrice: 89,
            amountSoldThisYear: 45,
            grossPrItem: 34,
            image: "drinkLowRes.jpeg"
        },
        {
            menuNr: 10,
            itemName: "Heineken",
            itemType: "Beverage",
            largePrice: 99,
            mediumPrice: 89,
            amountSoldThisYear: 39,
            grossPrItem: 39,
            image: "drinkLowRes.jpeg"
        },
        //5 Desserts
        {
            menuNr: 11,
            itemName: "Chocolate Milkshake",
            itemType: "Pizza",
            price: 79,
            allergies: "Milk",
            amountSoldThisYear: 15,
            grossPrItem: 14,
            image: "pizzaLowRes.jpg"
        },
        {
            menuNr: 12,
            itemName: "Apple Cake",
            itemType: "Pizza",
            price: 95,
            allergies: "Wheat, milk, egg, soy, almond",
            amountSoldThisYear: 24,
            grossPrItem: 17,
            image: "pizzaLowRes.jpg"
        },
        {
            menuNr: 13,
            itemName: "Brownie",
            itemType: "Beverage",
            price: 49,
            allergies: "Cashew",
            amountSoldThisYear: 34,
            grossPrItem: 19,
            image: "drinkLowRes.jpeg"
        },
        {
            menuNr: 14,
            itemName: "Espresso",
            itemType: "Beverage",
            price: 39,
            allergies: "",
            amountSoldThisYear: 47,
            grossPrItem: 12,
            image: "drinkLowRes.jpeg"
        },
        {
            menuNr: 15,
            itemName: "Bananasplit",
            itemType: "Beverage",
            price: 89,
            allergies: "Milk",
            amountSoldThisYear: 112,
            grossPrItem: 40,
            image: "drinkLowRes.jpeg"
        }
        
    ]

    const getAll = () => menuArray;

    const getPizza =() => menuArray.filter(e => e.itemType === "Pizza");
    const getDrinks =() => menuArray.filter(e => e.itemType === "Beverage");
    

    return {getAll, getPizza, getDrinks}

}())

export default MenuModule