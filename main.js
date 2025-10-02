// Funktionen

/*
function main(){
    printNumber(10);
}

function printNumber(x) {
    console.log(x);
}
*/

/*
function main(){            
    add();      // Ergebnis = 3 (Standartwerte aus der add Funktion)
    add(10);    // Ergebnis = 12 (10 + y Standartwert der add Funktion)
    add(5,3);   // Ergebnis = 8 (5+3..... Standartwerte werden nicht genutzt)
}

function add(x=1, y=2) {        // x=1, y=2  als Standartwerte
    let result = x + y;
    console.log(result);
}
*/

/*
let numbers = [
    7,
    48,
    23,
    9,
    45,
    67,
    99,
    1,
    20,
    77,
    94
]

let numbersTwo = [
    7,
    48,
    23,
    9,
    45,
    67,
    99,
    1,
    20,
    77,
    94
]

function main(){

    result = filter(numbers, 75);
    console.log(result);

    result = filter(numbersTwo, 30);
    console.log(result);

}

function filter(arrayToFilter, highestNumberAllowed){

    var filteredNumbers = [];

    for (let i = 0; i < arrayToFilter.length; i++) {

        if(arrayToFilter[i] <= highestNumberAllowed)
            filteredNumbers.push(arrayToFilter[i])
        
    }

    return filteredNumbers;
}
*/