$(function() {
     getWeather();

    function getWeather() {
        $.ajax({
           url: "http://api.wunderground.com/api/b42c45d211003d65/geolookup/conditions/q/autoip.json",
           dataType: 'json',
           type: 'GET',
           success: function (weather) {
               doSomething(weather);
               console.log(weather);
           },

           });
    }
           function doSomething(weather) {
            
                
                  var location = weather.location;
                  var response = weather.response;
                  var temp = weather.current_observation.feelslike_f;
                  var icon = weather.current_observation.icon;


                  $('.temp').text(temp);

                  $(function () {
                  if (icon == 'snow' || icon == 'tstorms') {
                    $('.message').text("Don't Ride");
                  }
                  else if (icon == 'rain') {
                    $('.rain').show();
                    $('.message').text("Don't Ride");
                  }
                  else if (temp < 40) {
                    $('.message').text("Don't Ride");
                  }
                  else {
                    $('.message').text("Go Ride");
                  }

                  }); 

                  if (icon == 'cloudy') {
                    $('.cloudy').show();
                  }

                
            }
   });
