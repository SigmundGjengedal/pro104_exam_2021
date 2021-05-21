import SalesModule from './Modules/SalesModule.js';

const positiveProfit = document.querySelector(".positive_profit");
const totalProfitNumber = document.querySelector(".total_profit_number");




function totalNumber(){
const salesArray = SalesModule.getAll();
const totalProfit = salesArray[0].revenueAccThisYear + salesArray[1].revenueAccThisYear + salesArray[2].revenueAccThisYear + salesArray[3].revenueAccThisYear;
return totalProfit;
}

function makeNumbers(){
    let numbers = [];
    for(let i=31;i>0;i--){
        numbers.push(totalNumber() / i)
    }
    return numbers;
}

function loopNumber(){
    var counter = 0;
    var numbers = makeNumbers();
    var loopnumber = setInterval( changeNumbers, 80);
    console.log("numbers: "+ numbers)
    function changeNumbers() {
        counter++;
        console.log(counter)
        if(counter === 30){
            clearInterval(loopnumber)
        }
        totalProfitNumber.innerHTML = Math.floor(numbers[counter]) + ",-";
    }
}
loopNumber();
