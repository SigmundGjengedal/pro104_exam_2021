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
    }
    ]

    const getAll = () => salesArray;

    return {getAll};



}())

export default SalesModule