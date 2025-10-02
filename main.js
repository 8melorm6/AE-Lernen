// Aufgabe 2 Teil 2

/* 
Erstelle ein Array mit 5 Studenten.
Jeder Student besteht aus 'Name', 'Matrikelnummer', 'NC'
*/

let studenten = [

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
        
        totalNC += student.NC;

    }

    let averageNC = totalNC / studenten.length;
    console.log("NC Durchschnitt: " + averageNC);

}

function addStudent(){

    let name = document.getElementById("inputName").value;
    let matrikel = parseInt(document.getElementById("inputMatrikel").value);
    let nc = parseFloat(document.getElementById("inputNC").value);
    
    let student = {
        "Name": name,
        "Matrikelnummer": matrikel,
        "NC": nc
    }

    studenten.push(student);
    console.log(studenten);

}


// Hinweis: Funktion aufrufen (invoke)