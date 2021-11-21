
fetch("https://us-zip-code-information.p.rapidapi.com/?zipcode=30043", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "us-zip-code-information.p.rapidapi.com",
		"x-rapidapi-key": "ec4cfd55ddmshf228a755d18ec45p157fafjsn7e5d9480e268"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

citySearch.onclick=function(){

    var city=document.getElementById("city").value
    var city=console.log(city)

}