import MenuModule from '../Modules/MenuModule.js'
const foodGenerator = (function (){



let mainContent = document.querySelector(".main_content");
let food = MenuModule.getAll();



function generateLayout (){

mainContent.innerHTML = `
                

        <div class="menu_page_container">


            <div class="food_container">
                <span class="food_title">FOOD</span>
            </div>      
            <div class="pizza_title">PIZZA</div>
            <div class="confirm_btn_container">
                <div class="confirm_btn">
                    <div class="confirm_btn_filled"></div>
                        <div class="confirm_btn_circle"></div>
                    <span class="confirm_btn_txt">CONFIRM MENU</span>
                </div>
            </div>
            <div class="diagram_icon_container">
                <div class="diagram_icon"></div>
            </div>

            <div class="pizza_container">           
            </div>

            <span class="drinks_title">DRINKS</span>
            <div class="drinks_container">
            </div>

            <div class="splitscreen_line_container">
                <div class="splitscreen_line"></div>
            </div>

            <span class="recipe_bank_title">RECIPE BANK</span>
            <div class="recipe_bank_container">
            </div>

        </div>

`;
}
let pizzaContainer = document.querySelector(".pizza_container");



function addPizza(){
    const pizza = MenuModule.getPizza();
    for(var i = 0; i<5;i++)
    if(i>0){
    document.querySelector(".pizza_container").innerHTML +=
    // pizzaContainer.innerHTML +=

    `
    <div class="pizza_type_1"><img data-image="${pizza[i].image}" src="../../Images/Menu/Food_and_drink/${pizza[i].image}"></div>
    `
}
    document.querySelector(".pizza_container").innerHTML += `<div class="pizza_type_5"></div>`;
}


function addDrinks(){
    const drinks = MenuModule.getDrinks();
    for(var i = 0; i<5;i++)
    if(i>0){
    document.querySelector(".drinks_container").innerHTML +=
    `
    <div class="drink_type_1"><img data-image"${drinks[i].image}" src="../../Images/Menu/Food_and_drink/${drinks[i].image}"></div>
    `
}
    document.querySelector(".drinks_container").innerHTML += `<div class="drink_type_5"></div>`;
}

function addReserve(){
    for(var i = 14;i>9;i--){
        document.querySelector(".recipe_bank_container").innerHTML += `
        <div class="recipe_1"data-type="${food[i].itemType}" data-image="${food[i].image}"><img draggable="true" src="../../Images/Menu/Food_and_drink/${food[i].image}"></div>
        `;

    }
}
function clearDrink(){
    alert()
    document.querySelector(".drink_type_5").innerHTML = "";
}
function addListeners(){
document.querySelectorAll(".drink_type_1, .pizza_type_1, .recipe_1").forEach(item => item.addEventListener("click", function (e){
    if(e.currentTarget.dataset.type === "Beverage"){
        document.querySelector(".drink_type_5").innerHTML = 
        `<img src="../../Images/Menu/Food_and_drink/${e.currentTarget.dataset.image}">`;

        document.querySelector(".drink_type_5").style.border = "none";
        document.querySelector(".drink_type_5").addEventListener("click",() => {
            document.querySelector(".drink_type_5").innerHTML ="";
            document.querySelector(".drink_type_5").style.border = "5px dashed #D4D4D4"
        })
    } else if (e.currentTarget.dataset.type === "Pizza"){
        document.querySelector(".pizza_type_5").innerHTML = 
        `<img src="../../Images/Menu/Food_and_drink/${e.currentTarget.dataset.image}">`;
        document.querySelector(".pizza_type_5").style.border = "none";

        document.querySelector(".pizza_type_5").addEventListener("click",() => {
            document.querySelector(".pizza_type_5").innerHTML ="";
            document.querySelector(".pizza_type_5").style.border = "5px dashed #D4D4D4"
        })
    }

}))
}

return {addPizza, addDrinks, addReserve, generateLayout, addListeners}

}())
export default foodGenerator