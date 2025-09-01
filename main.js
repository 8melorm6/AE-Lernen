//Blitzer

function main(){
    let inputMaxSpeed = document.getElementById("maxSpeed")
    let inputSpeed = document.getElementById("speed")
    let inputDir = document.getElementById("dir")

    let maxSpeed = Number(inputMaxSpeed.value)
    let speed = Number(inputSpeed.value)
    let isFacing = inputDir.checked

    let maxSpeedWithOffset = Number(maxSpeed + ((maxSpeed/100)*10))
    console.log(maxSpeedWithOffset)

    if(speed > maxSpeedWithOffset && isFacing == true){
        alert("Du wurdest geblitzt")
    } 

}