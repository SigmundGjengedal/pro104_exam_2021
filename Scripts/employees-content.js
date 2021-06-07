github// Importerer EmpolyeesModule
import EmployeesModules from "./Modules/EmployeesModule.js";

// Variabler for navbar employee knappen og stedet hvor info printes
const mainContent = document.querySelector(".main_content");
const navbarEmployees = document.querySelector(".navbar_employees");
let mainTextHome =`
<div class="employees-content">

  <h1 class="employees-title">EMPLOYEES</h1>

  <nav class="buttons-employee">
      <a class="button-employee karl-johan" href="#">KARL JOHAN</a>
      <a class="button-employee bjørvika" href="#">BJØRVIKA</a>
      <a class="button-employee nydalen" href="#">NYDALEN</a>
      <a class="button-employee grunerløkka" href="#">GRUNERLØKKA</a>
  </nav>


    <div class="employee-list1">

    </div>

    <div class="employee-list2">

    </div>

    <div class="add-remove-buttons">
    <a class="add-user-btn" href="#"><i class="fas fa-user-plus fa-2x"></i></a>
    <a class="remove-user-btn" href="#"><i class="fas fa-user-minus fa-2x"></i></a>
    </div>

    <div class="modal">

      <div class="modal-content">


      </div>

    </div>


  </div>
`

navbarEmployees.addEventListener("click", ()=>{
  mainContent.innerHTML = mainTextHome;
    printKarlJohan();
    printGrunerlokka();
    printNydalen();
    printBjorvika();

    openAddModal();
    openRemoveModal();

});


// Åpner add modalen

function openAddModal(){
  document.querySelector(".add-user-btn").addEventListener("click", function(){
    const modal = document.querySelector(".modal");
    modal.style.display = "block";
    addModalPrint();
    closeModal();
  })
};
// Åpner remove modalen
function openRemoveModal(){
  document.querySelector(".remove-user-btn").addEventListener("click", function(){
    const modal = document.querySelector(".modal");
    modal.style.display = "block";
    removeModalPrint();
    closeModal();
  })
};
// funksjonen add som printer ut addModal

function addModalPrint(){
    document.querySelector(".modal-content").innerHTML = `
    <div class="image-remove-add-div">
    <img class="image-remove-add" src="../Images/employees/userImageInbox.png" alt="person-remove">
    </div>
  <a class="remove-add-close" href="#"><i class=" fas fa-times fa-2x"></i></a>
  <div class="add-inputs">
  <form>
    <label for="">CONTACT INFO:</label>
    <input class="name-value" type="text" name="NAME" required placeholder="NAME" minlength="2">
    <input class="mail-value" type="email" name="EMAIL" required placeholder="EMAIL" value="">
    <input class="phone-value" type="tel" name="tel" required maxlength=8 pattern="[0-9]{8}"  placeholder="PHONE">

    <label class="position" for="POSITION">POSITION:</label>
    <select class="position-value" name="POSITION">
    <option value="HOST/HOSTESS">HOST/HOSTESS</option>
    <option value="CHEF">CHEF</option>
    <option value="SOUSE CHEF">SOUSE CHEF</option>
    <option value="MANAGER">MANAGER</option>
    </select>

    <label for="PAY-GRADE">PAY-GRADE:</label>
    <select class="pay-grade-value" name="pay-grade">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    </select>
    </div>

    <button class="add-button" type="submit" value="Send">ADD</button>
  </form>
    `
    addNewEmployee();
};
// Funksjon som printer ut removeModal
function removeModalPrint(){
    document.querySelector(".modal-content").innerHTML = `
    <div class="image-remove-add-div">
    <img class="image-remove-add" src="../Images/employees/userImageInbox.png" alt="person-remove">
    </div>

    <a class="remove-add-close" href="#"><i class="fas fa-times fa-2x"></i></a>
    <div class="remove-inputs">
    <label for="">INFO:</label>
    <input class=remove-name-value type="text" name="NAME" placeholder="NAME" minlength="2" required>
    <input class="remove-phone-value" type="tel" name="tel" maxlength=8 pattern="[0-9]{8}" required placeholder="PHONE">
    </div>
    <button class="remove-button" type="submit">REMOVE</button>
    `
    removeEmployee();
};

//Stenger modalen når bruker klikker på icon
function closeModal(){
  document.querySelector(".remove-add-close").addEventListener("click", function(){
    const modal = document.querySelector(".modal");
    modal.style.display = "none";
  });
};

// Funksjon som legger til ny ansatt
let counter = 0;
function addNewEmployee(){
  const addBtn = document.querySelector(".add-button");
  const employeeList2 = document.querySelector(".employee-list2")



  addBtn.addEventListener("click", function(){
  const nameValue = document.querySelector(".name-value").value;
  const mailValue = document.querySelector(".mail-value").value;
  const phoneValue = document.querySelector(".phone-value").value;
  const positionValue = document.querySelector(".position-value").value;
  const payGradeValue = document.querySelector(".pay-grade-value").value;


  if(nameValue.length<2 && mailValue.length < 5 && phoneValue < 8){
    alert("You need to fill in information");
    let removeLastOne = employeeList2.children.length;
    removeLastOne.style.display="none";
  }if(counter <=3){
    employeeList2.innerHTML +=`
    <div class="employee-card">
      <div class="employee-name-div">
      <h3 class="employee-name">${nameValue}</h3>
      <p class="employee-position">${positionValue}</p>
      </div>
      <div class="employee-contact-info">
      <p class="employee-phone">${phoneValue}</p>
      <p class="employee-email">${mailValue}</p>
      </div>
      <p class="employee-pay-grade">PAY GRAD: ${payGradeValue}</p>
    </div>
    `
    document.querySelector(".modal").style.display = "none";
    counter++;
  }else{
        document.querySelector(".modal").style.display = "none";
        alert("The restaurant does not need more employees")
  }
});
};
// Funksjonen som sletter ansatte
function removeEmployee(){
  const employeeCard = document.querySelectorAll(".employee-card");
  const removeBtn = document.querySelector(".remove-button");
  removeBtn.addEventListener("click", function(){
    const nameValue = document.querySelector(".remove-name-value").value;
    const phoneValue = document.querySelector(".remove-phone-value").value;
    let isFound = false;
    employeeCard.forEach(card =>{
      if(card.children[0].children[0].innerHTML == nameValue && card.children[1].children[0].innerHTML == phoneValue){
        card.style.display="none";
        document.querySelector(".modal").style.display = "none";
        isFound = true;
        counter --;
      }
    });
    if(isFound == false){
      alert("Vi har ikke ansatte med denne info");
    };
  });

};

// Function printer fra modulen alle ansatte i KarlJohan
    function printKarlJohan(){
      let employeeList1 = document.querySelector(".employee-list1");
      let employeeList2 = document.querySelector(".employee-list2");
      document.querySelector(".karl-johan").addEventListener("click", ()=>{
        counter=0;
        document.querySelector(".add-remove-buttons").style.display="inline-block";
        employeeList1.innerHTML= " "
        EmployeesModules.getKarlJohan().forEach(rest => {
              employeeList1.innerHTML += `
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
      employeeList2.innerHTML= "";
    });
    };
// Function printer fra modulen alle ansatte i Grunerløkka
    function printGrunerlokka(){
      let employeeList1 = document.querySelector(".employee-list1");
      let employeeList2 = document.querySelector(".employee-list2");

      document.querySelector(".grunerløkka").addEventListener("click", ()=>{
        counter=0;
        document.querySelector(".add-remove-buttons").style.display="inline-block";
        employeeList1.innerHTML= " "
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
        employeeList2.innerHTML= "";
      });

    };
// Function printer fra modulen alle ansatte i Nydalen
    function printNydalen(){
      let employeeList = document.querySelector(".employee-list1");
      let employeeList2 = document.querySelector(".employee-list2");
      document.querySelector(".nydalen").addEventListener("click", ()=>{
        counter=0;
        document.querySelector(".add-remove-buttons").style.display="inline-block";
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
          employeeList2.innerHTML= "";
      });

    };
// Function printer fra modulen alle ansatte i Nydalen
    function printBjorvika(){
      let employeeList = document.querySelector(".employee-list1");
      let employeeList2 = document.querySelector(".employee-list2");
      document.querySelector(".bjørvika").addEventListener("click", ()=>{
        counter=0;
        document.querySelector(".add-remove-buttons").style.display="inline-block";
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
        employeeList2.innerHTML="";
      });
    };
