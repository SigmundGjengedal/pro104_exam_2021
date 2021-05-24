// Printer ut home content

const mainContentHome = document.querySelector(".main_content");
const navbarHome = document.querySelector(".navbar_home");
let mainTextHome = `
<div class="home_page_container">
  <div class="top_page_title_container">
    <span class="top_page_title">HOME</span>
  </div>

  <!-- Total sales container -->
  <div class="total_sales_container">
    <span class="total_sales_title">TOTAL SALES - last week</span>

    <div class="week_container">
      <div class="week">
        <span class="week_monday">M</span>
        <span class="week_tuesday">T</span>
        <span class="week_wednesday">W</span>
        <span class="week_thursday">T</span>
        <span class="week_friday">F</span>
        <span class="week_saturday">S</span>
        <span class="week_sunday">S</span>
      </div>
    </div>



    <div class="diagrams_container">

        <div class="diagram_1">
           <div class="diagram_1_filled"></div>
        </div>

        <div class="diagram_2">
          <div class="diagram_2_filled"></div>
        </div>

       <div class="diagram_3">
          <div class="diagram_3_filled"></div>
       </div>

       <div class="diagram_4">
          <div class="diagram_4_filled"></div>
       </div>

       <div class="diagram_5">
          <div class="diagram_5_filled"></div>
       </div>

       <div class="diagram_6">
          <div class="diagram_6_filled"></div>
       </div>

       <div class="diagram_7">
        <div class="diagram_7_filled"></div>
     </div>


    </div>

    <div class="sales_numbers_container">
      <span class="sales_100">100K</span>
      <span class="sales_75">75K</span>
      <span class="sales_50">50K</span>
      <span class="sales_25">25K</span>
      <span class="sales_0">0</span>
    </div>
  </div><!-- Total sales container ends -->

  <!-- Horisontal og vertical linje som deler grafene -->
  <div class="horizontal_line_container">
    <div class="horizontal_line"></div>
  </div>

  <div class="vertical_line_container">
    <div class="vertical_line"></div>
  </div>


  <!-- Budget -->
  <div class="budget_page_container">
    <div class="budget_title_container">
      <span class="budget_title">BUDGET</span>
    </div>

    <div class="goal_circle">
      <div class="goal_circle_inside">
        <div class="goal_circle_inside2"></div>
      </div>

    </div>

    <div class="accomplished">
      <span class="accomplished_number">150 000</span>
    </div>

    <div class="total_goal">
      <span class="total_goal_number">300 000</span>
    </div>

    <div class="percent_accomplished">
      <span class="percent_accomplished_txt">50% OF GOAL</span>
    </div>
  </div>
  <!-- Profit -->
  <div class="profit_container">
    <div class="profit_title_container">
      <span class="profit_title">PROFIT</span>
    </div>

    <div class="profit_type">
      <span class="positive_profit">+</span>
      <span class="total_profit_number">$</span>
    </div>
  </div>
</div>
`
// Loader opp homecontent når siden lastes opp og printer ut home content når brukeren klikker på Home
window.onload = mainContentHome.innerHTML = mainTextHome;
navbarHome.addEventListener("click", ()=>{
  mainContentHome.innerHTML = mainTextHome;
  loopNumber();
  HomePageDiagramsModule.generateDiagramNumbers();
});

// Importerer Salesmodule for å bruke data inn i funksjonen
import SalesModule from './Modules/SalesModule.js';
const positiveProfit = document.querySelector(".positive_profit");

// Henter data fra SalesModule
function totalNumber(){
const salesArray = SalesModule.getAll();
const totalProfit = salesArray[0].revenueAccThisYear + salesArray[1].revenueAccThisYear + salesArray[2].revenueAccThisYear + salesArray[3].revenueAccThisYear;
return totalProfit;
}
// Lager array med data
function makeNumbers(){
    let numbers = [];
    for(let i=31;i>0;i--){
        numbers.push(totalNumber() / i)
    }
    return numbers;
}
// Printer ut tall i stigende rekkefølge
function loopNumber(){
    var counter = 0;
    var numbers = makeNumbers();
    var loopnumber = setInterval( changeNumbers, 50);
    function changeNumbers() {
        counter++;
        if(counter === 30){
            clearInterval(loopnumber)
        }
        document.querySelector(".total_profit_number").innerHTML= Math.floor(numbers[counter]) + ",-";
    }
}
loopNumber();

import HomePageDiagramsModule from './Generators/salesGenerator.js';
window.onload = HomePageDiagramsModule.generateDiagramNumbers();