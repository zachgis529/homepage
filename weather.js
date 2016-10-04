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
	  var tempC = Math.floor(weather_data.main.temp - 273.15);
	  var weather = weather_data.weather[0].main;
	  var description = weather_data.weather[0].description;
	  var sun = {"sunrise": weather_data.sys.sunrise, "sunset": weather_data.sys.sunset}
	  var windSpeed = weather_data.wind.speed;
	  var windAngle = weather_data.wind.deg;
	  console.log(tempF);
	  $("#temp").append("<p>"+tempF+"</p>");
	  $("#container").append("<p>"+tempC+"</p>");
	  $("#container").append("<p>"+weather+"</p>");
	  $("#container").append("<p>"+description+"</p>");




	  //display proper temp depending on selected
      })
	}

  getWeather();
})


//get weather info
//insert state outline and weather icons
});