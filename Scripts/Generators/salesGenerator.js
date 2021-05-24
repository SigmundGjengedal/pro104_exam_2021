import SalesModule from "../Modules/SalesModule.js";


// generer tall for søylediagram på home siden.

document.querySelector(".diagram_1_filled").style.height = SalesModule.getTotalMonday;
document.querySelector(".diagram_2_filled").style.height = SalesModule.getTotalTuesday;
document.querySelector(".diagram_3_filled").style.height = SalesModule.getTotalWednesday;
document.querySelector(".diagram_4_filled").style.height = SalesModule.getTotalThursday;
document.querySelector(".diagram_5_filled").style.height = SalesModule.getTotalFriday;
document.querySelector(".diagram_6_filled").style.height = SalesModule.getTotalSaturday;
document.querySelector(".diagram_7_filled").style.height = SalesModule.getTotalSunday;






