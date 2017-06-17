$(function(){
$('#city-btn').click(function clicked(){
      var city=$('#city').val();
        console.log(city);
        var apiUrl='http://api.openweathermap.org/data/2.5/weather?q='+city+'&apikey=af408f04f6b3ddb17f417b63f38430be'
     console.log(apiUrl);
    }
    );
      if (navigator.geolocation) {
      navigator.geolocation.watchPosition(success, failed);
      }
function success(cP) { //CurrentPosition
    console.log(cP);
    let lat = cP.coords.latitude;
    let long = cP.coords.longitude;
    //API
    var apiUrl = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&apikey=af408f04f6b3ddb17f417b63f38430be';
    console.log(apiUrl);
}

function failed(F) {
    alert('Sorry we couldn\'t get your location you can try searching by your city name');
}
});