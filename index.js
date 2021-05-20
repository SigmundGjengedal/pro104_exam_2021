
const loginBtn = document.querySelector(".login_btn")
const signinUnderline = document.querySelector(".signin_underline");
const signInBtn = document.querySelector(".signin_btn");
const createBtn = document.querySelector(".create_btn");


const passwordInput = document.querySelector(".login_password");
const usernameInput = document.querySelector(".login_input");
const form = document.querySelector("#form")
const nameTxt = document.querySelector(".name_txt");

const passwordEye = document.querySelector("#toggle_password_eye");



//funksjon for sign in / create underline
//dette kan vel kombineres til kortere kode

createBtn.addEventListener("click", function(){
    signinUnderline.classList.toggle("signin_underline_create")
})
signInBtn.addEventListener("click", function(){
    signinUnderline.classList.toggle("signin_underline_create")
})


//Button starter som disabled, når minimum-length på passord
//og brukernavn er tastet inn blir knappen aktivert.
loginBtn.disabled = true;
form.addEventListener("keyup", function(){
    let username = usernameInput.value;
    let password = passwordInput.value;
    if(username.length > 2 && password.length > 2){
        loginBtn.disabled = false;
        loginBtn.style.opacity = "1";
    }else {
        loginBtn.disabled = true;
        loginBtn.style.opacity = "0.2";
    }
})


//Toggle vising av passord.
passwordEye.addEventListener("click", function(e){

    const type = passwordInput.getAttribute("type") === 'password' ? "text" : "password";
    passwordInput.setAttribute("type", type);
    passwordEye.classList.toggle("fa-eye-slash");
})


//Funksjon for å vise "brukernavnet" på venstre side
usernameInput.addEventListener("focusout", () => {
    if (usernameInput.value.length > 4){
        nameTxt.style.color = "#FFF";
        nameTxt.textContent = capitalizeFirstLetter(usernameInput.value);
    }
}
)

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
