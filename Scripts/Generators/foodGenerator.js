import MenuModule from '../Modules/MenuModule.js'
//Hente variabler som er statiske på siden.
const navbarFood = document.querySelector(".navbar_food");
let mainContent = document.querySelector(".main_content");
let editable = false;
let isMenu = true;
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
    
    const editText = document.querySelector(".confirm_btn_txt");
    

    menuBtnCircle.addEventListener("click", function(){
        menuBtnCircle.classList.toggle("confirm_btn_circle_edit")
        editable = editable ? false : true;
        if(!editable){
            editText.innerText = "EDIT MENU";
        }else
        editText.innerText = "CONFIRM MENU"
    })

    
    analyticsBtn.addEventListener("click", showAnalytics
    )
}



function showAnalytics(){
    if(isMenu){
        const bottomContainer =  document.querySelector(".bottom_container");
        document.querySelector(".confirm_btn_container").style.display = "none";
        document.querySelector(".pizza_container").innerText = "FOOD ANALYTICS";
        bottomContainer.innerHTML = `
        
        `
        console.log("true")
        isMenu = false;
;
    }
        document.querySelector(".confirm_btn_container").style.display = "visible";
        document.querySelector(".pizza_container").innerText = "PIZZA";
        console.log("false")
    
}


