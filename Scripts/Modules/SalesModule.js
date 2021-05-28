const SalesModule = ( function (){

    const salesArray = [
    {
        name: "Bjørvika",
        revenueAccThisYear: 610000,
        revenuePreviousYear: 990000,
        revenuePreviousMonth: 190000,
        revenuePreviousWeek: 35000,

        revenuePreviousDay: 12000,
        grossRevenueAccThisYear: 500000,
        grossRevenuePreviousYear: 700000,

        revenueDaysLastweek : [ 7000, 8500,9000,23500,11000,15500,26000]
    },
    {
        name: "Nydalen",
        revenueAccThisYear: 530000,
        revenuePreviousYear: 800800,
        revenuePreviousMonth: 150000,
        revenuePreviousWeek: 45400,

        revenuePreviousDay: 8000,
        grossRevenueAccThisYear: 300000,
        grossRevenuePreviousYear: 600000,
        
        revenueDaysLastweek : [ 5000, 9500,16000,10500,25000,15500,12000]
    },
    {
        name: "Grunerløkka",
        revenueAccThisYear: 710000,
        revenuePreviousYear: 911000,
        revenuePreviousMonth: 130000,
        revenuePreviousWeek: 55500,

        revenuePreviousDay: 14000,

        grossRevenueAccThisYear: 500000,
        grossRevenuePreviousYear: 900000,
        
        revenueDaysLastweek : [ 10000, 13500,15000,14500,16000,25500,16000]
    },
    {
        name: "Karl-Johan",
        revenueAccThisYear: 420000,
        revenuePreviousYear: 754000,
        revenuePreviousMonth: 125000,
        revenuePreviousWeek: 42300,

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



    // funksjon som skal ta knappe-verdiene som parameter, (navn ,periode, category)

    const getRevenueByRestaurantAndPeriodAndCategory = (name,period, category)  => {        
        let restaurant = salesArray.filter( object => object.name=== name);
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
            case "all":
                return revenueNumber;
            case "pizza":
                return revenueNumber * 0.7;
            case "drinks":
                return revenueNumber * 0.2;
            case "salads":
                return revenueNumber  * 0.1;          
        }
     
     };


    
    return {getAll, getTotalMonday,getTotalTuesday, getTotalWednesday,getTotalThursday,getTotalFriday,getTotalSaturday,getTotalSunday, getRevenueByRestaurantAndPeriodAndCategory};


}())

export default SalesModule

