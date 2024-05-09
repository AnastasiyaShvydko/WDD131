const AirTemperature = parseInt(document.getElementById('temperature').value);
const WindSpeed = parseInt(document.getElementById('wind').value);
let windChillValue = document.getElementById('wind-chill');

const findWindChill = (temp, speed) =>{
    let windChill = 13.12 + 0.6215*temp - 11.37*Math.pow(speed,0.16)+0.3965*temp*Math.pow(speed,0.16);
    return windChill;
}

if(AirTemperature <= 10 && WindSpeed >= 4.8){

    windChillValue.value = `${findWindChill(AirTemperature, WindSpeed).toFixed(2)}`;

}
else{
    windChillValue.value = "N/A";
}