//const AirTemperature = document.getElementById('temperature').innerHTML;
//const WindSpeed = document.getElementById('wind').innerHTML;
let tempValue = document.getElementById('temperature');
let windValue = document.getElementById('wind');
let windChillValue = document.getElementById('wind-chill');
const main = async()=>{
    let forecast = await getForecast();
    const AirTemperature = forecast.temp;
    const WindSpeed = forecast.wind_speed;
    tempValue.innerHTML = AirTemperature;
    windValue.innerHTML = WindSpeed;
    console.log(forecast);
    console.log(AirTemperature);
    console.log(WindSpeed);
    if(AirTemperature <= 10 && WindSpeed >= 4.8){

        windChillValue.innerHTML = `${findWindChill(AirTemperature, WindSpeed).toFixed(2)}`;
    
    }
    else{
        windChillValue.innerHTML = "N/A";
    }
}


const findWindChill = (temp, speed) =>{
    let windChill = 13.12 + 0.6215*temp - 11.37*Math.pow(speed,0.16)+0.3965*temp*Math.pow(speed,0.16);
    return windChill;
}



const getForecast = async () =>{
    const city = "Vaughan"
    const apiKey ="WsNh4ewn9JOoxgu0wUBk9Q==5jCzODqPJVZIWKMI";
    const response = await fetch(`https://api.api-ninjas.com/v1/weather?city= + ${city}`,{
        method: "GET",
        headers: {
            
         'X-Api-Key': `${apiKey}`
    
        }
      });
    if (response.ok) {
        // the API will send us JSON...but we have to convert the response before we can use it
        // .json() also returns a promise...so we await it as well.
        forecast = await response.json();
        return forecast;
    }
}
main();