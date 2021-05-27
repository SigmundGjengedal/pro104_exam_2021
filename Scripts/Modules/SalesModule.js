const SalesModule = ( function (){

    const salesArray = [
    {
        name: "Bjørvika",
        revenueAccThisYear: 600000,
        revenuePreviousYear: 1100000,
        revenuePreviousMonth: 120000,
        revenuePreviousWeek: 35000,

        revenuePreviousDay: 12000,
        grossRevenueAccThisYear: 500000,
        grossRevenuePreviousYear: 700000,

        revenueDaysLastweek : [ 7000, 8500,9000,23500,11000,15500,26000]
    },
    {
        name: "Karl Johan",
        revenueAccThisYear: 500000,
        revenuePreviousYear: 900000,
        revenuePreviousMonth: 88300,
        revenuePreviousWeek: 25000,

        revenuePreviousDay: 8000,
        grossRevenueAccThisYear: 300000,
        grossRevenuePreviousYear: 600000,
        
        revenueDaysLastweek : [ 5000, 9500,16000,10500,25000,15500,12000]
    },
    {
        name: "Nydalen",
        revenueAccThisYear: 700000,
        revenuePreviousYear: 1100000,
        revenuePreviousMonth: 90000,
        revenuePreviousWeek: 25000,

        revenuePreviousDay: 14000,

        grossRevenueAccThisYear: 500000,
        grossRevenuePreviousYear: 900000,
        
        revenueDaysLastweek : [ 10000, 13500,15000,14500,16000,25500,16000]
    },
    {
        name: "Grunerløkka",
        revenueAccThisYear: 400000,
        revenuePreviousYear: 700000,
        revenuePreviousMonth: 88000,
        revenuePreviousWeek: 80000,

        revenuePreviousDay: 11000,

        grossRevenueAccThisYear: 300000,
        grossRevenuePreviousYear: 500000,
        
        revenueDaysLastweek : [ 20000, 23500,30000,4500,15000,35500,15000]
    }
    ]

    const getAll = () => salesArray;
        
    /*funksjon for å hente ut totale-salg per dag for restaurantene */
    const getTotalperDay = function (day){
        let total = 0;
        total += salesArray[0].revenueDaysLastweek[day];
        total += salesArray[1].revenueDaysLastweek[day];
        total += salesArray[2].revenueDaysLastweek[day];
        total += salesArray[3].revenueDaysLastweek[day];
      
        total = (total/100000) * 100;
        total = total +"%"
        return total;
    }

    // kaller funksjonen med de ulike dagene.
    const getTotalMonday = getTotalperDay(0);
    const getTotalTuesday = getTotalperDay(1);
    const getTotalWednesday = getTotalperDay(2);
    const getTotalThursday = getTotalperDay(3);
    const getTotalFriday = getTotalperDay(4);
    const getTotalSaturday = getTotalperDay(5);
    const getTotalSunday = getTotalperDay(6);


    // funksjoner for å  hente ut totaltsalg (en value) for en og en avdeling, etter navn.


    const getAccRevenueThisYearByRestaurant = (name)  => {        
       let result = salesArray.filter( object => object.name.toLowerCase === name.toLowerCase);
       let resultFormatted = result[0].revenueAccThisYear; // filter laget ett array, så må hente ut denne verdien.
       return resultFormatted;
    
    };

    const getGrossRevenueThisYearByRestaurant = (name) =>{
        let result = salesArray.filter( object => object.name.toLowerCase === name.toLowerCase);
        let resultFormatted = result[0].grossRevenueAccThisYear; // filter laget ett array, så må hente ut denne verdien.
        return resultFormatted;
    }

    const getGrossRevenueLastYearByRestaurant = (name) => {
        let result = salesArray.filter( object => object.name.toLowerCase === name.toLowerCase);
        let resultFormatted = result[0].grossRevenuePreviousYear;
        return resultFormatted;
    }




    // funksjon som skal ta knappe-verdiene som parameter, (navn ,periode, category)

    const getRevenueByRestaurantAndPeriodAndCategory = (name,period, category)  => {        
        let restaurant = salesArray.filter( object => object.name.toLowerCase === name.toLowerCase);
        let revenueNumber = "";

        if(period === "this-year"){
             revenueNumber = restaurant[0].revenueAccThisYear;
        }

        else if(period === "last-year"){
             revenueNumber = restaurant[0].revenuePreviousYear;
        }

        else if(period === "last-month"){
            revenueNumber = restaurant[0].revenuePreviousMonth;
       }

        else if(period === "last-week"){
            revenueNumber = restaurant[0].revenuePreviousWeek;
        }

         // tester for category og returner deretter ca profitt.
        
        switch (category){
            case "ALL":
                return revenueNumber;
            case "PIZZA":
                return revenueNumber * 0.7;
            case "DRINKS":
                return revenueNumber * 0.2;
            case "SALADS":
                return revenueNumber  * 0.1;          
        }
     
     };


     console.log(getRevenueByRestaurantAndPeriodAndCategory("Bjørvika","last-month","PIZZA") ) ;



    
    return {getAll, getTotalMonday,getTotalTuesday, getTotalWednesday,getTotalThursday,getTotalFriday,getTotalSaturday,getTotalSunday,getAccRevenueThisYearByRestaurant,getGrossRevenueThisYearByRestaurant, getGrossRevenueLastYearByRestaurant, getRevenueByRestaurantAndPeriodAndCategory};


}())

export default SalesModule

