// Printer ut home content



const mainContentHome = document.querySelector(".main_content");
const navbarHome = document.querySelector(".navbar_home");
let mainTextHome = `

<div class="home_page_container">
  <div class="top_page_title_container">
    <span>HOME</span>
  </div>

  <!-- Total sales container -->
  <div class="total_sales_container">
    <span class="total_sales_title">TOTAL SALES</span>
    <span class="total_sales_past">PAST 7 DAYS</span>

      <div class="week">
        <span class="week_monday">M</span>
        <span class="week_tuesday">T</span>
        <span class="week_wednesday">W</span>
        <span class="week_thursday">T</span>
        <span class="week_friday">F</span>
        <span class="week_saturday">S</span>
        <span class="week_sunday">S</span>
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
      <span>100K</span>
      <span class="sales_75">75K</span>
      <span class="sales_50">50K</span>
      <span class="sales_25">25K</span>
      <span class="sales_0">0</span>
    </div>
  </div><!-- Total sales container ends -->

  <!-- Horisontal og vertical linje som deler grafene -->

    <div class="horizontal_line"></div>
    <div class="vertical_line"></div>



  <!-- Budget -->

  <div class="budget_page_container">
  <span>BUDGET</span>
    <div class="goal_circle">
      <div class="goal_circle_inside">
        <div class="goal_circle_inside2"></div>
      </div>
    </div>

    <div class="total_circel">
      <span class="accomplished_number">150 000</span>
      <span class="total_goal_number">300 000</span>
    </div>

      <span class="percent_accomplished_txt">50% OF GOAL</span>
  </div>

  <!-- Profit -->
  <div class="profit_container">

      <span class="profit_title">PROFIT</span>


      <div class="total_profit_div">
      <span class="total_profit_number">$</span><span class="profit_k"> .-</span>
      </div>
  </div>
</div>
`
// Loader opp homecontent n??r siden lastes opp og printer ut home content n??r brukeren klikker p?? Home
window.onload = mainContentHome.innerHTML = mainTextHome;

navbarHome.addEventListener("click", ()=>{
  mainContentHome.innerHTML = mainTextHome;
  loopNumber();
  setTimeout(HomePageDiagramsModule.generateDiagramNumbers, 100);
});

// Importerer Salesmodule for ?? bruke data inn i funksjonen under
import SalesModule from './Modules/SalesModule.js';

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
// Printer ut tall i stigende rekkef??lge
function loopNumber(){
    var counter = 0;
    var numbers = makeNumbers();
    var loopnumber = setInterval( changeNumbers, 50);
    function changeNumbers() {
        counter++;
        if(counter === 30){
            clearInterval(loopnumber)
        }
        document.querySelector(".total_profit_number").innerHTML= Math.floor(numbers[counter]);
    }
}
loopNumber();

// Importerer HomePageDiagramsModule for ?? bruke funksjonen som henter data som fyller ut diagramen p?? home siden
import HomePageDiagramsModule from './Generators/salesGenerator.js';

// setter timeout slik at transition funkerer p?? s??ylene
window.onload =  setTimeout(HomePageDiagramsModule.generateDiagramNumbers, 100);
