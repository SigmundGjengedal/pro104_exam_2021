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
          <h2 class="card-titel-front">Bjørvika</h2>
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
          <h2 class="card-titel-front">Grunerløkka</h2>
          <img class="card-image-front" src="Images/employees/pizza.png" alt="">
        </div>
        <div class="back">
          <p>dette er på baksiden</p>
        </div>
      </div>
    </div>


  </div>

</div>
`

navbarEmployees.addEventListener("click", ()=>{
  mainContentHome.innerHTML = mainTextHome;
});



const flipCard = document.querySelectorAll(".flip-card");

// Flipper kortene ved å toggle class rotate
flipCard.forEach(card =>{
  card.addEventListener("click", (e)=>{
    e.currentTarget.children[0].classList.toggle("rotate");
  });
});
