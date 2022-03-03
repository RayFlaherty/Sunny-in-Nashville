const button= document.getElementById("citySearch");
const selectedCityEl= document.getElementById("selectedCity");
const temperatureEl= document.getElementById('temperature')
const humidityEl= document.getElementById('humidity');
const windSpeedEl= document.getElementById('windspeed');
const uvIndxEl= document.getElementById('UVindex');
//day one forecast array
const dayOneEl= document.getElementById('dateOne');
const windOneEl= document.getElementById('windspeedOne');
const dayOneTempEl= document.getElementById('temperatureOne')
const humidityOneEl= document.getElementById('humidityOne')
//day two forecast array
const dayTwoEl= document.getElementById('dateTwo');
const windTwoEl= document.getElementById('windspeedTwo');
const dayTwoTempEl= document.getElementById('temperatureTwo')
const humidityTwoEl= document.getElementById('humidityTwo')
//day three forecast array
const dayThreeEl= document.getElementById('dateThree');
const windThreeEl= document.getElementById('windspeedThree');
const dayThreeTempEl= document.getElementById('temperatureThree')
const humidityThreeEl= document.getElementById('humidityThree')
//day four forecast array
const dayFourEl= document.getElementById('dateFour');
const windFourEl= document.getElementById('windspeedFour');
const dayFourTempEl= document.getElementById('temperatureFour')
const humidityFourEl= document.getElementById('humidityFour')
//day four forecast array
const dayFiveEl= document.getElementById('dateFive');
const windFiveEl= document.getElementById('windspeedFive');
const dayFiveTempEl= document.getElementById('temperatureFive')
const humidityFiveEl= document.getElementById('humidityFive')

const geoApi= '4f8c824ff4b607b560ffd96a74610907'


button.onclick= function cityLookUp() {
     
    var currentCity= city.value
    console.log(currentCity)
    var queryURL = "http://api.openweathermap.org/geo/1.0/direct?q="+currentCity+"&limit=&appid="+geoApi;
    fetch(queryURL)
    .then(function(response) {
        if (response.ok) {
            console.log(response);
            response.json().then(function(data){
                console.log(data)
                var name = data[0].name
                var state = data [0].state
                var lat = data[0].lat
                var lon = data[0].lon
                console.log(lat)
                console.log(lon)
                

                var currentWeather = "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&exclude=daily&appid="+geoApi;
                fetch(currentWeather)
                    .then(function(response){
                        if(response.ok){
                            console.log(response);
                            response.json().then(function(data){
                                console.log(data)
                                var currentTemp= data.current.temp
                                var humidity= data.current.humidity
                                var windSpeed= data.current.wind_speed
                                var uvIndex= data.current.uvi

                var fiveDayForecast= "https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid="+geoApi;
                    fetch(fiveDayForecast)
                    .then(function(response){
                        if (response.ok) {
                            console.log(response);
                            response.json().then(function(data){
                                console.log(data)
                                //next day
                                var dayOne= data.list[1].dt_txt
                                var dayOneTemp= data.list[1].main.temp
                                var dayOneWind=data.list[1].wind.speed 
                                var humidityOne=data.list[1].main.humidity
                                //day two
                                var dayTwo= data.list[9].dt_txt
                                var dayTwoTemp= data.list[9].main.temp
                                var dayTwoWind=data.list[9].wind.speed 
                                var humidityTwo=data.list[9].main.humidity
                                 //day three
                                 var dayThree= data.list[17].dt_txt
                                 var dayThreeTemp= data.list[17].main.temp
                                 var dayThreeWind=data.list[17].wind.speed 
                                 var humidityThree=data.list[17].main.humidity
                                  //day four
                                  var dayFour= data.list[26].dt_txt
                                  var dayFourTemp= data.list[26].main.temp
                                  var dayFourWind=data.list[26].wind.speed 
                                  var humidityFour=data.list[26].main.humidity
                                       //day five
                                  var dayFive= data.list[33].dt_txt
                                  var dayFiveTemp= data.list[33].main.temp
                                  var dayFiveWind=data.list[33].wind.speed 
                                  var humidityFive=data.list[33].main.humidity
                                
                                //day one display
                                dayOneEl.innerHTML= dayOne;
                                dayOneTempEl.innerHTML=  "Temp: " + k2f(dayOneTemp) +"&#176F";
                                windOneEl.innerHTML= "Wind Speed: "+ dayOneWind;
                                humidityOneEl.innerHTML= "Humidity: " + humidityOne + "%";

                                //day two display
                                dayTwoEl.innerHTML= dayTwo;
                                dayTwoTempEl.innerHTML=  "Temp: " + k2f(dayTwoTemp) +"&#176F";
                                windTwoEl.innerHTML= "Wind Speed: "+ dayTwoWind;
                                humidityTwoEl.innerHTML= "Humidity: " + humidityTwo + "%";

                                //day three display
                                dayThreeEl.innerHTML= dayThree;
                                dayThreeTempEl.innerHTML=  "Temp: " + k2f(dayThreeTemp) +"&#176F";
                                windThreeEl.innerHTML= "Wind Speed: "+ dayThreeWind;
                                humidityThreeEl.innerHTML= "Humidity: " + humidityThree + "%";

                                //day four display
                                dayFourEl.innerHTML= dayFour;
                                dayFourTempEl.innerHTML=  "Temp: " + k2f(dayFourTemp) +"&#176F";
                                windFourEl.innerHTML= "Wind Speed: "+ dayFourWind;
                                humidityFourEl.innerHTML= "Humidity: " + humidityFour + "%"

                                //day five display
                                dayFiveEl.innerHTML= dayFive;
                                dayFiveTempEl.innerHTML=  "Temp: " + k2f(dayFiveTemp) +"&#176F";
                                windFiveEl.innerHTML= "Wind Speed: "+ dayFiveWind;
                                humidityFiveEl.innerHTML= "Humidity: " + humidityFive + "%"



                            })
                           
                        }
                            
                        
                    })                
                           

        selectedCityEl.innerHTML = name + "," + state;
        temperatureEl.innerHTML= "Temp: " + k2f(currentTemp) +"&#176F";
        humidityEl.innerHTML="Humidity: " + humidity + "%";
        windSpeedEl.innerHTML="Wind Speed: " + windSpeed + " mph ";
        uvIndxEl.innerHTML="UV Index" + uvIndex;
        
        
        
                            })
                        }
                    })
            })
        }
    }
)}  

function k2f(K) {
    return Math.floor((K - 273.15) *1.8 +32);
}

//currentTempEl.innerHTML = "Temperature: " + k2f(response.data.main.temp) + " &#176F";
    // .then(data => console.log(data))
    
    // .catch(error => console.log(error))
    
    
    
// fetch(apiUrl)
// .then(function(response) {
//   // request was successful
//   if (response.ok) {
//     console.log(response);
//     response.json().then(function(data) {
//       console.log(data);
//       displayRepos(data, user);
//     });
//   } else {
//     alert("Error: " + response.statusText);
//   }


    // let queryURL="http://api.openweathermap.org/geo/1.0/direct?q="+city+"&limit=5&appid="+api;
    // fetch(queryURL)
    // .then(error)
    // .then((response)=>{
    //     console.log()
    //     return response.json();
        
    // })
    

