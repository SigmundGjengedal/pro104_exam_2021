// const message1 = document.querySelector(".message_1");
// const message2 = document.querySelector(".message_2");
const overlay = document.querySelector("#overlay");
const message3 = document.querySelector(".msg3_time");
const inboxName = document.querySelector(".inbox_name");
const messageTxt = document.querySelectorAll(".message_txt");
const expandable = document.querySelectorAll(".expandable");



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

// Angir dato for meldinger i inboksen
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
const minutes = String(today.getMinutes());

today = dd + " " + mm;
const timeToday = hours + ":" + minutes;

console.log(today);
console.log(timeToday);

// simulerer gårsdagens dato som brukes på 2 av meldingene
let yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

const ddYesterday = String(yesterday.getDate()).padStart(2, '0');
const mmIndexYesterday = yesterday.getMonth();
const mmYesterday = months[mmIndexYesterday];

yesterday = ddYesterday + " " + mmYesterday;
console.log(yesterday);









// Toggler expanded class som åpner og stenger inbox meldinger
expandable.forEach(element => {
element.addEventListener("click", function(e){
    console.log(e.currentTarget);
    this.classList.toggle("expanded");
    overlay.classList.toggle("overlay");

})
})

// message1.addEventListener("click", () =>{
//     message1.classList.toggle("message_1_expanded")
//     document.querySelector("#overlay").classList.toggle("overlay");

// })

// message2.addEventListener("click", () =>{
//     message2.classList.toggle("message_2_expanded")
//     document.querySelector("#overlay").classList.toggle("overlay");

// })

overlay.addEventListener("click", () =>{
    // message1.classList.toggle("message_1_expanded");
    // message2.classList.toggle("message_1_expanded");
    expandable.forEach(element => element.classList.remove("expanded"));
    overlay.classList.toggle("overlay");
    slicingMsgTxt();
});

// Koden som henter username fra localStorage og printer det ut i inbox delen
window.onload = inboxName.innerHTML = localStorage.getItem("username");

// Time function som printer ut melding etter vis antal sekunder
function printMessage(){
message3.style.visibility="visible";
};
window.setTimeout(printMessage, 500);
