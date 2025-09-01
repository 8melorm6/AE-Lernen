function main(){
    let input = document.getElementById("inputColor")
    let color = input.value
    let lowerColorName = color.toLowerCase()

if(lowerColorName == "grün"){
    alert("Du darfst fahren")
} else if(lowerColorName == "orange"){
    alert("Du darfst anfahren oder musst bremsen")
} else if(lowerColorName == "rot"){
    alert("Du musst halten")
} else {
    alert("Keine gültige Ampel-Farbe eingetragen")
}
}

/* Ausgelagerte (Globale) Variablen

    let input
    let color
    let lowerColorName

function main(){
    input = document.getElementById("inputColor")
    color = input.value
    lowerColorName = color.toLowerCase()

if(lowerColorName == "grün"){
    alert("Du darfst fahren")
} else if(lowerColorName == "orange"){
    alert("Du darfst anfahren oder musst bremsen")
} else if(lowerColorName == "rot"){
    alert("Du musst halten")
} else {
    alert("Keine gültige Ampel-Farbe eingetragen")
}
}

*/