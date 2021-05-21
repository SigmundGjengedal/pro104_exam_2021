const message1 = document.querySelector(".message_1");

message1.addEventListener("click", () =>{
    document.querySelector("body").style.opacity = "0.2"
    message1.classList.toggle("message_1_expanded")
})