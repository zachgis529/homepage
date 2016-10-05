$(document).ready(function() {

$.getJSON('http://ipinfo.io', function(data){
  var city = data.city;
  var region = data.region;
  var country = data.country;
  var zipcode = data.postal;

  var getWeather = function(){
	var url = "HTTP://api.openweathermap.org/data/2.5/weather?zip="+zipcode+",{api}";
	$.getJSON(url, function(weather_data){
	  var tempF = Math.floor((((weather_data.main.temp)*9)/5)-459.67);
	  var tempC = Math.floor(weather_data.main.temp - 273.15);
	  var weather = weather_data.weather[0].main;
	  var description = weather_data.weather[0].description;
	  var sun = {"sunrise": weather_data.sys.sunrise, "sunset": weather_data.sys.sunset}
	  var windSpeed = ((weather_data.wind.speed)*2.23694).toFixed(2);
	  var windAngle = Math.floor(weather_data.wind.deg);
	  var weatherId = weather_data.weather[0].id;
	  console.log(tempF);
	  $(".one").append("<div class = 'text-container'><p>"+tempF+"&degF</p></div>");
	  $(".two").append("<div class = 'text-container'><i class = 'wi wi-owm-"+weatherId+"'></i></div>");
	  $(".three").append("<div class = 'text-container'><p>"+windSpeed+"mph<i class = 'wi wi-wind towards-"+windAngle+"-deg'></i></p></div>");
	  //$("#circle-temp").append("<p>"+tempC+"&#8451</p>");

	  
	  /*$("#temp").append("<p>"+tempF+"</p>");
	  $("#container").append("<p>"+tempC+"</p>");
	  $("#container").append("<p>"+weather+"</p>");
	  $("#container").append("<p>"+description+"</p>");*/
      })
	}

  getWeather();
})


//get weather info
//insert state outline and weather icons
});