import SalesModule from './Modules/SalesModule.js';

/*Henter main content div fra home */
const mainContent = document.querySelector(".main_content");

const salesNavButton = document.querySelector('.navbar_sales');

salesNavButton.addEventListener('click', function(){

  let mainTextHome = `

  <div class="salesPage_Container">

    <header>
        <h3 id="Sales_Heading">SALES</h3>  
        <p id="Heading-p">Please select Restaurant, Period and Category</p>
    </header>

    <!-- navn på kolonner-->
    <div class="labels-choices">
        <span class ="choice restaurant">Restaurant</span>
        <span class ="choice period">Period </span>
        <span class ="choice category">Category</span>
    </div>

    <!-- div som skal fylles med valg-->

    <section class="flex-columns">
        <div class="row">

            <div class="column">
                <div class="column-1">
                    <h4>Chosen</h4>
                    <div id = "selected" class="data_container">
                          
                    </div>
                    <button class="button calculate-btn">Calculate</button>
                </div>
            </div>

            <!-- brukervalg, til høyre på siden-->
            
                <div class="select-columns restaurant-choice">
                    <div class="data_container">
                        <button id="Bjørvika" class="button restaurant-button">BJØRVIKA</button>
                        <button id="Nydalen" class="button restaurant-button">NYDALEN</button>
                        <button id="Grunerløkka" class="button restaurant-button">GRUNERLØKKA</button>
                        <button id="Karl-Johan" class="button restaurant-button">KARL JOHAN</button>
                    </div>
                </div>
            
                <div class="select-columns period-choice">
                    <div class="data_container">
                        <button id="this-year" class="button">THIS YEAR</button>
                        <button id="last-year" class="button">LAST YEAR</button>
                        <button id="last-month" class="button">LAST MONTH</button>
                        <button id="last-week" class="button">LAST WEEK</button>
                    </div>
                </div>

                <div class="select-columns category-choice">
                    <div class="data_container">
                        <button id="all" class="button">ALL</button>
                        <button id="pizza" class="button">PIZZA</button>
                        <button id="drinks" class="button">DRINKS</button>
                        <button id="salads" class="button">SALADS</button>
                    </div>
                </div>
            
        </div>
    </section>
        

           
            <section class="result-section">

                    <div class="sales_diagram_1">
                        <div class="sales_diagram_1_filled"></div>
                    </div>

                      <!-- tallet må tilpasses hva som vises, mnd, år, osv -->
                      <div class="diagram_numbers_container">
                        <span class="sales_number">0</span>
                        <span class="sales_number">250K</span>
                        <span class="sales_number">500K</span>
                        <span class="sales_number">750K</span>
                        <span class="sales_number">1000k</span>
                      </div>

                      <!-- tall/ text må må tilpasses hva som vises, mnd, år, osv -->
                      <div class="result-text">
                        
                      </div>         
            </section>
  </div>

`;

  mainContent.innerHTML = mainTextHome;
  /* henter buttons*/
  const restaurant_choice = document.querySelector(".restaurant-choice");
  const periode_choice = document.querySelector(".period-choice");
  const category_choice = document.querySelector(".category-choice");
  const calculate_Btn = document.querySelector(".calculate-btn");

  /* henter diverse elementer*/
const resultText = document.querySelector(".result-text");
const chosenDiv = document.querySelector("#selected");
const resultDiv = document.querySelector('.result-section');

resultDiv.style.display = 'flex';


  restaurant_choice.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
      return;
    }
    restaurant = event.target.id;
    chosenDiv.innerHTML +=`
    <button class="buttonChosen">${restaurant}</button>
    `;

    restaurant_choice.style.opacity = 0.5;
    console.log(restaurant);
})



periode_choice.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
      return;
    }
    period = event.target.id;
    chosenDiv.innerHTML +=`
    <button class="buttonChosen">${period}</button>
    `;
    periode_choice.style.opacity = 0.5;
    console.log(period);
})
        
category_choice.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
      return;
    }
    category = event.target.id;

    chosenDiv.innerHTML +=`
    <button class="buttonChosen">${category}</button>
    `;
    category_choice.style.opacity = 0.5;
    console.log(category);
})


// bruker verdiene hentet fra knappene når man trykker calculate!
calculate_Btn.addEventListener('click', (event)=> {

    /* kaller funksjonen med verdier fra knapper.*/
    let result = SalesModule.getRevenueByRestaurantAndPeriodAndCategory(restaurant,period,category);

    /*printer*/
    resultText.innerHTML = `
    <p> <span class = "result-text-span">${period}'s total </span> for <span class = "result-text-span">${category}</span>  at <span class = "result-text-span">${restaurant}</span>  was <span class="result_number"> ${result}</span> NOK</p>
    `;
    /* fyller diagram*/

    restaurant = "";
    const fillDiagram = function(){
        document.querySelector(".diagram_1_filled").style.width = result/10000+'%';
    }
    
    setTimeout(fillDiagram,100);

    /* resetter styling på siden*/

    chosenDiv.innerHTML = "";
    category_choice.style.opacity = 1;
    restaurant_choice.style.opacity = 1;
    periode_choice.style.opacity = 1;
})

  

})

/*Genererer start-innhold på siden*/





/********************* Funksjonalitet på siden *********************************/

    let restaurant = "";
    let period = "";
    let category = "";
    /* Henter verdiene fra knappene via bubbling */


    restaurant_choice.addEventListener('click', (event) => {
        const isButton = event.target.nodeName === 'BUTTON';
        if (!isButton) {
          return;
        }
        restaurant = event.target.id;
        chosenDiv.innerHTML +=`
        <button class="buttonChosen">${restaurant}</button>
        `;

        restaurant_choice.style.opacity = 0.5;
        console.log(restaurant);
    })



    periode_choice.addEventListener('click', (event) => {
        const isButton = event.target.nodeName === 'BUTTON';
        if (!isButton) {
          return;
        }
        period = event.target.id;
        chosenDiv.innerHTML +=`
        <button class="buttonChosen">${period}</button>
        `;
        periode_choice.style.opacity = 0.5;
        console.log(period);
    })
            
    category_choice.addEventListener('click', (event) => {
        const isButton = event.target.nodeName === 'BUTTON';
        if (!isButton) {
          return;
        }
        category = event.target.id;

        chosenDiv.innerHTML +=`
        <button class="buttonChosen">${category}</button>
        `;
        category_choice.style.opacity = 0.5;
        console.log(category);
    })


    // bruker verdiene hentet fra knappene når man trykker calculate!
    calculate_Btn.addEventListener('click', (event)=> {

        /* kaller funksjonen med verdier fra knapper.*/
        let result = SalesModule.getRevenueByRestaurantAndPeriodAndCategory(restaurant,period,category);
    
        /*printer*/
        resultText.innerHTML = `
        <p> <span class = "result-text-span">${period}'s total </span> for <span class = "result-text-span">${category}</span>  at <span class = "result-text-span">${restaurant}</span>  was <span class="result_number"> ${result}</span> NOK</p>
        `;
        /* fyller diagram*/

        restaurant = "";
        const fillDiagram = function(){
            document.querySelector(".diagram_1_filled").style.width = result/10000+'%';
        }
        
        setTimeout(fillDiagram,100);

        /* resetter styling på siden*/

        chosenDiv.innerHTML = "";
        category_choice.style.opacity = 1;
        restaurant_choice.style.opacity = 1;
        periode_choice.style.opacity = 1;
    })





