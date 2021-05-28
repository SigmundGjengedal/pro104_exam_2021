import SalesModule from './Modules/SalesModule.js';

const resultText = document.querySelector(".result-text");
const chosenDiv = document.querySelector("#selected");

/* henter buttons*/

const restaurant_choice = document.querySelector(".restaurant-choice");
const periode_choice = document.querySelector(".period-choice");
const category_choice = document.querySelector(".category-choice");

const calculate_Btn = document.querySelector(".calculate-btn");


    let restaurant = "";
    let period = "";
    let category = "";
    /* Henter verdiene fra knappene */

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



/*****************************************  prøving og feiling under her:   enkel test med kun med ett parameter *****************************************/



