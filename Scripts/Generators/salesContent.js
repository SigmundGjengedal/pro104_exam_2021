import SalesModule from '../Modules/SalesModule.js';

const resultText = document.querySelector(".result-text");


/* henter buttons*/

const res_choice = document.querySelector(".restaurant-choice");
const periode_choice = document.querySelector(".period-choice");
const category_choice = document.querySelector(".category-choice");

const calculate_Btn = document.querySelector(".calculate-btn");


    let restaurant = "";
    let period = "";
    let category = "";
    /* Henter verdiene fra knappene */

    res_choice.addEventListener('click', (event) => {
        const isButton = event.target.nodeName === 'BUTTON';
        if (!isButton) {
          return;
        }
        restaurant = event.target.id;
        console.log(restaurant);
    })

    periode_choice.addEventListener('click', (event) => {
        const isButton = event.target.nodeName === 'BUTTON';
        if (!isButton) {
          return;
        }
        period = event.target.id;
        console.log(period);
    })
            
    category_choice.addEventListener('click', (event) => {
        const isButton = event.target.nodeName === 'BUTTON';
        if (!isButton) {
          return;
        }
        category = event.target.id;
        console.log(category);
    })


    // bruker verdiene hentet fra knappene når man trykker calculate!
    calculate_Btn.addEventListener('click', function() {

        /* kaller funksjonen med verdier fra knapper.*/
        let result = SalesModule.getRevenueByRestaurantAndPeriodAndCategory(restaurant,period,category);
    
        /*printer*/
        resultText.innerHTML = `
        <p>${period}'s total for ${restaurant} was <span class="result_number"> ${result}</span> NOK</p>
        `;
        /* fyller diagram*/
        document.querySelector(".diagram_1_filled").style.width = result/10000+'%';
    
    })



/*****************************************  prøving og feiling under her:   enkel test med kun med ett parameter *****************************************/


