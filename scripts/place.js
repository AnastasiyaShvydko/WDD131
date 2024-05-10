const AirTemperature = document.getElementById('temperature').innerHTML;
const WindSpeed = document.getElementById('wind').innerHTML;
let windChillValue = document.getElementById('wind-chill');
console.log(AirTemperature);
console.log(WindSpeed);
const findWindChill = (temp, speed) =>{
    let windChill = 13.12 + 0.6215*temp - 11.37*Math.pow(speed,0.16)+0.3965*temp*Math.pow(speed,0.16);
    return windChill;
}

if(AirTemperature <= 10 && WindSpeed >= 4.8){

    windChillValue.innerHTML = `${findWindChill(AirTemperature, WindSpeed).toFixed(2)}`;

}
else{
    windChillValue.innerHTML = "N/A";
}