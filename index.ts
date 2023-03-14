//Guide
//Typescript compiles code into javascript and helps catchs bugs and make your code more robust.
//To compile.. run "tsc nameoffile" in command line
//This will compile code to index.js but in default javascript es3 so variables will be stored using "var"
//run "tsc --init" to view tsconfig.json file. 
//To compile code to index using es7 run "tsc" in command line
//To automatically compile run "tsc --watch" in command line

// basic types
let age: number = 29;
let color: string = "red";
let city: string = "Chula Vista"
let isAuthenticated: boolean = false;
let loggedIn: any = false; // you can use "any" to use any type but isn't best practice to use too much. 

// arrays
let cars: string[] = ["Porsche", "Lexus", "Toyota", "Tesla", "BMW"]; // string[] how you declare array of strings.
let arr: any[] = [10, "cat", true];  //any[] how you declare array of any type
let cities: string[][] = [["los angeles"], ["miami"], ["new york"]] // how you declare array of arrays with strings.

// tuple
let employee: [number, string] = [1, "jack"]; // tuples only have two values
let employess: [number, string][] = [ // array of tuples
    [1, "jack"],
    [2, "phil"],
    [3, "pete"],
]

// objects
let person: {
    name: string,
    company: string,
} = {
    name: "Adam",
    company: "Lyft",
}

// custom types
type Car = {
    brand: string,
    year: number,
}

let car1: Car = {
    brand: "Lexus",
    year: 2023,
}

// interface
interface Car2 {
    brand: string,
    year: number
}

let newCar: Car2 = {
    brand: "Porsche",
    year: 2023
}

// union | lets variable hold more than 1 value
let x: string | number = 30; // value is string or | number

// combining uinions and type
type occupation = "employed" | "student";
let jackOccupation: occupation = "student";

// type assertion
let y: any = "string";
y = <number> 22;

// functions in typescript
function add(x: number, y: number): number {
   return x + y
}

function sayHi(): void { // add void if function doesn't return anything.
    console.log("Hi")
}

// generics
function copyArr<T>(arr: T[]): T[] {
    return [...arr]
}

let numCopy = copyArr<number>([1,2,3]);
let strCopy = copyArr<string>(["1", "2", "3"]);

// enums
enum eyeColor {
    brown = "common eye color",
    blue = "rare eye color",
    green = "very rare eye color"
}

interface Student {
    name: string,
    age: number,
    eyeColor: eyeColor
}

function displayStudent( student: Student): void {
  const info: string = student.name + "\n" + student.age + "\n" + student.eyeColor
  document.body.innerText = info
}

displayStudent({
    name: "Paul",
    age: 22,
    eyeColor: eyeColor.brown
})
