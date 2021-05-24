const SalesModule = ( function (){

    const salesArray = [
    {
        name: "Restaurant 1",
        revenuePreviousYear: 412345,
        revenueAccThisYear: 80123,
        revenuePreviousMonth: 15123,
        revenuePreviousWeek: 4512,
        revenuePreviousDay: 1212,
        grossRevenuePreviousYear: 61234,
        grossRevenueAccThisYear: 8345,
        revenueDaysLastweek : [ 7000, 8500,9000,23500,11000,15500,26000]
    },
    {
        name: "Restaurant 2",
        revenuePreviousYear: 605042,
        revenueAccThisYear: 96234,
        revenuePreviousMonth: 18300,
        revenuePreviousWeek: 7543,
        revenuePreviousDay: 1905,
        grossRevenuePreviousYear: 66400,
        grossRevenueAccThisYear: 9954,
        revenueDaysLastweek : [ 5000, 9500,16000,10500,25000,15500,12000]
    },
    {
        name: "Restaurant 3",
        revenuePreviousYear: 450643,
        revenueAccThisYear: 86321,
        revenuePreviousMonth: 16924,
        revenuePreviousWeek: 4989,
        revenuePreviousDay: 1590,
        grossRevenuePreviousYear: 72450,
        grossRevenueAccThisYear: 8874,
        revenueDaysLastweek : [ 10000, 13500,15000,24500,16000,25500,16000]
    },
    {
        name: "Restaurant 4",
        revenuePreviousYear: 290543,
        revenueAccThisYear: 60455,
        revenuePreviousMonth: 11981,
        revenuePreviousWeek: 3799,
        revenuePreviousDay: 890,
        grossRevenuePreviousYear: 39567,
        grossRevenueAccThisYear: 5298,
        revenueDaysLastweek : [ 20000, 23500,30000,14500,15000,35500,15000]
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

    const getTotalMonday = getTotalperDay(0);
    const getTotalTuesday = getTotalperDay(1);
    const getTotalWednesday = getTotalperDay(2);
    const getTotalThursday = getTotalperDay(3);
    const getTotalFriday = getTotalperDay(4);
    const getTotalSaturday = getTotalperDay(5);
    const getTotalSunday = getTotalperDay(6);


    
    return {getAll, getTotalMonday,getTotalTuesday, getTotalWednesday,getTotalThursday,getTotalFriday,getTotalSaturday,getTotalSunday};


}())

export default SalesModule