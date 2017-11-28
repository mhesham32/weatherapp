$(function(){
$('#city-btn').click(function (){clicked();});
$('#city').on('keydown', function(e) {
    if (e.which == 13) {
       clicked();
    }
});

function clicked(){
      var city=$('#city').val();
        console.log(city);
        //API by city name
        var apiUrl='https://api.openweathermap.org/data/2.5/weather?q='+city+'&apikey=af408f04f6b3ddb17f417b63f38430be';
     console.log(apiUrl);
    $('#location').text('');
    $('.cityAPI').text('');
    $('#images img').addClass('hidden');
     $.ajax({
         url:apiUrl,
         success:function(data){
             console.log(data);
               weatherIconAndAnimation(data);
             $('.cityAPI').append(creatTemplate(data));
             toCelsius(data);
          toFahrenheit(data);
         }
         
     });
    }
    
      if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, failed);
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
             weatherIconAndAnimation(data);
             $('#location').append(creatTemplate(data));
          toCelsius(data);
          toFahrenheit(data)      
          
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
                <div class="col-sm-6 iconC">
                    ${weatherIcon}
            </div>
                    <div class="col-sm-6 degree klv"><span class="deg-span">${obj.main.temp}</span>°<span class="c">C</span>|<span class="f">F</span></div>
                </div>
            </div>
            <div class="weather-condition">
                ${obj.weather[0].description}
            </div>
            
             <div class="row padd">
                <!--Humidity and Wind-->
                <div class="col-xs-8 col-xs-offset-2">
                    <div class="humidity col-xs-6">humidity : ${obj.main.humidity}%</div>
                    <div class="wind col-xs-6">Wind : ${obj.wind.speed} km/h</div>
                </div>
            </div>
            <div class="row padd">
                <!--Sunrise and Sunset-->
                <div class="col-xs-8 col-xs-offset-2">
                    <div class="sunrise col-xs-6">Sunrise : ${dates(obj.sys.sunrise)}</div>
                    <div class="sunset col-xs-6">Sunset : ${dates(obj.sys.sunset)}</div>
                </div>
            </div>
            <div class="row padd">
                <!--Min and Max-->
                <div class="col-xs-offset-2 col-xs-8">
                    <div class="min col-xs-6">Min degree :<span>${obj.main.temp_min}<span/>°</div>
                    <div class="max col-xs-6">Max degree :<span>${obj.main.temp_max
 }<span/>°</div>

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
   
    function toCelsius(c){
   $('.weather').delegate('.c','click',function(){
       $(this).addClass('degbg');
       $('.f').removeClass('degbg');
       var celsius=c.main.temp-273.5,
           celsius2=c.main.temp_min-273.5,
           celsius3=c.main.temp_max-273.5;
       $('.degree').removeClass('klv');
       $('.deg-span').text(Math.round(celsius));
       $('.min span').text(Math.round(celsius2));
       $('.max span').text(Math.round(celsius3));
   });
        
    }
    
     function toFahrenheit(f){
    $('.weather').delegate('.f','click',function(){
       $(this).addClass('degbg');
       $('.c').removeClass('degbg');
       var fehrenheit=(f.main.temp-273.5)+32*(9/5),
           fehrenheit2=(f.main.temp_min-273.5)+32*(9/5),
           fehrenheit3=(f.main.temp_max-273.5)+32*(9/5);
       $('.degree').removeClass('klv');
       $('.deg-span').text(Math.round(fehrenheit));
       $('.min span').text(Math.round(fehrenheit2));
       $('.max span').text(Math.round(fehrenheit3));
   }); 
    }
    $('#mostafa').click(function(){
        window.open('http://www.mostafahesham.ml/','_blank');
    });
    $('#github').click(function(){
      window.open('https://github.com/mhesham32/weatherapp','_blank');

    });

  

});
