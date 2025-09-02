//Switch-Statements

function main(){

    let product = "Apfel";

    switch(product){

        case "Mehl":
            console.log("Mehl kostet 1€");
            break;
        case "Milch":
            console.log("Milch kostet 2€");
            break;
        case "Apfel":
        case "Birne":
            console.log("Früchte kosten 1€");
            break;
        default:
            console.log("Für dieses Produkt konnte kein Preis ermittelt werden");
    }

}


// Mit Integer
/*
function main(){

    let product = 10;

    switch(product){

        case 1:
            console.log("....kostet 1€");
            break;
        case 10:
            console.log("....kostet 2€");
            break;
        case 15:
        case 20:
            console.log("....kosten 1€");
            break;
        default:
            console.log("Für dieses Produkt konnte kein Preis ermittelt werden");
    }

}

*/