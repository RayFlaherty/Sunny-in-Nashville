var requestUrl="api.openweathermap.org/data/2.5/weather?q="+ city + "&appid=" +APIkey;
var APIkey="78f98fdd8c2f3020975fd2b66a14d37d";
var city="";

fetch(requestUrl)

citySearch.onclick=function(){

    var city=document.getElementById("city").value
    var city=console.log(city)

}