import EmployeesModules from "../Modules/EmployeesModule.js"

const outputDiv = document.querySelector("#output-1");


const generateEmployees = () => {

    let htmlTxt ="";
    // lager article for hvert objekt med gitt info:
    EmployeesModules.getAllEmployees().forEach( employeeObject => {
        htmlTxt += `
        <div class = "column is-4">
        <div class="card">
            <div class="card-image">
            <figure class="image is-4by5">
                <img src="images/employees/${employeeObject.image}" alt="Placeholder image">
            </figure>
            </div>
            <div class="card-content">
            <div class="media">
                <div class="media-left">
                <figure class="image is-32x32">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                </figure>
                </div>
                <div class="media-content">
                <p class="title is-4">${employeeObject.name}</p>
                <p class="subtitle is-6">${employeeObject.position}</p>
                </div>
            </div>
        
            <div class="content">
                Jobber hos:  <a>${employeeObject.departement}</a>.
                Telefonnummer:  <a>${employeeObject.phone}</a>.
            
                <br>
            
            </div>
            </div>
        </div>
        </div>
        `;
    } ); // end of forEach
    outputDiv.innerHTML = htmlTxt;

} // end of generateEmployees 

generateEmployees();