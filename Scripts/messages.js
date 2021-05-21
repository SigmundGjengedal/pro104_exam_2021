// const message1 = document.querySelector(".message_1");
// const message2 = document.querySelector(".message_2");
const overlay = document.querySelector("#overlay");

document.querySelectorAll(".expandable").forEach(element => {
element.addEventListener("click", function(e){
    this.classList.toggle("expanded");
    document.querySelector("#overlay").classList.toggle("overlay")
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
    document.querySelectorAll(".expandable").forEach(element => element.classList.remove("expanded"));
    document.querySelector("#overlay").classList.toggle("overlay");
});




