const mainContentHome = document.querySelector(".main_content");
const navbarEmployees = document.querySelector(".navbar_employees");
let mainTextHome =`
<div class="teams-container">
  <div class="team-wrap">

    <div class="team-box">
      <h2 class="box-titel">Karl Johan</h2>
      <img class="box-image" src="Images/employees/pizza.png" alt="">
    </div>

    <div class="team-box">
      <h2 class="box-titel">Bjørvika</h2>
      <img class="box-image" src="Images/employees/pizza.png" alt="">
    </div>

    <div class="team-box">
      <h2 class="box-titel">Nydalen</h2>
      <img class="box-image" src="Images/employees/pizza.png" alt="">
    </div>

    <div class="team-box">
      <h2 class="box-titel">Grunerløkka</h2>
      <img class="box-image" src="Images/employees/pizza.png" alt="">
    </div>

  </div>
</div>
`

navbarEmployees.addEventListener("click", ()=>{
  mainContentHome.innerHTML = mainTextHome;
});
