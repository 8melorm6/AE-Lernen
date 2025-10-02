// Aufgabe

/* 
Erstelle ein Array mit 5 Studenten.
Jeder Student besteht aus 'Name', 'Matrikelnummer', 'NC'
*/

let studenten = [
    {name: "Michael", matrikelnummer: 1, nc: 2},
    {name: "Hans", matrikelnummer: 2, nc: 3.5},
    {name: "Jannick", matrikelnummer: 3, nc: 1.5},
    {name: "Klaus", matrikelnummer: 4, nc: 1.0},
    {name: "Maria", matrikelnummer: 5, nc: 2.4}
]

/* 
Erstelle eine Funktion, die mit Hilfe einer Schleife
jeden Studenten in die Konsole ausgibt und den NC
aller Studenten summiert, um einen Durchschnitt zu erhalten.
(Durchschnitt = Totale Summe / Anzahl)
*/

function ausgabeUndDurchschnitt() {

    let totalNC = 0;

    for (let i = 0; i < studenten.length; i++) {

        let student = studenten[i];
        console.log(student);
        
        totalNC += student.nc;

    }

    let averageNC = totalNC / studenten.length;
    console.log("NC Durchschnitt: " + averageNC);

}


// Hinweis: Funktion aufrufen (invoke)
