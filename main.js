// Schleifen (Loops)

function main(){

// -----------------------------------------------------------------
// ---------------------------for-----------------------------------
// -----------------------------------------------------------------

/*---------------------------------------------------------------------
let names = ["Peter", "Jannick", "Maria"];  
// Ein Array (Liste) mit drei Zeichenketten: Index 0="Peter", 1="Jannick", 2="Maria".

for (let i = 0; i < names.length; i++) {  
    // Startwert: i = 0
    // Bedingung: Schleife läuft solange i < names.length (3).
    // i wird nach jedem Durchlauf um 1 erhöht.

    console.log("Index: " + i + " Name: " + names[i]);  
    // Gibt eine Zeichenkette aus, die Index und Wert im Array zeigt.
    // Bei i=0 -> "Index: 0 Name: Peter"
    // Bei i=1 -> "Index: 1 Name: Jannick"
    // Bei i=2 -> "Index: 2 Name: Maria"
}
---------------------------------------------------------------------*/

/*---------------------------------------------------------------------
let revenue = [500, 300, 200, 599, 834, 573, 293, 482];  
// Ein Array mit Zahlen (Umsätze).

let totalRevenue = 0;  
// Variable für die Summe aller Umsätze, Startwert 0.

for (let i = 0; i < revenue.length; i++) {  
    // Startwert: i = 0
    // Bedingung: Schleife läuft solange i < revenue.length (8).
    // i wird nach jedem Durchlauf um 1 erhöht.

    totalRevenue += revenue[i];  
    // Kurzform für: totalRevenue = totalRevenue + revenue[i]
    // Der aktuelle Umsatzwert wird zur Gesamtsumme addiert.

    console.log(totalRevenue);  
    // Gibt die Zwischensumme nach jeder Addition aus.
}
console.log("Total-Revenue: " + totalRevenue);  
// Am Ende wird die Gesamtsumme aller Umsätze ausgegeben.
---------------------------------------------------------------------*/

/*---------------------------------------------------------------------
// Array mit mehreren Objekten
let cars = [
    {
        "brand": "Mercedes",
        "age": 10
    },
    {
        "brand": "VW",
        "age": 5
    },
    {
        "brand": "Toyota",
        "age": 3
    }
]

// Geht alle Elemente des Arrays durch.
    // Bei jedem Durchlauf ist 'car' ein komplettes Objekt.
    // 1. Durchlauf: car = { brand: "Mercedes", age: 10 }
    // 2. Durchlauf: car = { brand: "VW", age: 5 }
    // 3. Durchlauf: car = { brand: "Toyota", age: 3 }
for(let car of cars){

    if(car.brand == "Mercedes"){
        console.log(car);
    } else {
        console.log("Auto ist kein Mercedes");
    } 
}
---------------------------------------------------------------------*/

// -----------------------------------------------------------------
// ------------------------(do)while------------------------------------
// -----------------------------------------------------------------

/*-----------------------------------------------------------------
let counter = 0;

while (counter < 100){
    console.log(counter);
    counter++;
}


//  do {
//    console.log(counter);
//  } while(counter <100);


-----------------------------------------------------------------------*/

// -----------------------------------------------------------------
// ------------------------nested loops----------------------------------
// -----------------------------------------------------------------

/*-----------------------------------------------------------------
var days = 7;
var weeks = 5;

for (let i = 1; i <= weeks; i++) {

    console.log("Woche: " + i);

    for(let j = 1; j <= days; j++)
        console.log("Tag: " + j + " Woche " + i);
}

-----------------------------------------------------------------------*/

}
