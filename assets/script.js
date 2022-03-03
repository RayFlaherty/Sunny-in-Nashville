const button= document.getElementById("citySearch");
const selectedCityEl= document.getElementById("selectedCity");
const quickLinksEl=document.getElementById("quickLinks");
const geoApi= '4f8c824ff4b607b560ffd96a74610907'
let searchHistory = JSON.parse(localStorage.getItem("search")) || [];

console.log(searchHistory);
//current forecast array
const temperatureEl= document.getElementById('temperature');
const humidityEl= document.getElementById('humidity');
const windSpeedEl= document.getElementById('windspeed');
const uvIndxEl= document.getElementById('UVindex');
const weatherPicEl= document.getElementById('currentPic');
//day one forecast array
const dayOneEl= document.getElementById('dateOne');
const windOneEl= document.getElementById('windspeedOne');
const dayOneTempEl= document.getElementById('temperatureOne');
const humidityOneEl= document.getElementById('humidityOne');
const dayOnePicEl= document.getElementById('dayOnePic');
//day two forecast array
const dayTwoEl= document.getElementById('dateTwo');
const windTwoEl= document.getElementById('windspeedTwo');
const dayTwoTempEl= document.getElementById('temperatureTwo');
const humidityTwoEl= document.getElementById('humidityTwo');
const dayTwoPicEl= document.getElementById('dayTwoPic');
//day three forecast array
const dayThreeEl= document.getElementById('dateThree');
const windThreeEl= document.getElementById('windspeedThree');
const dayThreeTempEl= document.getElementById('temperatureThree');
const humidityThreeEl= document.getElementById('humidityThree');
const dayThreePicEl= document.getElementById('dayThreePic');
//day four forecast array
const dayFourEl= document.getElementById('dateFour');
const windFourEl= document.getElementById('windspeedFour');
const dayFourTempEl= document.getElementById('temperatureFour');
const humidityFourEl= document.getElementById('humidityFour');
const dayFourPicEl= document.getElementById('dayFourPic');
//day four forecast array
const dayFiveEl= document.getElementById('dateFive');
const windFiveEl= document.getElementById('windspeedFive');
const dayFiveTempEl= document.getElementById('temperatureFive');
const humidityFiveEl= document.getElementById('humidityFive');
const dayFivePicEl=document.getElementById('dayFivePic');




button.onclick= function cityLookUp() {
     
    var currentCity= city.value
    //console.log(currentCity)
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
                // console.log(lat)
                // console.log(lon)
                

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
                                let weatherPic = data.current.weather[0].icon;

                                    //current forecast
                                selectedCityEl.innerHTML = name + "," + state;
                                temperatureEl.innerHTML= "Temp: " + k2f(currentTemp) +"&#176F";
                                humidityEl.innerHTML="Humidity: " + humidity + "%";
                                windSpeedEl.innerHTML="Wind Speed: " + windSpeed + " mph ";
                                uvIndxEl.innerHTML="UV Index" + uvIndex;
                                weatherPicEl.setAttribute("src","https://openweathermap.org/img/wn/" + weatherPic + "@2x.png");
                                // quickLinksEl.innerHTML= name




                var fiveDayForecast= "https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid="+geoApi;
                    fetch(fiveDayForecast)
                    .then(function(response){
                        if (response.ok) {
                            console.log(response);
                            response.json().then(function(data){
                                console.log(data)
                                
                                
                                //next day
                                var dayOne= data.list[7].dt_txt
                                var dayOneTemp= data.list[7].main.temp_max
                                var dayOneWind=data.list[7].wind.speed 
                                var humidityOne=data.list[7].main.humidity
                                let weatherPicOne = data.list[7].weather[0].icon;
                                //day two
                                var dayTwo= data.list[15].dt_txt
                                var dayTwoTemp= data.list[15].main.temp
                                var dayTwoWind=data.list[15].wind.speed 
                                var humidityTwo=data.list[15].main.humidity
                                let weatherPicTwo = data.list[15].weather[0].icon;
                                 //day three
                                 var dayThree= data.list[23].dt_txt
                                 var dayThreeTemp= data.list[23].main.temp
                                 var dayThreeWind=data.list[23].wind.speed 
                                 var humidityThree=data.list[23].main.humidity
                                 let weatherPicThree = data.list[23].weather[0].icon;
                                  //day four
                                  var dayFour= data.list[31].dt_txt
                                  var dayFourTemp= data.list[31].main.temp
                                  var dayFourWind=data.list[31].wind.speed 
                                  var humidityFour=data.list[31].main.humidity
                                  let weatherPicFour = data.list[31].weather[0].icon;
                                       //day five
                                  var dayFive= data.list[39].dt_txt
                                  var dayFiveTemp= data.list[39].main.temp
                                  var dayFiveWind=data.list[39].wind.speed 
                                  var humidityFive=data.list[39].main.humidity
                                  let weatherPicFive = data.list[39].weather[0].icon;
                                
                                //day one display
                                dayOneEl.innerHTML= new Date(dayOne).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})
                                dayOneTempEl.innerHTML=  "Temp: " + k2f(dayOneTemp) +"&#176F";
                                windOneEl.innerHTML= "Wind Speed: "+ dayOneWind;
                                humidityOneEl.innerHTML= "Humidity: " + humidityOne + "%";
                                dayOnePicEl.setAttribute("src","https://openweathermap.org/img/wn/" + weatherPicOne + "@2x.png");

                                //day two display
                                dayTwoEl.innerHTML= new Date(dayTwo).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})
                                dayTwoTempEl.innerHTML=  "Temp: " + k2f(dayTwoTemp) +"&#176F";
                                windTwoEl.innerHTML= "Wind Speed: "+ dayTwoWind;
                                humidityTwoEl.innerHTML= "Humidity: " + humidityTwo + "%";
                                dayTwoPicEl.setAttribute("src","https://openweathermap.org/img/wn/" + weatherPicTwo + "@2x.png");

                                //day three display
                                dayThreeEl.innerHTML= new Date(dayThree).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})
                                dayThreeTempEl.innerHTML=  "Temp: " + k2f(dayThreeTemp) +"&#176F";
                                windThreeEl.innerHTML= "Wind Speed: "+ dayThreeWind;
                                humidityThreeEl.innerHTML= "Humidity: " + humidityThree + "%";
                                dayThreePicEl.setAttribute("src","https://openweathermap.org/img/wn/" + weatherPicThree + "@2x.png");

                                //day four display
                                dayFourEl.innerHTML= new Date(dayFour).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})
                                dayFourTempEl.innerHTML=  "Temp: " + k2f(dayFourTemp) +"&#176F";
                                windFourEl.innerHTML= "Wind Speed: "+ dayFourWind;
                                humidityFourEl.innerHTML= "Humidity: " + humidityFour + "%"
                                dayFourPicEl.setAttribute("src","https://openweathermap.org/img/wn/" + weatherPicFour + "@2x.png");

                                //day five display
                                dayFiveEl.innerHTML= new Date(dayFive).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})
                                dayFiveTempEl.innerHTML=  "Temp: " + k2f(dayFiveTemp) +"&#176F";
                                windFiveEl.innerHTML= "Wind Speed: "+ dayFiveWind;
                                humidityFiveEl.innerHTML= "Humidity: " + humidityFive + "%"
                                dayFivePicEl.setAttribute("src","https://openweathermap.org/img/wn/" + weatherPicFive + "@2x.png");
                            })
                            setQuickLink();  
                        }
                    })          
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

function setQuickLink() {
    quickLinksEl.innerHTML = "";
    for (let i=0; i<searchHistory.length; i++) {
        const linkItem = document.createElement("input");
        linkItem.setAttribute("type","text");
        linkItem.setAttribute("readonly",true);
        linkItem.setAttribute("class", "form-control d-block bg-white");
        linkItem.setAttribute("value", searchHistory[i]);
        linkItem.addEventListener("click",function() {
            getWeather(linkItem.value);
        })
        quickLinksEl.append(linkItem);
    }
}

