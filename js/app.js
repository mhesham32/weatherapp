$(function(){
$('#city-btn').click(function clicked(){
      var city=$('#city').val();
        console.log(city);
        //API by city name
        var apiUrl='http://api.openweathermap.org/data/2.5/weather?q='+city+'&apikey=af408f04f6b3ddb17f417b63f38430be'
     console.log(apiUrl);
     $.ajax({
         url:apiUrl,
         success:function(data){
             console.log(data);
             var dayOrNight=data.weather[0].icon;
              dayOrNight=dayOrNight[2];
              if(dayOrNight=='d'){
               dayOrNight='day';
              }else{
                  dayOrNight='night';
              }
             console.log(dayOrNight);
             $('.cityAPI').append(creatTemplate(data));
         }
         
     });
    }
    );
      if (navigator.geolocation) {
      navigator.geolocation.watchPosition(success, failed);
      }
function success(cP) { //CurrentPosition
    console.log(cP);
    let lat = cP.coords.latitude;
    let long = cP.coords.longitude;
    //API Geoposition
    var apiUrl = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&apikey=af408f04f6b3ddb17f417b63f38430be';
    console.log(apiUrl);
    $.ajax({
      url:apiUrl,
      success:function(data){
             var dayOrNight=data.weather[0].icon;
              dayOrNight=dayOrNight[2];
              if(dayOrNight=='d'){
               dayOrNight='day';
              }else{
                  dayOrNight='night';
              }
             console.log(dayOrNight);
             $('#location').append(creatTemplate(data));
      }

    });
}

function failed(F) {
    alert('Sorry we couldn\'t get your location you can try searching by your city name');
}
function creatTemplate(obj){
var htmlTemplate=`<div class="location">${obj.name},${obj.sys.country}</div>
            <div class="row">
                <!--Icon and degree-->
                <div class="col-xs-6 col-xs-offset-3 ">
                    <div class="col-xs-6">
                        <div class="icon sunny ">
                            <div class="sun">
                                <div class="rays"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-6 degree fehr">${obj.main.temp}°<span id="c">C</span>|<span id="f">F</span></div>
                </div>
            </div>
            <div class="weather-condition">
                ${obj.weather[0].description}
            </div>
            
             <div class="row padd">
                <!--Humidity and Wind-->
                <div class="col-xs-8 col-xs-offset-2">
                    <div class="humidity col-xs-6">humidity: ${obj.main.humidity}%</div>
                    <div class="wind col-xs-6">Wind : ${obj.wind.speed} m/h</div>
                </div>
            </div>
            <div class="row padd">
                <!--Sunrise and Sunset-->
                <div class="col-xs-8 col-xs-offset-2">
                    <div class="sunrise col-xs-6">Sunrise: ${dates(obj.sys.sunrise)}</div>
                    <div class="sunset col-xs-6">Sunset: ${dates(obj.sys.sunset)}</div>
                </div>
            </div>
            <div class="row padd">
                <!--Min and Max-->
                <div class="col-xs-offset-2 col-xs-8">
                    <div class="min col-xs-6">Min degree :${obj.main.temp_min}°</div>
                    <div class="max col-xs-6">Max degree :${obj.main.temp_min}°</div>

                </div>
            </div> 
            `;
    return htmlTemplate;    
}
 function dates(d){
  var date=new Date(d*1000);
  var hours=date.getHours();
  var min='0'+date.getMinutes();
  var formatted=hours+':'+min.substr(-2);
  return formatted;
 }

});