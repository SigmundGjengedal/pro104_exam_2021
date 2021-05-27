import MenuModule from '../Modules/MenuModule.js'
//Hente variabler som er statiske på siden.
const navbarFood = document.querySelector(".navbar_food");
let mainContent = document.querySelector(".main_content");
let editable = false;
let food = MenuModule.getAll();


//Trigge funksjonene som genererer innhold
navbarFood.addEventListener("click", function (){
    generateLayout();
    addPizza();
    addDrinks();
    addReserve();
    addListeners();
})
//Genererer layouten på siden med flexboxer
function generateLayout (){
    mainContent.innerHTML = `
    <div class="menu_page_container"> 
        <div class="food_container">
            <span class="food_title">FOOD</span>
        </div>      
        <div class="pizza_title">PIZZA</div>
        <div class="confirm_btn_container">
            <div class="confirm_btn_filled">
                <div class="confirm_btn_circle"></div>
            </div>
        <span class="confirm_btn_txt">EDIT MENU</span> 
        </div>
        <div class="diagram_icon_container">
            <div class="diagram_icon"></div>
        </div>
            <div class="bottom_container">
                <div class="pizza_container">           
                </div>
                
                <span class="drinks_title">DRINKS</span>
                <div class="drinks_container">
                </div>
                
                <div class="splitscreen_line_container">
                <div class="splitscreen_line"></div>
                </div>
                
                <span class="recipe_bank_title">RECIPE BANK</span>
                <div class="recipe_bank_container"></div>
            </div>
     </div>
    
    `;
    
}
function addPizza(){
    let pizzaContainer = document.querySelector(".pizza_container");
    const pizza = MenuModule.getPizza();
    for(var i = 0; i<5;i++)
    if(i>0){
        pizzaContainer.innerHTML += `
        <div class="pizza_type_1" data-status="default"data-type="${pizza[i].itemType} data-image="${pizza[i].image}"><img  src="../../Images/Menu/Food_and_drink/${pizza[i].image}"></div>
        `
    }
    pizzaContainer.innerHTML += `<div class="pizza_type_5 add_plus"></div>`;
}
function addDrinks(){
    const drinks = MenuModule.getDrinks();
    let drinksContainer = document.querySelector(".drinks_container")
    for(var i = 0; i<5;i++)
    if(i>0){
        drinksContainer.innerHTML +=
        `
        <div class="drink_type_1" data-type="${drinks[i].itemType}" data-status="default"><img   src="../../Images/Menu/Food_and_drink/${drinks[i].image}"></div>
        `
    }
    drinksContainer.innerHTML += `<div class="drink_type_5 add_plus"></div>`;
}
function addReserve(){
    for(var i = 14;i>9;i--){
        const reserveContainer = document.querySelector(".recipe_bank_container")
        reserveContainer.innerHTML += `
        <div class="recipe_1" data-type="${food[i].itemType}" data-image="${food[i].image}"><img src="../../Images/Menu/Food_and_drink/${food[i].image}"></div>
        `;
        
    }
}
function addListeners(){

    const drink5 = document.querySelector(".drink_type_5");
    const pizza5 = document.querySelector(".pizza_type_5");
    const recipeContainer = document.querySelector(".recipe_bank_container");
    const drinksContainer = document.querySelector(".drinks_container");
    const pizzaContainer = document.querySelector(".pizza_container");
    const analyticsBtn = document.querySelector(".diagram_icon_container");
    var isMenu = true;
    const pizzaTitle = document.querySelector(".pizza_title");
    
    document.querySelectorAll(".drink_type_1, .pizza_type_1, .recipe_1").forEach(item => item.addEventListener("click", function (e){
        if(editable){

            if(e.currentTarget.classList.contains("recipe_1") && e.currentTarget.dataset.status === "default" && e.currentTarget.classList.contains("drink_type_1") ){
            }

            if(e.currentTarget.dataset.status === "default" && e.currentTarget.classList.contains("drink_type_1")){
                this.addEventListener("click", function(){
                    drinksContainer.prepend(this)

                })
                recipeContainer.appendChild(this);
                this.classList.add("recipe_1");
            }else if(e.currentTarget.dataset.status === "default" && e.currentTarget.classList.contains("pizza_type_1")){
                this.addEventListener("click", function(){
                    pizzaContainer.prepend(this)

                })
                recipeContainer.appendChild(this);
                this.classList.add("recipe_1");
            }

            if(e.currentTarget.dataset.type === "Beverage" && e.currentTarget.dataset.status != "default"){
                drink5.innerHTML = 
                `<img src="../../Images/Menu/Food_and_drink/${e.currentTarget.dataset.image}">`;
                
                drink5.style.border = "none";

                drink5.addEventListener("click",() => {
                drink5.innerHTML ="";
                drink5.style.border = "5px dashed #D4D4D4"
            })

            } else if (e.currentTarget.dataset.type === "Pizza"){
                // pizzaContainer.appendChild
                pizza5.innerHTML = 
                `<img src="../../Images/Menu/Food_and_drink/${e.currentTarget.dataset.image}">`;
                pizza5.style.border = "none";
            
                pizza5.addEventListener("click",() => {
                    pizza5.innerHTML ="";
                    pizza5.style.border = "5px dashed #D4D4D4";
                    this.innerHTML = `<img src="../../Images/Menu/Food_and_drink/${e.currentTarget.dataset.image}">`;
            })
        }
        
        
    }   
    }))

    const menuBtnCircle = document.querySelector(".confirm_btn_circle");
    
    
    
    menuBtnCircle.addEventListener("click", function(){
        const editText = document.querySelector(".confirm_btn_txt");
        menuBtnCircle.classList.toggle("confirm_btn_circle_edit")
        editable = editable ? false : true;
        if(!editable){
            editText.innerText = "EDIT MENU";
        }else
        editText.innerText = "CONFIRM MENU"
    })



    
    analyticsBtn.addEventListener("click", function () {
        const bottomContainer =  document.querySelector(".bottom_container");
        
    if(!isMenu){
        document.querySelector(".confirm_btn_container").style.visibility = "visible";
        pizzaTitle.innerHTML = "PIZZA";
        isMenu = true;
        
        generateLayout();
        addPizza();
        addDrinks();
        addReserve();
        addListeners();     
    }
    else if(isMenu){
        document.querySelector(".confirm_btn_container").style.visibility = "hidden";
        document.querySelector(".pizza_title").innerHTML = "ANALYTICS";
        isMenu = false;
        bottomContainer.innerHTML = `
        <div class="analytics_top"></div>
        <table>
            <caption>
    
            </caption>
            <thead>
                <tr>
                    <th scope="col">Restaurant</th>
                    <th scope="col">Product Type</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Gross Profit</th>
                    <th scope="col">Units Sold</th>
                    <th scope="col">Select</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Grunerløkka</th>
                    <td>Pizza</td>
                    <td>Margarita</td>
                    <td><span>-</span><input class="analytics_input" type="text" value="149.00" ><span>+</span></td>
                    <td>10.543</td>
                    <td>42</td>
                    <td><input type="checkbox"></td>
                </tr>
                <tr>
                    <th scope="row">Grunerløkka</th>
                    <td>Pizza</td>
                    <td>Margarita</td>
                    <td><span>-</span><input class="analytics_input" type="text" value="149.00" ><span>+</span></td>
                    <td>10.543</td>
                    <td>42</td>
                    <td><input type="checkbox"></td>
                </tr>
                <tr>
                    <th scope="row">Grunerløkka</th>
                    <td>Pizza</td>
                    <td>Margarita</td>
                    <td><span>-</span><input class="analytics_input" type="text" value="149.00" ><span>+</span></td>
                    <td>10.543</td>
                    <td>42</td>
                    <td><input type="checkbox"></td>
                </tr>
                <tr>
                    <th scope="row">Grunerløkka</th>
                    <td>Pizza</td>
                    <td>Margarita</td>
                    <td><span>-</span><input class="analytics_input" type="text" value="149.00" ><span>+</span></td>
                    <td>10.543</td>
                    <td>42</td>
                    <td><input type="checkbox"></td>
                </tr>
                <tr>
                    <th scope="row">Grunerløkka</th>
                    <td>Pizza</td>
                    <td>Margarita</td>
                    <td><span>-</span><input class="analytics_input" type="text" value="149.00" ><span>+</span></td>
                    <td>10.543</td>
                    <td>42</td>
                    <td><input type="checkbox"></td>
                </tr>
                <tr>
                    <th scope="row">Grunerløkka</th>
                    <td>Pizza</td>
                    <td>Margarita</td>
                    <td><span>-</span><input class="analytics_input" type="text" value="149.00" ><span>+</span></td>
                    <td>10.543</td>
                    <td>42</td>
                    <td><input type="checkbox"></td>
                </tr>
                <tr>
                    <th scope="row">Grunerløkka</th>
                    <td>Pizza</td>
                    <td>Margarita</td>
                    <td><span>-</span><input class="analytics_input" type="text" value="149.00" ><span>+</span></td>
                    <td>10.543</td>
                    <td>42</td>
                    <td><input type="checkbox"></td>
                </tr>
                <tr>
                    <th scope="row">Grunerløkka</th>
                    <td>Pizza</td>
                    <td>Margarita</td>
                    <td><span>-</span><input class="analytics_input" type="text" value="149.00" ><span>+</span></td>
                    <td>10.543</td>
                    <td>42</td>
                    <td><input type="checkbox"></td>
                </tr>
                <tr>
                    <th scope="row">Grunerløkka</th>
                    <td>Pizza</td>
                    <td>Margarita</td>
                    <td><span>-</span><input class="analytics_input" type="text" value="149.00" ><span>+</span></td>
                    <td>10.543</td>
                    <td>42</td>
                    <td><input type="checkbox"></td>
                </tr>
                <tr>
                    <th scope="row">Grunerløkka</th>
                    <td>Pizza</td>
                    <td>Margarita</td>
                    <td><span>-</span><input class="analytics_input" type="text" value="149.00" ><span>+</span></td>
                    <td>10.543</td>
                    <td>42</td>
                    <td><input type="checkbox"></td>
                </tr>
                <tr>
                    <th scope="row">Grunerløkka</th>
                    <td>Pizza</td>
                    <td>Margarita</td>
                    <td><span>-</span><input class="analytics_input" type="text" value="149.00" ><span>+</span></td>
                    <td>10.543</td>
                    <td>42</td>
                    <td><input type="checkbox"></td>
                </tr>
                <tr>
                    <th scope="row">Grunerløkka</th>
                    <td>Pizza</td>
                    <td>Margarita</td>
                    <td><span>-</span><input class="analytics_input" type="text" value="149.00" ><span>+</span></td>
                    <td>10.543</td>
                    <td>42</td>
                    <td><input type="checkbox"></td>
                </tr>
                <tr>
                    <th scope="row">Grunerløkka</th>
                    <td>Pizza</td>
                    <td>Margarita</td>
                    <td><span>-</span><input class="analytics_input" type="text" value="149.00" ><span>+</span></td>
                    <td>10.543</td>
                    <td>42</td>
                    <td><input type="checkbox"></td>
                </tr>
                <tr>
                    <th scope="row">Grunerløkka</th>
                    <td>Pizza</td>
                    <td>Margarita</td>
                    <td><span>-</span><input class="analytics_input" type="text" value="149.00" ><span>+</span></td>
                    <td>10.543</td>
                    <td>42</td>
                    <td><input type="checkbox"></td>
                </tr>
                <tr>
                    <th scope="row">Grunerløkka</th>
                    <td>Pizza</td>
                    <td>Margarita</td>
                    <td><span>-</span><input class="analytics_input" type="text" value="149.00" ><span>+</span></td>
                    <td>10.543</td>
                    <td>42</td>
                    <td><input type="checkbox"></td>
                </tr>
                <tr>
                    <th scope="row">Grunerløkka</th>
                    <td>Pizza</td>
                    <td>Margarita</td>
                    <td><span>-</span><input class="analytics_input" type="text" value="149.00" ><span>+</span></td>
                    <td>10.543</td>
                    <td>42</td>
                    <td><input type="checkbox"></td>
                </tr>
            </tbody>
        </table>
        <div class="bottom_div">
            <div class="bottom_text_div is_flex">
                <div>Average Price</div>
                <div>Average Gross Profit</div>
                <div>Average Unites Sold</div>
            </div>
            <div class="bottom_numbers_div is_flex">
                <div>165.45</div>
                <div>18.469</div>
                <div>678.56</div>
            </div>
            <div class="bottom_button_container>
                <div class="bottom_button>SUBMIT CHANGES</div>
            </div>
        </div>
        `;
    }
    }
    )
}















// function showAnalytics(){
//     let isMenu = true;
//     const pizzaTitle = document.querySelector(".pizza_title");
//     if(isMenu){
//         const bottomContainer =  document.querySelector(".bottom_container");
//         document.querySelector(".confirm_btn_container").style.display = "none";
//         document.querySelector(".pizza_title").innerHTML = "ANALYTICS";
//         bottomContainer.innerHTML = `
//         `;
//         isMenu = false;
//         console.log(isMenu)
//     }else if(!isMenu){
//         isMenu = true;
//         document.querySelector(".confirm_btn_container").style.display = "visible";
//         pizzaTitle.innerHTML = "PIZZA";
//         console.log(isMenu)
//     }
// }


