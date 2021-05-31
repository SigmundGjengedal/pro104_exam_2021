import SalesModule from './Modules/SalesModule.js';

/******** Henter det vi trenger for å fylle main content div på home ******/
const mainContent = document.querySelector(".main_content");
const salesNavButton = document.querySelector('.navbar_sales');

/********* variabler på siden *****************/

let restaurant = "";
let period = "";
let category = "";




/********* Generer innhold på mainPage *************/
salesNavButton.addEventListener('click', function(){

  let mainTextHome = `

  <div class="salesPage_Container">

    <header>
        <h3 id="Sales_Heading">SALES</h3>
        <p id="Heading-p">SELECT RESTAURANT, PERIOD & CATEGORY</p>
    </header>

    <!-- navn på kolonner-->
    <div class="labels-choices">
        <span class ="choice restaurant">RESTAURANT</span>
        <span class ="choice period">PERIOD</span>
        <span class ="choice category">CATEGORY</span>
    </div>

    <!-- div som skal fylles med valg-->

    <section class="flex-columns">
        <div class="row">

            <div class="column">
                <div class="column-1">
                    <h4>Chosen</h4>
                    <div id = "selected" class="data_container">

                    </div>
                    <button class="calculate-btn">CALCULATE</button>
                </div>
            </div>

            <!-- brukervalg, til høyre på siden-->

                <div class="select-columns restaurant-choice">
                    <div class="data_container">
                        <button id="Bjørvika" class="button">BJØRVIKA</button>
                        <button id="Nydalen" class="button">NYDALEN</button>
                        <button id="Grunerløkka" class="button">GRUNERLØKKA</button>
                        <button id="Karl-Johan" class="button">KARL JOHAN</button>
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

                    <p class = "sales-statistics-text"> STATISTICS</p>
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


  /* event på wrapper til restaurant kolonne, lagrer id på valgte knapp i en variabel */
  restaurant_choice.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {// sjekker om det er en knapp, eventet er på hele diven.
      return;
    }
    restaurant = event.target.id;
    let restaurantUPPER = restaurant.toUpperCase();
    chosenDiv.innerHTML +=`
    <button class="buttonChosen">${restaurantUPPER}</button>
    `;

    /* Hindrer bruker i å gjøre flere valg */
    restaurant_choice.style.opacity = 0.5;
    document.querySelector('#Bjørvika').disabled = true;
    document.querySelector('#Nydalen').disabled = true;
    document.querySelector('#Grunerløkka').disabled = true;
    document.querySelector('#Karl-Johan').disabled = true;
    console.log(restaurant); // debugger tool

    // fjerner klasse som gir hoover effekt på valgte rader
    document.querySelector('#Bjørvika').classList.replace('button','dead-button');
    document.querySelector('#Nydalen').classList.replace('button','dead-button');
    document.querySelector('#Grunerløkka').classList.replace('button','dead-button');
    document.querySelector('#Karl-Johan').classList.replace('button','dead-button');

})


/* event på wrapper til periode kolonne, lagrer id på valgte knapp i en variabel */
periode_choice.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {// sjekker om det er en knapp, eventet er på hele restaurant diven.
      return;
    }
    period = event.target.id;
    let periodUPPER = period.toUpperCase();
    chosenDiv.innerHTML +=`
    <button class="buttonChosen">${periodUPPER}</button>
    `;
    /* Hindrer bruker i å gjøre flere valg */
    periode_choice.style.opacity = 0.5;
    document.querySelector('#this-year').disabled = true;
    document.querySelector('#last-year').disabled = true;
    document.querySelector('#last-month').disabled = true;
    document.querySelector('#last-week').disabled = true;

      // fjerner klasse som gir hoover effekt på valgte rader
      document.querySelector('#this-year').classList.replace('button','dead-button');
      document.querySelector('#last-year').classList.replace('button','dead-button');
      document.querySelector('#last-month').classList.replace('button','dead-button');
      document.querySelector('#last-week').classList.replace('button','dead-button');

    console.log(period); // debugger tool
})

/* event på wrapper til category kolonne, lagrer id på valgte knapp i en variabel */
category_choice.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) { // sjekker om det er en knapp, eventet er på hele category diven.
      return;
    }
    category = event.target.id;
    let categoryUPPER = category.toUpperCase();

    chosenDiv.innerHTML +=`
    <button class="buttonChosen">${categoryUPPER}</button>
    `;
      /* Hindrer bruker i å gjøre flere valg */
      category_choice.style.opacity = 0.5;
      document.querySelector('#all').disabled = true;
      document.querySelector('#pizza').disabled = true;
      document.querySelector('#drinks').disabled = true;
      document.querySelector('#salads').disabled = true;

       // fjerner klasse som gir hoover effekt på valgte rader
       document.querySelector('#all').classList.replace('button','dead-button');
       document.querySelector('#pizza').classList.replace('button','dead-button');
       document.querySelector('#drinks').classList.replace('button','dead-button');
       document.querySelector('#salads').classList.replace('button','dead-button');
      console.log(category);// debugger tool
})


// event på calculate button: Bruker id hentet fra knappene som argument når man trykker calculate!

calculate_Btn.addEventListener('click', (event)=> {

    /* Visst gyldig valg, så kaller vi funksjonen i modulen som henter riktige data derfra.*/
    let validChoice = true;

     if(restaurant == "" || period == "" || category == ""){
       alert('Please chose a restaurant, period, and a category!')
       validChoice = false;
       resultText.innerHTML = "";
       document.querySelector('.sales_diagram_1_filled').style.width = 0+'%';

     } 

     if(validChoice){
      let result = SalesModule.getRevenueByRestaurantAndPeriodAndCategory(restaurant,period,category);

      /*printer*/
      resultText.innerHTML = `
      <p> <span class = "result-text-span">${period}'s total </span> for <span class = "result-text-span">${category}</span>  at <span class = "result-text-span">${restaurant}</span>  was<span class="result_number"> ${result}</span> .-</p>
      `;
  
      /* fyller diagram*/
      restaurant = "";
      const fillDiagram = function(){
          document.querySelector('.sales_diagram_1_filled').style.width = result/10000+'%';
      }
  
      setTimeout(fillDiagram,100); // for at transitions skal fungere.
     }

    /* resetter variablene */

    restaurant = "";
    period = "";
    category = "";

    /* resetter styling på siden*/

    chosenDiv.innerHTML = "";
    category_choice.style.opacity = 1;
    restaurant_choice.style.opacity = 1;
    periode_choice.style.opacity = 1;

    // NB  : fikk ikke til å bruke disabled uten å gjøre det på en og en.

    document.querySelector('#Bjørvika').disabled = false;
    document.querySelector('#Nydalen').disabled = false;
    document.querySelector('#Grunerløkka').disabled = false;
    document.querySelector('#Karl-Johan').disabled = false;

    document.querySelector('#this-year').disabled = false;
    document.querySelector('#last-year').disabled = false;
    document.querySelector('#last-month').disabled = false;
    document.querySelector('#last-week').disabled = false;

    document.querySelector('#all').disabled = false;
    document.querySelector('#pizza').disabled = false;
    document.querySelector('#drinks').disabled = false;
    document.querySelector('#salads').disabled = false;

        // NB  : fikk ikke til å bruke classList uten å gjøre det på en og en.

    document.querySelector('#Bjørvika').classList.replace('dead-button','button');
    document.querySelector('#Nydalen').classList.replace('dead-button','button');
    document.querySelector('#Grunerløkka').classList.replace('dead-button','button');
    document.querySelector('#Karl-Johan').classList.replace('dead-button','button');

    document.querySelector('#this-year').classList.replace('dead-button','button');
    document.querySelector('#last-year').classList.replace('dead-button','button');
    document.querySelector('#last-month').classList.replace('dead-button','button');
    document.querySelector('#last-week').classList.replace('dead-button','button');

    document.querySelector('#all').classList.replace('dead-button','button');
    document.querySelector('#pizza').classList.replace('dead-button','button');
    document.querySelector('#drinks').classList.replace('dead-button','button');
    document.querySelector('#salads').classList.replace('dead-button','button');
})
})
