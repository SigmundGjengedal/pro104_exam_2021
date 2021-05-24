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
                <div class="pizza_type_1"><img src="../../Images/Menu/Food_and_drink/${food[0].image}"></div>
                <div class="pizza_type_2"></div>
                <div class="pizza_type_3"></div>
                <div class="pizza_type_4"></div>
                <div class="pizza_type_5">
                    <div class="pizza_plus_icon"></div>
                </div>            
            </div>

            <span class="drinks_title">DRINKS</span>
            <div class="drinks_container">
                <div class="drink_type_1"></div>
                <div class="drink_type_2"></div>
                <div class="drink_type_3"></div>
                <div class="drink_type_4"></div>
                <div class="drink_type_5">
                    <div class="drinks_plus_icon"></div>
                </div>
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