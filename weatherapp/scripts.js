$( document ).ready(function() {
  if( navigator.geolocation ){
    navigator.geolocation.getCurrentPosition( success);
  }
  else{
    alert("Sorry, your browser doesn't support geolocation       services.");
  }


  function success(position){
    var long = position.coords.longitude;
    var lat = position.coords.latitude;
    var key = "440523fa95c30d80d796194e25ba3085";
    var api = "https://api.darksky.net/forecast/";
    $.ajax({
        url:    (api + key + "/" + lat + "," + long),
        type: "POST",
        dataType: 'jsonp',
        success: function(response){
          $(".temperature").html(Math.round(((response.currently.temperature - 32) * 5) / 9));
          //console.log($(".temperature").text());
          //console.log(response.currently.temperature);
          switch (response.currently.icon){
              case "clear-day":
                  icon = "wi wi-day-sunny";
                  break;
              case "clear-night":
                  icon = "wi wi-night-clear";
                  break;
              case "rain":
                  icon = "wi wi-rain";
                  break;
              case "snow":
                  icon = "wi wi-snow";
                  break;
              case "sleet":
                  icon = "wi wi-day-sleet";
                  break;
              case "wind":
                  icon = "wi wi-windy";
                  break;
              case  "fog":
                  icon = "wi wi-fog";
                  break;
              case "cloudy":
                  icon = "wi wi-cloudy";
                  break;
              case "partly-cloudy-day":
                  icon = "wi wi-day-cloudy";
                  break;
              case "partly-cloudy-night":
                  icon = "wi wi-night-partly-cloudy";
                  break;
          }
          $(".icon").html('<i class="' +icon + '"></i>')
          //console.log(icon);
        }
    });
    }
  $(".link").click(function(){
  //console.log(document.getElementById("degree"))
  if ($(".link").html() === "Celsius"){
    $(".link").html("Fahrenheit");
    $(".temperature").html(($(".temperature").html()*1.8)+32);
  }
  else{
    $(".link").html("Celsius");
    $(".temperature").html(Math.round((($(".temperature").html()-32) * 5) / 9));//mult/div with curr numb
  }
});



});