"use strict";
//Guide
//Typescript compiles code into javascript and helps catchs bugs and make your code more robust.
//To compile.. run "tsc nameoffile" in command line
//This will compile code to index.js but in default javascript es3 so variables will be stored using "var"
//run "tsc --init" to view tsconfig.json file. 
//To compile code to index using es7 run "tsc" in command line
//To automatically compile run "tsc --watch" in command line
// basic types
let age = 29;
let color = "red";
let city = "Chula Vista";
let isAuthenticated = false;
let loggedIn = false; // you can use "any" to use any type but isn't best practice to use too much. 
// arrays
let cars = ["Porsche", "Lexus", "Toyota", "Tesla", "BMW"]; // string[] how you declare array of strings.
let arr = [10, "cat", true]; //any[] how you declare array of any type
let cities = [["los angeles"], ["miami"], ["new york"]]; // how you declare array of arrays with strings.
// tuple
let employee = [1, "jack"]; // tuples only have two values
let employess = [
    [1, "jack"],
    [2, "phil"],
    [3, "pete"],
];
// objects
let person = {
    name: "Adam",
    company: "Lyft",
};
let car1 = {
    brand: "Lexus",
    year: 2023,
};
let newCar = {
    brand: "Porsche",
    year: 2023
};
// union | lets variable hold more than 1 value
let x = 30; // value is string or | number
let jackOccupation = "student";
// type assertion
let y = "string";
y = 22;
// functions in typescript
function add(x, y) {
    return x + y;
}
function sayHi() {
    console.log("Hi");
}
// generics
function copyArr(arr) {
    return [...arr];
}
let numCopy = copyArr([1, 2, 3]);
let strCopy = copyArr(["1", "2", "3"]);
// enums
var eyeColor;
(function (eyeColor) {
    eyeColor["brown"] = "common eye color";
    eyeColor["blue"] = "rare eye color";
    eyeColor["green"] = "very rare eye color";
})(eyeColor || (eyeColor = {}));
function displayStudent(student) {
    const info = student.name + "\n" + student.age + "\n" + student.eyeColor;
    document.body.innerText = info;
}
displayStudent({
    name: "Paul",
    age: 22,
    eyeColor: eyeColor.brown
});
