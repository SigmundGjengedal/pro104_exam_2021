import SalesModule from '../Modules/SalesModule.js';

const resultText = document.querySelector(".result-text");


/* henter buttons */

const bjorvika_Btn = document.querySelector("#Bjørvika");
const Nydalen_Btn = document.querySelector("#Nydalen");
const Grunerløkka_Btn = document.querySelector("#Grunerløkka");
const KarlJohan_Btn = document.querySelector("#Karl-Johan");

const ThisYear_Btn =  document.querySelector("#this-year");
const LastYear_Btn =  document.querySelector("#last-year");
const LastMonth_Btn =  document.querySelector("#last-month");
const LastWeek_Btn =  document.querySelector("#last-week");

const all_Btn =  document.querySelector("#all");
const pizza_Btn =  document.querySelector("#pizza");
const drinks_Btn =  document.querySelector("#drinks");
const salads_Btn =  document.querySelector("#salads");

const calculate_Btn = document.querySelector(".calculate-btn");


let restaurant = "";
let period = "";
let category = "";

/* Tre parameter: Event på calculate button, kaller funksjonen med verdier fra knapper. Hvordan få verdiene fra knappene?! */
document.querySelectorAll(".button").foreEach( element => element.addEventListener("click", function(){
        restaurant = this.innerHTML;
        console.log(restaurant);
}));

calculate_Btn.addEventListener('click', function() {


   

    /* kaller funksjonen*/
    let result = SalesModule.getRevenueByRestaurantAndPeriodAndCategory(restaurant,period,category);

    /*printer*/
    resultText.innerHTML = `
    <p>${period}'s total for ${restaurant} was <span class="result_number"> ${result}</span> NOK</p>
    `;
    /* fyller diagram*/
    document.querySelector(".diagram_1_filled").style.width = result/10000+'%';

})












/*****************************************  prøving og feiling under her:   enkel test med kun med ett parameter *****************************************/

bjorvika_Btn.addEventListener('click', function(){
    let value = "bjørvika";
    let salesNumber =  SalesModule.getAccRevenueThisYearByRestaurant(value);
    document.querySelector(".diagram_1_filled").style.width = salesNumber/10000+'%'
    resultText.innerHTML = `
    <p>2020's total for Nydalen was <span class="result_number"> ${salesNumber}</span> NOK</p>
    `;
});


