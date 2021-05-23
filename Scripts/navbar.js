const homebutton = document.querySelector('.navbar_home');
const foodButton = document.querySelector('.navbar_food');
const employeesButton = document.querySelector('.navbar_employees');
const salesButton = document.querySelector('.navbar_sales');


const HomeUnderline = document.querySelector('.home_line');
const foodUnderline = document.querySelector('.food_line');
const employeesUnderline = document.querySelector('.employees_line');
const salesUnderline = document.querySelector('.sales_line');


homebutton.addEventListener('click', function(){
    HomeUnderline.style.display ="block";
    foodUnderline.style.display = "none";
    employeesUnderline.style.display = "none";
    salesUnderline.style.display = "none";
})

foodButton.addEventListener('click', function() {
    foodUnderline.style.display = "block";
    HomeUnderline.style.display = "none";
    employeesUnderline.style.display = "none";
    salesUnderline.style.display = "none";
});

employeesButton.addEventListener('click', function(){
    employeesUnderline.style.display = "block";
    foodUnderline.style.display = "none";
    HomeUnderline.style.display = "none";
    salesUnderline.style.display = "none";

});

salesButton.addEventListener('click',function(){
    salesUnderline.style.display = "block";
    employeesUnderline.style.display = "none";
    foodUnderline.style.display = "none";
    HomeUnderline.style.display = "none";
    
});