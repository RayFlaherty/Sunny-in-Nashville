const button= document.getElementById("citySearch");
const api= "78f98fdd8c2f3020975fd2b66a14d37d";
var city= document.getElementById("city");
var error = (response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

button.onclick= function cityLookUp() {
    console.log(city.value)

    let queryURL="http://api.openweathermap.org/geo/1.0/direct?q="+city+"&limit=5&appid="+api;
    fetch(queryURL)
    .then(error)
    .then((response)=>{
        console.log()
        return response.json();
        
    })
    
}
