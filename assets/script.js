const button= document.getElementById("citySearch");
const geoApi= '4f8c824ff4b607b560ffd96a74610907'


button.onclick= function cityLookUp() {
     console.log(city.value)
    var queryURL = "http://api.openweathermap.org/geo/1.0/direct?q="+city.value+"&limit=&appid="+geoApi;
    axios.get(queryURL)
    .then(function(response) {
        if (response.ok) {
            console.log(response);
            response.json().then(function(data){
                console.log(data)
                let lat = response.data.lat;
                let lon = response.data.lon;

                console.log(lat)
                console.log(lon)
            })
        }
    }
)}  
    // .then(response => response.json())
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
    

