import MenuModule from '../Modules/MenuModule.js'

let mainContent = document.querySelector(".main_content");
var food = MenuModule.getAll();


function generateFood (){
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
                    <div class="recipe_1"></div>
                    <div class="recipe_2"></div>
                    <div class="recipe_3"></div>
                    <div class="recipe_4"></div>
                    <div class="recipe_5"></div>
            </div>

        </div>

`;
}

generateFood();

function addPizza(){
    const pizza = MenuModule.getPizza();
    for(var i = 0; i<5;i++)
    if(i>0){
    document.querySelector(".pizza_container").innerHTML +=
    `
    <div class="pizza_type_1"><img src="../../Images/Menu/Food_and_drink/${pizza[i].image}"></div>
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
    <div class="drink_type_1"><img src="../../Images/Menu/Food_and_drink/${drinks[i].image}"></div>
    `
}
    document.querySelector(".drinks_container").innerHTML += `<div class="drink_type_5"></div>`;
}



addPizza();
addDrinks();