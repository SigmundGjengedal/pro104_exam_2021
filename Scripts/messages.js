
// Må flyttes i egen fil og deles opp

const test = document.querySelector(".test");

var tekst = `
<div id="overlay"></div>
<!-- Titel container -->
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


<!-- Inbox delen-->
<div class="inbox_container">

  <div class="standard_message_container">

    <div class="welcome_message">
      <img class="profile_picture" src="images/menu/icons/userImageInbox.png" alt="userPic">
      <h3>Welcome</h3>
      <h3 class="inbox_name"></h3>
    </div>
  </div>

    <div class="msg1_time expandable">
      <div class="time">
        <p>18:45</p>
        <p class="yesterday"></p>
      </div>
      <div class="msg">

      <div class="message_info_div">
        <img class="message_profile_picture" src="images/employees/random.jpg" alt="emplPic">
        <div>
          <h3>OLE RAMBERG</h3>
          <h5>avd. TØYEN</h5>
        </div>
      </div>

      <div class="message_txt_div">
        <p class="message_txt"></p>
      </div>
    </div>
    </div>

    <div class="msg2_time expandable">
      <div class="time">
        <p>19:22</p>
        <p class="yesterday"></p>
      </div>
      <div class="msg">
        <div class="message_info_div">
          <img class="message_profile_picture" src="images/employees/Kari.jpg" alt="emplPic">
          <div>
            <h3>KARI OLSEN</h3>
            <h5>avd. MAJORSTUA</h5>
          </div>
        </div>
        <div class="message_txt_div">
          <p class="message_txt"></p>
        </div>
      </div>
    </div>



    <div class="msg3_time expandable">
      <div class="time">
        <p class="timeToday">17:00</p>
        <p class="dateToday">22 Mar</p>
      </div>
      <div class="msg msg3">
        <div class="message_info_div">
        <img class="message_profile_picture" src="images/employees/Marius.png" alt="emplPic">
        <div>
          <h3>MARIUS SUNDE</h3>
          <h5>avd. SOLLI</h5>
        </div>
      </div>
        <div class="message_txt_div">
        <p class="message_txt"></p>
      </div>
      </div>
    </div>


  <div class="logout_container">
    <a href="index.html"><i class=" logout_icone fas fa-sign-out-alt fa-2x"></i></a>
  </div>
</div>
</div>
<!-- Navbar -->
 <div class="navbar_container">

    <div class="navbar_sales_container">
      <a href="#"><span class="navbar_sales">SALES</span></a>
    </div>

    <div class="navbar_employees_container">
      <a href="#"><span class="navbar_employees">EMPLOYEES</span></a>
    </div>

    <div class="navbar_food_container">
      <a href="#"><span class="navbar_food">FOOD</span></a>
    </div>

    <div class="navbar_home_container">
      <a href="#"><span class="navbar_home">HOME</span></a>
    </div>

    <div class="home_line"></div>
    <div class="food_line"></div>
    <div class="employees_line"></div>
    <div class="sales_line"></div>

  </div> <!-- end of navbar-container-->

</div><!-- end of homepage container-->
  </div>
</div>
`

test.innerHTML = tekst;






const overlay = document.querySelector("#overlay");
const message3 = document.querySelector(".msg3_time");
const msg3 = document.querySelector(".msg3");
const inboxName = document.querySelector(".inbox_name");
const messageTxt = document.querySelectorAll(".message_txt");
const expandable = document.querySelectorAll(".expandable");
const yesterdayTxt = document.querySelectorAll(".yesterday");
const todayTimeTxt = document.querySelector(".timeToday");
const todayDateTxt = document.querySelector(".dateToday");
const time = document.querySelectorAll(".time");




// Function som slicer og printer message text til x antall bokstaver - Må jobbes mere med
const msgArray = [
   "Kenneth er syk idag. Kunne du sett om vi har noen som kan erstate kveldsvakta hans?",
   "Kunne vi flyttet neste onsdags møte til torsdag? Jeg må være på restorangen fram til kl.12, men etter det er jeg ledig når som helst.",
   "Hei. Prøvde å ringe. Kan du ringe meg så fort du ser dette?Takk"
];
function slicingMsgTxt(){
  for (var i = 0; i < messageTxt.length; i++) {
    let slicedTxt = msgArray[i].slice(0,50);
    messageTxt[i].innerHTML = slicedTxt + "...";
  }
};
window.onload = slicingMsgTxt();

// Lager og formaterer date objekt for meldinger i inboksen
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Augt',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

let today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mIndex = today.getMonth();
const mm = months[mIndex];
const hours = String(today.getHours());
const minutes = String(today.getMinutes()).padStart(2, '0');
today = dd + " " + mm;
const timeToday = hours + ":" + minutes;
todayTimeTxt.innerHTML = timeToday;
todayDateTxt.innerHTML = today;


// Simulerer gårsdagens dato som brukes på 2 av meldingene, og printer ut
let yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
const ddYesterday = String(yesterday.getDate()).padStart(2, '0');
const mmIndexYesterday = yesterday.getMonth();
const mmYesterday = months[mmIndexYesterday];
yesterday = ddYesterday + " " + mmYesterday;
yesterdayTxt.forEach(day =>{
  day.innerHTML = yesterday;
});

// Toggler expanded class som åpner og stenger inbox meldinger, og toggler hidden class som gjemmer og viser tiden for meldingene
expandable.forEach(element => {
element.addEventListener("click", function(e){
    this.classList.toggle("expanded");
    overlay.classList.toggle("overlay");
    time.forEach(time =>{
    time.classList.toggle("hidden");

  });
  // Sjekker om brukeren har klikket på nyeste meldingen for å fjerne grønn border
  if(e.currentTarget.classList.contains("msg3_time")){
    msg3.style.border="none";
  };
});
});



overlay.addEventListener("click", () =>{
    time.forEach(time => time.classList.toggle("hidden"));
    expandable.forEach(element => element.classList.remove("expanded"));
    overlay.classList.toggle("overlay");
    slicingMsgTxt();
});

// Koden som henter username fra localStorage og printer det ut i inbox delen
window.onload = inboxName.innerHTML = localStorage.getItem("username");

// Time function som printer ut melding etter vis antal sekunder
function printMessage(){
message3.style.visibility="visible";
var audio = new Audio("../Images/mail-notification.mp3");
audio.play();
};
window.setTimeout(printMessage, 6000);
