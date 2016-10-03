$(document).ready(function() {

if (!navigator.geolocation){
  output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
  //set output location
  return;
} else if (navigator.geolocation){
  navigator.geolocation.getCurrentPosition(function(position) {
    set_vars(position.coords.latitude, position.coords.longitude);
  });
}



var location = function (lat, long){
	var lat = lat;
	var long = long;
}

var getWeather = function (lat, long){
	$.ajax({
	  url: 'api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long,
	  type: 'GET',
	  dataType: 'json', 

      success: function(data) {
      	console.log(data);
        var unit = data.query.results.channel.units.temperature;
        $(".country").html(data.query.results.channel.location.country);
        $(".city").html(data.query.results.channel.location.city);
        $(".weather").html(data.query.results.channel.item.condition.text);
        $(".temperature-text").html(data.query.results.channel.item.condition.temp + " °" + unit);
        weather = data.query.results.channel.item.condition.text;
      },

      error: function(err) {
        console.log(err);
        $(/*text output item*/).html('data for location does not exist');
      },
	})
}

});