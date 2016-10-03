$(document).ready(function() {

$.getJSON('http://ipinfo.io', function(data){
  var city = data.city;
  var region = data.region;
  var country = data.country;
  var zipcode = data.postal;

  var getWeather = function(){
	var url = "HTTP://api.openweathermap.org/data/2.5/weather?zip="+zipcode+",us&APPID=2b16187d82ecabb9d5259af118f91199";
	$.getJSON(url, function(weather_data){
	  var tempF = Math.floor((((weather_data.main.temp)*9)/5)-459.67);
	  console.log(tempF);
	  $("#temp").append("<p>"+tempF+"</p>");
      })
	}

  getWeather();
})


//get weather info
//insert state outline and weather icons
});