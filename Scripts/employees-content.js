const mainContentHome = document.querySelector(".main_content");
const navbarEmployees = document.querySelector(".navbar_employees");
let mainTextHome =`

  <div class="employees-content">


  <nav class="buttons-employee">
      <a class="button-employee" href="#">KARL JOHAN</a>
      <a class="button-employee" href="#">BJØRVIKA</a>
      <a class="button-employee" href="#">NYDALEN</a>
      <a class="button-employee" href="#">GRUNERLØKKA</a>
    </nav>

    <div class="flip-card">
      <div class="inner-card">
        <div class="front">
          <h2 class="card-titel-front">CHANGE</h2>
          <img class="card-image-front" src="Images/employees/pizza.png" alt="">

          <div class="add-remove-user-div">
            <a class="add-user-btn" href="#"><i class="fas fa-user-plus fa-2x"></i></a>
            <a class="remove-user-btn" href="#"><i class="fas fa-user-minus fa-2x"></i></a>
          </div>

        </div>
        <div class="back">

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
  document.querySelector(".add-user-btn").addEventListener("click", ()=>{
    document.querySelector(".back").innerHTML = `
    <img class="image-remove-add" src="../Images/employees/userImageInbox.png" alt="person-remove">
    <a class="remove-add-close" href="#"><i class="fas fa-times fa-2x"></i></a>
  <div class="add-inputs">
    <label for="NAME">NAME</label>
    <input type="text" name="NAME" placeholder="NAME" minlength="2" required>
    <label for="EMAIL">EMAIL</label>
    <input type="email" name="EMAIL" required placeholder="EMAIL" value="">
    <label for="tel">PHONE</label>
    <input type="tel" name="tel" maxlength=8 pattern="[0-9]{8}" required placeholder="PHONE">

    <label for="POSITION">POSITION</label>
    <select name="POSITION">
    <option value="HOST/HOSTESS">HOST/HOSTESS</option>
    <option value="CHEF">CHEF</option>
    <option value="SOUSE CHEF">SOUSE CHEF</option>
    <option value="MANAGER">MANAGER</option>
    </select>

    <label for="PAY-GRADE">PAY-GRADE</label>
    <output id="amount" class="amount">1</output>
    <input class="range" id="value" type="range" min="0" max="5" required name="PAY-GRADE" value="1">

    </div>

    <button class="add-button" type="submit">ADD</button>

    `
    // Slider pay-grade nummer
    slidingPayGrade();

    flipCard();
    // Click event som flipper kortet tilbake og stenger remove ansatt delen
    document.querySelector(".remove-add-close").addEventListener("click", flipCard);
  })
};

function slidingPayGrade(){
  const slider = document.getElementById("value");
  const output = document.getElementById("amount");

  slider.oninput = function() {
    output.innerHTML = this.value;
  }
};




function remove(){
  document.querySelector(".remove-user-btn").addEventListener("click", (e)=>{
    document.querySelector(".back").innerHTML = `
    <img class="image-remove-add" src="../Images/employees/userImageInbox.png" alt="person-remove">
    <a class="remove-add-close" href="#"><i class="fas fa-times fa-2x"></i></a>
    <div class="remove-inputs">
    <label for="NAME">NAME</label>
    <input type="text" name="NAME" placeholder="NAME" minlength="2" required>
    <label for="tel">PHONE</label>
    <input type="tel" name="tel" maxlength=8 pattern="[0-9]{8}" required placeholder="PHONE">
    </div>
    <button class="remove-button" type="submit">REMOVE</button>
    `
    flipCard();
    // Click event som flipper kortet tilbake og stenger remove ansatt delen
    document.querySelector(".remove-add-close").addEventListener("click", flipCard);
  })
};



  // Flipper kort ved å toggle class rotate
function flipCard(){
  document.querySelector(".inner-card").classList.toggle("rotate");
};
