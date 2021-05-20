
const loginBtn = document.querySelector(".login_btn")
const signinUnderline = document.querySelector(".signin_underline");
const createUnderline = document.querySelector(".create_underline");
const signInBtn = document.querySelector(".signin_btn");
const createBtn = document.querySelector(".create_btn");


const passwordInput = document.querySelector(".login_password");
const usernameInput = document.querySelector(".login_input");
const form = document.querySelector("#form")
const nameTxt = document.querySelector(".name_txt");


const passwordEye = document.querySelector("#toggle_password_eye");



//funksjon for sign in / create underline
//dette kan vel kombineres til kortere kode

signInBtn.addEventListener("click", function(){
   signinUnderline.style.display="block";
   createUnderline.style.display="none";
})

createBtn.addEventListener("click", function(){
  signinUnderline.style.display="none";
  createUnderline.style.display="block";

})

//Button starter som disabled, når minimum-length på passord
//og brukernavn er tastet inn blir knappen aktivert.
loginBtn.disabled = true;
form.addEventListener("keyup", function(){
    let username = usernameInput.value;
    let password = passwordInput.value;
    if(username.length > 8 && password.length > 8){
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
        nameTxt.textContent = usernameInput.value.toUpperCase();
    }
}
);

//Flytte "placeholder text"
usernameInput.addEventListener("focus", () =>{
    document.querySelector(".login_username_label").style.visibility= "visible";
    usernameInput.setAttribute('placeholder', '');

} )
usernameInput.addEventListener("focusout", () => {
    document.querySelector(".login_username_label").style.visibility= "hidden";
    usernameInput.setAttribute('placeholder', 'USERNAME');
})

passwordInput.addEventListener("focus", () =>{
    document.querySelector(".login_password_label").style.visibility= "visible";
    passwordInput.setAttribute('placeholder', '');

} )
passwordInput.addEventListener("focusout", () => {
    document.querySelector(".login_password_label").style.visibility= "hidden";
    passwordInput.setAttribute('placeholder', 'PASSWORD');
})

//Slutt på placeholder-moving.



// farge transition for username linje
const loginInput = document.querySelector('.login_input');
const userNameUnderlineActive = document.querySelector(".login_input_underline_active_from");

loginInput.addEventListener('focus', function (e) {
    userNameUnderlineActive.classList.add('login_input_underline_active_to');
  });

loginInput.addEventListener('focusout', function (e) {
    userNameUnderlineActive.classList.remove('login_input_underline_active_to');

  });

  // farge transition for passordlinje

  const passwordLoginInput = document.querySelector(".login_password");
  const passwordUnderlineActive = document.querySelector(".login_password_underline_active_from");

  passwordLoginInput.addEventListener('focus', function (e) {
      passwordUnderlineActive.classList.add('login_password_underline_active_to');
  } );

  passwordLoginInput.addEventListener('focusout', function (e) {
    passwordUnderlineActive.classList.remove('login_password_underline_active_to');
} );

// for å gjøre grønn om både username og password er større en 8.
  form.addEventListener("keyup", function (e) {
    let username = loginInput.value;
    let password = passwordLoginInput.value;
    if(username.length > 8 && password.length > 8){
      userNameUnderlineActive.classList.add('login_green');
      passwordUnderlineActive.classList.add('login_green');
    }
    else{
      userNameUnderlineActive.classList.remove('login_green');
      passwordUnderlineActive.classList.remove('login_green');
    }
  })
