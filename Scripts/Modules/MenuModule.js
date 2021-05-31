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
            image: "pizza1.jpg"
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
            image: "pizza2.jpg"

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
            image: "pizza3.jpg"

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
            image: "pizza4.png"

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
            image: "drink9.png"
        },
        {
            menuNr: 8,
            itemName: "Bubblywater",
            itemType: "Beverage",
            largePrice: 39,
            mediumPrice: 29,
            amountSoldThisYear: 62,
            grossPrItem: 25,
            image: "drink2.jpg"
        },
        {
            menuNr: 9,
            itemName: "Carlsberg",
            itemType: "Beverage",
            largePrice: 99,
            mediumPrice: 89,
            amountSoldThisYear: 45,
            grossPrItem: 34,
            image: "drink3.jpg"
        },
        {
            menuNr: 10,
            itemName: "Heineken",
            itemType: "Beverage",
            largePrice: 99,
            mediumPrice: 89,
            amountSoldThisYear: 39,
            grossPrItem: 39,
            image: "drink4.jpg"
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
            image: "pizza5.png"
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
            image: "drink7.png"
        },
        {
            menuNr: 14,
            itemName: "Espresso",
            itemType: "Beverage",
            price: 39,
            allergies: "",
            amountSoldThisYear: 47,
            grossPrItem: 12,
            image: "drink8.jpg"
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


    const itemsArray = [
        {
            restaurant: "Grunerløkka",
            type: "Pizza",
            name: "Cheeze and Tomato",
            price: 149,
            grossProfit: 30,
            unitsSold: 498,
        
        },
        {
            restaurant: "Karl Johan",
            type: "Pizza",
            name: "Cheeze and Tomato",
            price: 149,
            grossProfit: 30,
            unitsSold: 349,
        
        },
        {
            restaurant: "Nydalen",
            type: "Pizza",
            name: "Cheeze and Tomato",
            price: 149,
            grossProfit: 30,
            unitsSold: 569,
        
        },
        {
            restaurant: "Bjørvika",
            type: "Pizza",
            name: "Cheeze and Tomato",
            price: 149,
            grossProfit: 30,
            unitsSold: 452,
        
        },
        {
            restaurant: "Grunerløkka",
            type: "Pizza",
            name: "Ham and Pepperoni",
            price: 159,
            grossProfit: 56,
            unitsSold: 498,
        },
        {
            restaurant: "Karl Johan",
            type: "Pizza",
            name: "Ham and Pepperoni",
            price: 159,
            grossProfit: 56,
            unitsSold: 498,
        },
        {
            restaurant: "Nydalen",
            type: "Pizza",
            name: "Ham and Pepperoni",
            price: 159,
            grossProfit: 56,
            unitsSold: 123,
        },
        {
            restaurant: "Bjørvika",
            type: "Pizza",
            name: "Ham and Pepperoni",
            price: 159,
            grossProfit: 56,
            unitsSold: 456,
        },
        {
            restaurant: "Grunerløkka",
            type: "Drinks",
            name: "Pepsi",
            price: 69,
            grossProfit: 23,
            unitsSold: 345,
        },
        {
            restaurant: "Karl Johan",
            type: "Drinks",
            name: "Pepsi",
            price: 69,
            grossProfit: 23,
            unitsSold: 356,
        },
        {
            restaurant: "Nydalen",
            type: "Drinks",
            name: "Pepsi",
            price: 69,
            grossProfit: 23,
            unitsSold: 432,
        },
        {
            restaurant: "Bjørvika",
            type: "Drinks",
            name: "Pepsi",
            price: 69,
            grossProfit: 23,
            unitsSold: 234,
        },
        {
            restaurant: "Grunerløkka",
            type: "Drinks",
            name: "Beer",
            price: 99,
            grossProfit: 54,
            unitsSold: 654,
        },
        {
            restaurant: "Karl Johan",
            type: "Drinks",
            name: "Beer",
            price: 99,
            grossProfit: 23,
            unitsSold: 456,
        },
        {
            restaurant: "Nydalen",
            type: "Drinks",
            name: "Beer",
            price: 99,
            grossProfit: 23,
            unitsSold: 555,
        },
        {
            restaurant: "Bjørvika",
            type: "Drinks",
            name: "Beer",
            price: 69,
            grossProfit: 23,
            unitsSold: 445,
        },
        
    ]

    const getItems = () => itemsArray;
    const getAll = () => menuArray;

    const getPizzaItems =() => itemsArray.filter(e => e.type === "Pizza");
    const getDrinksItems =() => itemsArray.filter(e => e.type === "Beverage");
    const getPizza =() => menuArray.filter(e => e.itemType === "Pizza");
    const getDrinks =() => menuArray.filter(e => e.itemType === "Beverage");
    
    const getByRestaurant = function(name){
        return itemsArray.filter(e => e.restaurant === name)
    }
    const getByType = (type) => itemsArray.filter(e => e.type === type);

    const getByBoth = function(name, type){
        if (name === "All" && type === "All"){
            return itemsArray
        }else if(type === "All"){
            return itemsArray.filter(e => e.restaurant === name)
        }else if(name === "All"){
            return itemsArray.filter(e => e.type === type);
                }else {
        return itemsArray.filter(e => e.restaurant === name && e.type === type)
        }
    }

    return {getAll, getPizza, getDrinks, getItems, getByBoth, getByRestaurant,getByType, getPizzaItems, getDrinksItems}

}())

export default MenuModule