const mainContentFood = document.querySelector(".main_content");
const navbarFood = document.querySelector(".navbar_food");
let mainTextFood = `
<div class="week_container">
  <div class="week">
    <span class="week_monday">M</span>
    <span class="week_tuesday">T</span>
    <span class="week_wednesday">W</span>
    <span class="week_thursday">T</span>
    <span class="week_friday">F</span>
    <span class="week_saturday">S</span>
    <span class="week_sunday">S</span>
  </div>
</div>
`
navbarFood.addEventListener("click", ()=>{
  mainContentFood.innerHTML = mainTextFood;
});
