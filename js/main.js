$(function () {

});
var geoUrl;

function success(cP) { //CurrentPosition
    console.log(cP);
    let lat = cP.coords.latitude;
    let long = cP.coords.longitude;
    //API
    var apiUrl = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&apikey=af408f04f6b3ddb17f417b63f38430be';
    console.log(apiUrl);
    window.geoUrl = apiUrl;
}

function failed(F) {
    alert('We couldn\'t get your location you can try searching by your city name');
}

if (navigator.geolocation) {
    navigator.geolocation.watchPosition(success, failed);
}
console.log(geoUrl);
/*
//Timestamp
// Create a new JavaScript Date object based on the timestamp
// multiplied by 1000 so that the argument is in milliseconds, not seconds.
var date = new Date(1497422475104*1000);
// Hours part from the timestamp
var hours = date.getHours();
// Minutes part from the timestamp
var minutes = "0" + date.getMinutes();
// Seconds part from the timestamp
var seconds = "0" + date.getSeconds();

// Will display time in 10:30:23 format
var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
console.log(formattedTime );*/
