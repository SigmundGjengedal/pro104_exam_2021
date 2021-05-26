const mainContentHome = document.querySelector(".main_content");
const navbarEmployees = document.querySelector(".navbar_employees");
let mainTextHome =`
<div class="teams-container">
  <div class="team-wrap">

    <div class="flip-card">
      <div class="inner-card">
        <div class="front">
          <h2 class="card-titel-front">Karl Johan</h2>
          <img class="card-image-front" src="Images/employees/pizza.png" alt="">
        </div>
        <div class="back">
          <p>dette er på baksiden</p>
        </div>
      </div>
    </div>

    <div class="flip-card">
      <div class="inner-card">
        <div class="front">
          <h2 class="card-titel-front">Nydalen</h2>
          <img class="card-image-front" src="Images/employees/pizza.png" alt="">
        </div>
        <div class="back">
          <p>dette er på baksiden</p>
        </div>
      </div>
    </div>

    <div class="flip-card">
      <div class="inner-card">
        <div class="front">
          <h2 class="card-titel-front">BJØRVIKA</h2>
          <img class="card-image-front" src="Images/employees/pizza.png" alt="">
        </div>
        <div class="back">
          <p>dette er på baksiden</p>
        </div>
      </div>
    </div>

    <div class="flip-card">
      <div class="inner-card">
        <div class="front">
          <h2 class="card-titel-front">ADD & REMOVE</h2>
          <img class="card-image-front" src="Images/employees/pizza.png" alt="">

          <div class="add-remove-user-div">
            <a class="add-user" href="#"><i class="fas fa-user-plus fa-2x"></i></a>
            <a class="remove-user" href="#"><i class="fas fa-user-minus fa-2x"></i></a>
          </div>

        </div>
        <div class="back-test">

        </div>
      </div>
    </div>


  </div>

</div>
`

navbarEmployees.addEventListener("click", ()=>{
  mainContentHome.innerHTML = mainTextHome;
    add();
    remove();
});

// Tekst som printes ut ut ifra om brukeren velger å legge til eller fjerne ansatte
function add(){
  document.querySelector(".add-user").addEventListener("click", ()=>{
    document.querySelector(".back-test").innerHTML = `
      <p>tekst for adding</p>
    `
    flipCard();
  })
};

function remove(){
  document.querySelector(".remove-user").addEventListener("click", (e)=>{
    document.querySelector(".back-test").innerHTML = `
    <img class="remove-image" src="../Images/employees/userImageInbox.png" alt="person-remove">
    <a class="remove-close" href="#"><i class="fas fa-times fa-2x"></i></a>
    <div class="remove-input">
    <input  type="text"  placeholder="EMPLOYEE ID" minlength="2" required>
    <input type="text"  placeholder="NAME" minlength="2" required>
    </div>
    <button class="remove-button" type="submit">REMOVE</button>
    `
    flipCard();
    // Click event som flipper kortet tilbake
    document.querySelector(".remove-close").addEventListener("click", flipCard);
  })
};


  // Flipper kort ved å toggle class rotate
function flipCard(){
  document.querySelectorAll(".inner-card")[3].classList.toggle("rotate");
};
