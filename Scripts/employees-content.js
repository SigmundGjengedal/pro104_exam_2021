// Importerer EmpolyeesModule
import EmployeesModules from "./Modules/EmployeesModule.js";

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
    printGrunerlokka();
    printNydalen();
    printBjorvika();
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


// Function printer fra modulen alle ansatte i KarlJohan
    function printKarlJohan(){
      let employeeList = document.querySelector(".employee-list");
      document.querySelector(".karl-johan").addEventListener("click", ()=>{
        employeeList.innerHTML= " "
        EmployeesModules.getKarlJohan().forEach(rest => {
              employeeList.innerHTML += `
              <div class="employee-card">
                <div class="employee-name-div">
                <h3 class="employee-name">${rest.name}</h3>
                <p class="employee-position">${rest.position}</p>
                </div>
                <div class="employee-contact-info">
                <p class="employee-phone">${rest.phone}</p>
                <p class="employee-email">${rest.mail}</p>
                </div>
                <p class="employee-pay-grade">PAY GRAD: ${rest.payGrade}</p>
              </div>
              `
        });
      });

    };

    // Function printer fra modulen alle ansatte i Grunerløkka
    function printGrunerlokka(){
      let employeeList = document.querySelector(".employee-list");

      document.querySelector(".grunerløkka").addEventListener("click", ()=>{
        employeeList.innerHTML= " "
        EmployeesModules.getGrunerlokka().forEach(rest => {
              employeeList.innerHTML += `
              <div class="employee-card">

                <h3 class="employee-name">${rest.name}</h3>
                <p class="employee-position">${rest.position}</p>

                <div class="employee-contact-info">
                <p class="employee-phone">${rest.phone}</p>
                <p class="employee-email">${rest.mail}</p>
                </div>
                <p class="employee-pay-grade">PAY GRAD: ${rest.payGrade}</p>
              </div>
              `

        });
      });
    };


    // Function printer fra modulen alle ansatte i Nydalen
    function printNydalen(){
      let employeeList = document.querySelector(".employee-list");
      document.querySelector(".nydalen").addEventListener("click", ()=>{
        employeeList.innerHTML= " "
        EmployeesModules.getNydalen().forEach(rest => {
              employeeList.innerHTML += `
              <div class="employee-card">
                <div class="employee-name-div">
                <h3 class="employee-name">${rest.name}</h3>
                <p class="employee-position">${rest.position}</p>
                </div>
                <div class="employee-contact-info">
                <p class="employee-phone">${rest.phone}</p>
                <p class="employee-email">${rest.mail}</p>
                </div>
                <p class="employee-pay-grade">PAY GRAD: ${rest.payGrade}</p>
              </div>
              `

        });
      });
    };

    // Function printer fra modulen alle ansatte i Nydalen
    function printBjorvika(){
      let employeeList = document.querySelector(".employee-list");
      document.querySelector(".bjørvika").addEventListener("click", ()=>{
        employeeList.innerHTML= " "
        EmployeesModules.getBjorvika().forEach(rest => {
              employeeList.innerHTML += `
              <div class="employee-card">
                <div class="employee-name-div">
                <h3 class="employee-name">${rest.name}</h3>
                <p class="employee-position">${rest.position}</p>
                </div>
                <div class="employee-contact-info">
                <p class="employee-phone">${rest.phone}</p>
                <p class="employee-email">${rest.mail}</p>
                </div>
                <p class="employee-pay-grade">PAY GRAD: ${rest.payGrade}</p>
              </div>
              `

        });
      });
    };
