const RestaurantsModule = ( function() {

    const restaurantsInfoArray = [
        {
            name: "Gyldne Pizza Karl Johan",
            manager: "Terje Hansen",
            adress: "Karl Johansgate 42",
            phoneNr: "+4724242424",
            eMail: "karljohan@gp.no",
            openingHours: "Mon-fri: 14:00 - 22:00. Sat-Sun: 12:00 - 21:00",
            nmbrOfEmployees: 3
        },
        {
            name: "Gyldne Pizza Bjørvika",
            manager: "Sigmund Flakne",
            adress: "Bjørvikagata 34, 0444 Oslo",
            phoneNr: "+4723232323",
            eMail: "bjorvika@gp.no",
            openingHours: "Mon-fri: 14:00 - 22:00. Sat-Sun: 12:00 - 21:00" ,
            nmbrOfEmployees: 3
        },
        {
            name: "Gyldne Pizza Nydalen",
            manager: "Caroline Velle",
            adress: "Nydalenveien 59",
            phoneNr: "+4712131415",
            eMail: "nydalen@gp.no",
            openingHours: "Mon-fri: 14:00 - 22:00. Sat-Sun: 12:00 - 21:00",
            nmbrOfEmployees: 3
        },
        {
            name: "Gyldne Pizza Grunerløkka",
            manager: "Veljko Lundenes",
            adress: "Ryes Plass 42",
            phoneNr: "+4755554444" ,
            eMail: "grunerlokka@gp.no",
            openingHours: "Mon-fri: 14:00 - 22:00. Sat-Sun: 12:00 - 21:00",
            nmbrOfEmployees: 3
        }
     ]

    const getAll = () => restaurantsInfoArray;

    return {getAll};

}())

export default RestaurantsModule