
// Execution Context
let a = 10;

function calculate() {
    let b = 20;

    function add() {
        let c = 30;

        return a + b + c;
    }

    return add();
}

console.log(calculate());



// Hoisting
console.log(c); // response undefined
var c; // declaration initialized with undefined
// console.log(d); // Time Dead Zone (TDZ error) referance error
let d;

// console.log(e) // Time Dead Zone (TDZ error) referance error
const e = 10;

console.log(c); // response undefined

c = 10;

console.log(c);

// For functional hoisting = During the creation phase, JavaScript creates and initializes the function declaration.




// Lexical Scope
let name = "Yogesh";

function greet() {
    console.log(name);
}

greet();



let x = 10;

function outer() {
    let x = 20;

    function inner() {
        let x = 30;
        console.log(x);
    }

    inner();
}

outer();