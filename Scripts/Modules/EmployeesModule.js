const EmployeesModules = (function () {

        // Grunerløkka
    const grunerlokkaArray = [
        { name : "Marius Sunde",  mail : "mariussunde@gyldnepizza.no", phone : "90515576", position :"Manager", payGrade : "5", departement : "Grunerløkka"},
        { name : "Sigmund Gjerdal",  mail : "sigmundhansen@gyldnepizza.no", phone : "90515213", position :"Host", payGrade : "2", departement : "Grunerløkka"},
        { name : "Mikkel Amundsen",  mail : "mikkelamundsen@gyldnepizza.no", phone : "90515321", position :"Chef", payGrade : "3", departement : "Grunerløkka"},
        { name : "Caroline Olsen",  mail : "carolineolsen@gyldnepizza.no", phone : "90515111", position :"Souse Chef", payGrade : "3", departement : "Grunerløkka"},
        ];

        const getGrunerlokka = () =>  grunerlokkaArray;

        // Karl Johan
    const karlJohanArray = [
        { name : "Ole Ramberg",  mail : "oleramberg@gyldnepizza.no", phone : "90516123", position :"Manager", payGrade : "5", departement : "Karl Johan"},
        { name : "Tina Bråthen",  mail : "tinebråthen@gyldnepizza.no", phone : "90516222", position :"Hostess", payGrade : "2", departement : "Karl Johan"},
        { name : "Peter Mihajlovic",  mail : "petermihajlovic@gyldnepizza.no", phone : "90516333", position :"Chef", payGrade : "3", departement : "Karl Johan"},
        { name : "Kenneth Kristiansen",  mail : "kennethkristiansen@gyldnepizza.no", phone : "90516444", position :"Souse Chef", payGrade : "3", departement : "Karl Johan"},
        ];

          const getKarlJohan = () =>  karlJohanArray;

        // Nydalen
    const nydalenArray = [
        { name : "Rolando Gonzales",  mail : "rolandogonzales@gyldnepizza.no", phone : "90515576", position :"Manager", payGrade : "5", departement : "Nydalen"},
        { name : "Terje Hansen",  mail : "terjehansen@gyldnepizza.no", phone : "90515213", position :"Host", payGrade : "2", departement : "Nydalen"},
        { name : "Martin Amundsen",  mail : "martinamundsen@gyldnepizza.no", phone : "90515321", position :"Chef", payGrade : "3", departement : "Nydalen"},
        { name : "Kevin Olsen",  mail : "kevinolsen@gyldnepizza.no", phone : "90515111", position :"Souse Chef", payGrade : "3", departement : "Nydalen"},
    ]

          const getNydalen = () =>  nydalenArray;

        // Bjørvika
    const bjorvikaArray = [
        { name : "Kari Olsen",  mail : "kariolsen@gyldnepizza.no", phone : "40415576", position :"Manager", payGrade : "5", departement : "Bjørvika"},
        { name : "Veljko Premovic",  mail : "terjehansen@gyldnepizza.no", phone : "40415213", position :"Host", payGrade : "2", departement : "Bjørvika"},
        { name : "Unni Løche",  mail : "unniloeche@gyldnepizza.no", phone : "40415321", position :"Chef", payGrade : "3", departement : "Bjørvika"},
        { name : "Mario Luiggi",  mail : "marioluigi@gyldnepizza.no", phone : "40415111", position :"Souse Chef", payGrade : "3", departement : "Bjørvika"},
    ];

    const getBjorvika = () => bjorvikaArray;

    return {getBjorvika, getNydalen, getKarlJohan, getGrunerlokka};

} () );

export default EmployeesModules;
