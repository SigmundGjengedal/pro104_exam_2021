// const message1 = document.querySelector(".message_1");
// const message2 = document.querySelector(".message_2");
const overlay = document.querySelector("#overlay");
const message3 = document.querySelector(".message_3");
const inboxName = document.querySelector(".inbox_name");
const messageTxt = document.querySelectorAll(".message_txt");
const expandable = document.querySelectorAll(".expandable");

// Function som slicer og printer message text til x antall bokstaver - Må jobbes mere med
function slicingMsgTxt(){
  for (var i = 0; i < messageTxt.length; i++) {
    let slicedTxt = messageTxt[i].innerHTML.slice(0,50);
    messageTxt[i].innerHTML = slicedTxt + "...";
  }
};


expandable.forEach(element => {
element.addEventListener("click", function(e){
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
window.setTimeout(printMessage, 3000);
