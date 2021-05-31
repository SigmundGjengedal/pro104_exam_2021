const overlay = document.querySelector(".overlay");
const message3 = document.querySelector(".msg3_time");
const msg3 = document.querySelector(".msg3");
const inboxName = document.querySelector(".inbox_name");
const messageTxt = document.querySelectorAll(".message_txt");
const expandable = document.querySelectorAll(".expandable");
const yesterdayTxt = document.querySelectorAll(".yesterday");
const todayTimeTxt = document.querySelector(".timeToday");
const todayDateTxt = document.querySelector(".dateToday");
const time = document.querySelectorAll(".time");



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

// Toggler expanded class som åpner og stenger inbox meldinger
 // Toggler hidden class som gjemmer og viser tiden for meldingene
 // Printer ut hele meldingen og slicer den når meldingen ikke er ekspandert
expandable.forEach(element => {
element.addEventListener("click", (e)=>{
    e.currentTarget.children[0].classList.toggle("hidden");
    e.currentTarget.classList.toggle("expanded");
    e.currentTarget.children[1].children[0].classList.toggle("visible");
    // console.log(e.currentTarget.dateset.msgTxt;
    overlay.classList.toggle("overlay_active");
  // Sjekker om brukeren har klikket på nyeste meldingen for å fjerne grønn border
  if (e.currentTarget.children[1].children[2].children[0].innerHTML.length >53) {
    slicingMsgTxt()
  }else if(e.currentTarget.classList.contains("msg3_time")){
    msg3.style.border="none";
    e.currentTarget.children[1].children[2].children[0].innerHTML = msgArray[2]
  }else if (e.currentTarget.classList.contains("msg2_time")) {
    e.currentTarget.children[1].children[2].children[0].innerHTML = msgArray[1];
  }else if (e.currentTarget.classList.contains("msg1_time")) {
    e.currentTarget.children[1].children[2].children[0].innerHTML = msgArray[0];
  }

});
});

// Koden som henter username fra localStorage og printer det ut i inbox delen
window.onload = inboxName.innerHTML = localStorage.getItem("username");

// Time function som printer ut melding etter vis antal sekunder
function printMessage3(){
message3.style.visibility="visible";
var audio = new Audio("../Images/mail-notification.mp3");
audio.play();
};
window.onload = setTimeout(printMessage3, 6000);
