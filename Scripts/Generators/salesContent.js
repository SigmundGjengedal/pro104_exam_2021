import SalesModule from '../Modules/SalesModule.js';

const resultText = document.querySelector(".result-text");


/* henter buttons */

const bjorvika_Btn = document.querySelector("#Bjørvika");
const ThisYear_Btn =  document.querySelector("#this-year");

const calculate_Btn = document.querySelector(".calculate-btn");

/*test med kun salgstall */
bjorvika_Btn.addEventListener('click', function(){
    let value = "bjørvika";
    let salesNumber =  SalesModule.getAccRevenueThisYearByRestaurant(value);
    document.querySelector(".diagram_1_filled").style.width = salesNumber/10000+'%'
    resultText.innerHTML = `
    <p>2020's total for Nydalen was <span class="result_number"> ${salesNumber}</span> NOK</p>
    `;
});







