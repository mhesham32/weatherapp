
var weatherIcon;
function weatherIconAndAnimation (w){
  var showerSunIcon=`<div class="icon sun-shower">
  <div class="cloud"></div>
  <div class="sun">
    <div class="rays"></div>
  </div>
  <div class="rain"></div>
</div>`,
thunderStormIcon=`<div class="icon thunder-storm">
  <div class="cloud"></div>
  <div class="lightning">
    <div class="bolt"></div>
    <div class="bolt"></div>
  </div>
</div>`,
cloudyIcon=`<div class="icon cloudy">
  <div class="cloud"></div>
  <div class="cloud"></div>
</div>`,
snowIcon=`<div class="icon flurries">
  <div class="cloud"></div>
  <div class="snow">
    <div class="flake"></div>
    <div class="flake"></div>
  </div>
</div>`,
sunnyIcon=`<div class="icon sunny">
  <div class="sun">
    <div class="rays"></div>
  </div>
</div>`,
rainsIcon=`<div class="icon rainy">
  <div class="cloud"></div>
  <div class="rain"></div>
</div>`,
moon=`<div class="icon ">
 <div class="moon"></div>
</div>`;
  
  
  var weatherId=w.weather[0].id;

   function weatherCases(){
     var 
        image1Src,
        image2Src,
        image1Class,
        image2Class;

        function bgColor(color){
  $('.icon').css('color',color);
  $('.bg').css('background',color);
}

  switch(weatherId){
   case weatherId>200&&weatherId<300:
  weatherIcon=thunderStormIcon;
  break;
  case 800:
  weatherIcon=moon;
  image2Src='NightStars.png';
  image2Class='NightStars';
  bgColor('#000');
}

 var imagesTemp=`<img src="img/${image1Src}" class="${image1Class} hidden">
        <img src="img/${image2Src}" class="${image2Class}">`;
console.log(imagesTemp);
 return imagesTemp;
   }
   weatherCases();
$('#images').append(weatherCases());




}
