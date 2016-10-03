$(document).ready(function() {

$.getJSON('http://ipinfo.io', function(data){
  console.log(data)
  var city = data.city;
  var region = data.region;
  var country = data.country;
  var zipcode = data.postal;
  console.log(city);
})

var getWeather = function (city, state){
	var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22"+city+"%2C%20"+region+"%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
	$.getJSON(url, function(weather_data){
	  var temp = weather_data.query.results.channel.item.condition.temp+"&#176";
	  $("#temp").html(temp);
      })
	}

//get weather info
//insert state outline and weather icons
});