const {add,displayCars,remove,update,updateMany} =require("../Controller/cars-controller.js");


// added newCar

const newCar = {
    
    model:"Dodger",
    manufacturingYear:2020,
    color:"white",
    cost:6000,
    carOwner:"Ines IKIREZI",
};

// car to be updated

const toBeUpdated={
    plateNumber:"RAA123X",
    model:"Mercedes",
    manufacturingYear:2015,
    color:"grey",
    cost:"toBeUpdated",
    carOwner:"Ian Robin SENYAMWUZUZA",
    
};

// updateMany elements

// const result= updateMany(plateNumberToUpdateMany, updateProperties);


// const toBeUpdatedMany={

    // plateNumber:"RAA123X",
    // model:"Mercedes",
    // manufacturingYear:2015,
    // color:"toBeUpdatedMany",
    // cost:1500,
    // carOwner:"toBeUpdatedMany",
// };







add(newCar);
displayCars();
remove("RAA123X");
update ("RAA123X","cost",1500);
updateMany("RAA123X","carOwner","SENYA Robs","color","dark blue");

