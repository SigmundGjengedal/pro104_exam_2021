// Importerer EmpolyeesModule

// Variabler for navbar employee knappen og stedet hvor info printes
const mainContent = document.querySelector(".main_content");
const navbarEmployees = document.querySelector(".navbar_employees");
let mainTextHome =`
<div class="employees-content">

  <nav class="buttons-employee">
      <a class="button-employee karl-johan" href="#">KARL JOHAN</a>
      <a class="button-employee bjørvika" href="#">BJØRVIKA</a>
      <a class="button-employee nydalen" href="#">NYDALEN</a>
      <a class="button-employee grunerløkka" href="#">GRUNERLØKKA</a>
    </nav>


    <div class="employee-list">


    </div>

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
  </div>
`

navbarEmployees.addEventListener("click", ()=>{
  mainContent.innerHTML = mainTextHome;
    add();
    remove();
    printKarlJohan();
});

// funksjonen add som tillatter brukeren å legge til ansatt
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
    <select name="pay-grade">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    </select>
    </div>

    <button class="add-button" type="submit">ADD</button>

    `
    flipCard();
    // Click event som flipper kortet tilbake og stenger remove ansatt delen
    document.querySelector(".remove-add-close").addEventListener("click", flipCard);
  })
};
// Funksjon som gir muligheten for å fjerne ansatte
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

// Klikk Karl Johan
    function printKarlJohan(){
      document.querySelector(".karl-johan").addEventListener("click", ()=>{
        EmployeesModules.getKarlJohan().forEach(kj => {
              document.querySelector(".employee-list").innerHTML = `
              <div class="employee-card">
                <div class="employee-name-div">
                <h3 class="employee-name">${kj.name}</h3>
                <p class="employee-position">${kj.position}</p>
                </div>
                <div class="employee-contact-info">
                <p class="employee-phone">${kj.phone}</p>
                <p class="employee-email">${kj.mail}</p>
                </div>
                <p class="employee-pay-grade">PAY GRAD: ${kj.payGrade}</p>
              </div>
              `
        });
      })
    }