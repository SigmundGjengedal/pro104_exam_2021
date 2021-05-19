const EmployeesModules = (function () {

    const employeeInfo = [

        // Karl Johan
        { name : "Terje Hansen", homeaddress :"kongens gate 14", mail : "terjehansen@gyldnepizza.no", phone : "90515576", position :"Manager", employmentRate : "100%", salaryLevel : "4", departement : "Gyldne Pizza Karl Johan", employmentDate: "2012-01-01", employeeID : "KJ-TH", seniority : "9 years",image: "random.jpg" },
        
        { name : "Birger Nybø", homeaddress :"Veltres gate 11", mail : "birgernybo@gyldnepizza.no", phone : "40515573", position :"Sales", employmentRate : "100%", salaryLevel : "2", departement : "Gyldne Pizza Karl Johan", employmentDate: "2018-01-01", employeeID : "KJ-BN", seniority : "3 years" ,image: "random.jpg"  },

        { name : "Sissel Heimstad", homeaddress :"Velles vei 14b", mail : "sisselheimstad@gyldnepizza.no", phone : "99515576", position :"Sales", employmentRate : "80%", salaryLevel : "1", departement : "Gyldne Pizza Karl Johan", employmentDate: "2020-05-01", employeeID : "KJ-SH", seniority : "1 years" ,image: "random.jpg"  },
          
        // Bjørvika
        { name : "Sigmund Flakne", homeaddress :"Heimsgate 12b", mail : "sigmundflakne@gyldnepizza.no", phone : "45515574", position :"Manager", employmentRate : "100%", salaryLevel : "4", departement : "Gyldne Pizza Bjørvika", employmentDate: "2015-05-01", employeeID : "N-SF", seniority : "5 years" ,image: "random.jpg"  },

        { name : "Oshidi Baer", homeaddress :"Slotteveien 2c", mail : "oshidibaer@gyldnepizza.no", phone : "91515574", position :"Sales", employmentRate : "100%", salaryLevel : "2", departement : "Gyldne Pizza Bjørvika", employmentDate: "2015-05-01", employeeID : "N-OB", seniority : "5 years" ,image: "random.jpg"  },

        { name : "Vebjørn Steine", homeaddress :"Klampetrampa 2d", mail : "vebjørnsteine@gyldnepizza.no", phone : "44515574", position :"Sales", employmentRate : "50%", salaryLevel : "1", departement : "Gyldne Pizza Bjørvika", employmentDate: "2018-05-01", employeeID : "N-VS", seniority : "3 years" ,image: "random.jpg"  },

        // Nydalen
        { name : "Caroline Velle", homeaddress :"Steinsgata 3d", mail : "carolinevelle@gyldnepizza.no", phone : "98535574", position :"Manager", employmentRate : "100%", salaryLevel : "4", departement : "Gyldne Pizza Nydalen", employmentDate: "2014-02-01", employeeID : "B-CV", seniority : "7 years" ,image: "random.jpg"  },

        { name : "Shawan Safari", homeaddress :"Helleveien 3d", mail : "shawansafarie@gyldnepizza.no", phone : "98532574", position :"Sales", employmentRate : "100%", salaryLevel : "2", departement : "Gyldne Pizza Nydalen", employmentDate: "2014-02-01", employeeID : "B-SF", seniority : "7 years" ,image: "random.jpg"  },

        { name : "Sara Olsen", homeaddress :"Sellergata 3d", mail : "saraolsen@gyldnepizza.no", phone : "44532574", position :"Sales", employmentRate : "50%", salaryLevel : "1", departement : "Gyldne Pizza Nydalen", employmentDate: "2018-02-01", employeeID : "B-SO", seniority : "3 years" ,image: "random.jpg"  },

        // Grunerløkka
        { name : "Veljko Lundenes", homeaddress :"majorveien 5d", mail : "veljkolundenes@gyldnepizza.no", phone : "90532574", position :"Manager", employmentRate : "100%", salaryLevel : "4", departement : "Gyldne Pizza Grunerløkka", employmentDate: "2017-02-01", employeeID : "G-VL", seniority : "4 years" ,image: "random.jpg"  },

        { name : "Gunnar Olsen", homeaddress :"strømmensgate 21d", mail : "gunnarolsen@gyldnepizza.no", phone : "90587574", position :"Sales", employmentRate : "100%", salaryLevel : "2", departement : "Gyldne Pizza Grunerløkka", employmentDate: "2017-02-01", employeeID : "G-GO", seniority : "4 years" ,image: "random.jpg"  },

        { name : "Iselin Rasnes", homeaddress :"Osloveien 21d", mail : "iselinrasnes@gyldnepizza.no", phone : "90583374", position :"Sales", employmentRate : "50%", salaryLevel : "1", departement : "Gyldne Pizza Grunerløkka", employmentDate: "2018-02-01", employeeID : "G-IR", seniority : "3 years" ,image: "random.jpg"  },


    ];

    const getAllEmployees = () => employeeInfo;

    const getByPosition = (position) => {
        return employeeInfo.filter( employeeObject => employeeObject.position.toLowerCase === position);
    }

    const getByDepartement = (departement) => {
        return employeeInfo.filter( employeeObject => employeeObject.departement.toLowerCase === departement);
    }

    return {getAllEmployees,getByPosition,getByDepartement}; // disse er tilgjengelig utenfra. 


} () );

export default EmployeesModules;