const {cars} = require ("../Database/db.js");


/*Array.from({ length: 3 }, ...): Creates an array with three elements.
String.fromCharCode(...): Converts a Unicode value to a character. Here, it generates a random uppercase letter by adding 65 (the ASCII code for 'A') to a random number between 0 and 25.*/

function generateRandomPlateNumber() {
    const letters = Array.from({ length: 3 }, () =>
      String.fromCharCode(Math.floor(Math.random() * 26) + 65)
    ).join("");

     /* Math.random() * 1000: Generates a random floating-point number between 0 (inclusive) and 1000 (exclusive).
Math.floor(...): Rounds the floating-point number down to the nearest integer.
.toString(): Converts the number to a string.
.padStart(3, "0"): Pads the string with leading zeros to ensure a minimum length of 3 characters.*/

const numbers = Math.floor(Math.random() * 1000).toString().padStart(3, "0");

  return `${letters}${numbers}`;
}

// add newCar function

const add =(newCar) =>{
    
    newCar.plateNumber = generateRandomPlateNumber();
    cars.push(newCar);
    console.log("\nAdded new car\n");
    console.log(cars);
};

// display cars function


const displayCars = () =>{
    console.log("\nList of cars\n");
    console.log(cars);
};

// remove cars function

const remove = (plateNumber) =>{
    var exists = cars.find(ele=>ele.plateNumber==plateNumber);
    if (!exists){
        console.log("\nCar not found\n");
       
    }
    else{
        var index=cars.indexOf(plateNumber);
        cars.splice(index,1);
        console.log("\nRemoved car\n");
        console.log(cars);  
        
    }
    
};

// update cars function


const update = (plateNumber,key,value)=>{


    var exists = cars.find(ele=>ele.plateNumber==plateNumber);
    if (!exists){
        console.log("\nCar not found\n");
       
    }
    else{
        var index=cars.indexOf(exists);
        cars[key]=value;
        console.log("\nUpdated car\n");
        console.log(cars);  
        
    }
};


// update many element function


const updateMany = (plateNumber,obj)=>{
    var exists = cars.find(ele=>ele.plateNumber==plateNumber);
    if (!exists){
        console.log("\nCar not found\n");
       
    }
    else{
        for (const key in obj){
            exists[key]=obj[key];
        }
        
        console.log("\nUpdated car\n");
        console.log(cars);  
        
    }
};





    
    




module.exports ={
    add,
    displayCars,
    remove,
    update,
    updateMany
};