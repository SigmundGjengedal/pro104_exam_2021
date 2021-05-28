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
        <div class="analytics_top">
            <div class="restaurant_text analytics_flex_item">SELECT RESTAURANT</div>
            <div class="select_wrapper_restaurants analytics_flex_item">
                <select class="restaurant_input">
                    <option value="All">All</option>
                    <option value="Grunerløkka">Grunerløkka</option>
                    <option value="Karl Johan">Karl Johan</option>
                    <option value="Nydalen">Nydalen</option>
                    <option value="Bjørvika">Bjørvika</option>
                </select>
            </div>
            <div class="categories_text analytics_flex_item">CATEGORIES</div>
            <div class="select_wrapper_categories analytics_flex_item">
                <select class="categories_input">
                    <option value="All">All</option>
                    <option value="Pizza">Pizza</option>
                    <option value="Drinks">Drinks</option>
                </select>
            </div>
            <div class="search_text analytics_flex_item">SEARCH BY NAME</div>
            <div class="search_input_wrapper analytics_flex_item">
                <div class="search_icon">
                </div>
                <input class="search_input" type="text" placeholder="SEARCH PRODUCTS">
            </div>
        </div>
        <div class="table_wrapper">
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
            <tbody class="table_body">
            <!-- Inserte rows med javascript -->
                
                
            </tbody>
        </table>
        </div>
        <div class="bottom_div">
            <div class="bottom_text_div is_flex">
                <div>Average Price</div>
                <div>Average Gross Profit</div>
                <div>Average Unites Sold</div>
            </div>
            <div class="bottom_numbers_div is_flex">
                <div class="average_price">165.45</div>
                <div class="average_gross">18.469</div>
                <div class="units_sold">678.56</div>
            </div>
            <div class="bottom_button_container>
                <div class="bottom_button>SUBMIT CHANGES</div>
            </div>
        </div>
        `;
        addRows();
        document.querySelector(".restaurant_input").addEventListener("change", showByRestaurant)
    }
    }


    )}

    function showByRestaurant(){
        const tableBody = document.querySelector(".table_body");
        tableBody.innerHTML = "";
        let choice = document.querySelector(".restaurant_input").value;
        if(choice === "All"){
            addRows();
        }else{
        const restArray = MenuModule.getByRestaurant(choice);
        restArray.forEach(element => 
            tableBody.innerHTML += `
            <tr>
            <th scope="row">${element.restaurant}</th>
            <td>${element.type}</td>
            <td>${element.name}</td>
            <td><span>-</span><input class="analytics_input" type="text" value="${element.price}" ><span>+</span></td>
            <td>${element.grossProfit}</td>
            <td>${element.unitsSold}</td>
            <td><input type="checkbox" checked="true"></td>
        </tr>`)
        calculateBottom(restArray)
        }
    }

    function addRows(){
        const tableBody = document.querySelector(".table_body");
        const itemsArray = MenuModule.getItems();
        itemsArray.forEach(element => 
            tableBody.innerHTML += `
            <tr>
            <th scope="row">${element.restaurant}</th>
            <td>${element.type}</td>
            <td>${element.name}</td>
            <td><span>-</span><input class="analytics_input" type="text" value="${element.price}" ><span>+</span></td>
            <td>${element.grossProfit}</td>
            <td>${element.unitsSold}</td>
            <td><input type="checkbox" checked="true"></td>
        </tr>
            `);
            calculateBottom(itemsArray)
            
            
            
    }//Slutt på addRows

    function calculateBottom(array){
        let averagePrice = 0;
            for(var i = 0;i<array.length;i++){
                averagePrice += array[i].price;
            }
            averagePrice = averagePrice / array.length
            document.querySelector(".average_price").innerHTML = averagePrice;
            let averageGross = 0;
            for(var i = 0;i<array.length;i++){
                averageGross += array[i].grossProfit;
            }
            averageGross = averageGross / array.length;
            document.querySelector(".average_gross").innerText = averageGross;
            let sold = 0;
            for(var i = 0;i<array.length;i++){
                sold += array[i].unitsSold;
            }
            sold = sold / array.length;
            document.querySelector(".units_sold").innerText = sold;
    } //slutt på calculateBottom





