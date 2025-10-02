// Funktionen

// Arrow-Funktion
let x = 5;
let y = 3;

function main(){
    let result = print("Hallo Welt");
    console.log(result);
    console.log(multiply(x, y));
}

let print = (str) => {
    console.log(str);
    return "String was " + str;
}

let multiply = (x,y) => x * y;


/*

// normale Funktion

function add(a, b) {
    return a + b;
}

// gleiche Funktion, aber kürzer

const add = (a, b) => a + b;

*/