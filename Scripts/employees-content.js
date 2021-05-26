const mainContentHome = document.querySelector(".main_content");
const navbarEmployees = document.querySelector(".navbar_employees");
let mainTextHome =`

  <div class="employees-content">
    <div class="flip-card">
      <div class="inner-card">
        <div class="front">
          <h2 class="card-titel-front">ADD & REMOVE</h2>
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

    <label for="PAY-GRADE">PAY-GRADE</label>
    <input type="range" min="0" max="5" required name="PAY-GRADE" value="1">

    <label for="POSITION">POSITION</label>
    <select name="POSITION">
    <option value="HOST/HOSTESS">HOST/HOSTESS</option>
    <option value="CHEF">CHEF</option>
    <option value="SOUSE CHEF">SOUSE CHEF</option>
    <option value="MANAGER">MANAGER</option>
    </select>
    </div>
    <button class="remove-add-button" type="submit">ADD</button>

    `

    flipCard();
    // Click event som flipper kortet tilbake og stenger remove ansatt delen
    document.querySelector(".remove-add-close").addEventListener("click", flipCard);
  })
};

function remove(){
  document.querySelector(".remove-user-btn").addEventListener("click", (e)=>{
    document.querySelector(".back").innerHTML = `
    <img class="image-remove-add" src="../Images/employees/userImageInbox.png" alt="person-remove">
    <a class="remove-add-close" href="#"><i class="fas fa-times fa-2x"></i></a>
    <div class="remove-inputs">
    <input type="text"  placeholder="EMPLOYEE ID" minlength="2" required>
    <input type="text"  placeholder="NAME" minlength="2" required>
    </div>
    <button class="remove-add-button" type="submit">REMOVE</button>
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
