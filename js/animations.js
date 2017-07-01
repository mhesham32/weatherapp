
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
  var dayOrNight=w.weather[0].icon;
              dayOrNight=dayOrNight[2];
              if(dayOrNight=='d'){
               dayOrNight='day';
              }else{
                  dayOrNight='night';
              }
              console.log(dayOrNight);

   function weatherCases(){
     var 
        image1Src,
        image2Src,
        image1Class,
        image2Class;

        function bgColor(color){
          $('head').append(`<style>
    .icon{
        color:${color}!important ;
    }
    </style>`);
  $('.bg').css('background',color);
   }
 
  switch(true){
   case weatherId>199&&weatherId<210:
  weatherIcon=thunderStormIcon;
  image1Src='LightStrike';
  image2Src='nightRain';
  image1Class='LightStrike';
  image2Class='NightStars';
  bgColor('#02102a');

  break;

  case weatherId>209&&weatherId<233:
  if (dayOrNight==='day'){
    image2Src='heavyClouds';
    bgColor('#b5bab6');
  }else{
    image2Src='nightHeavyClouds';
    bgColor('#02102a');
  }
  weatherIcon=thunderStormIcon;
  image1Class='LightStrike';
  image2Class='NightStars';
  break;

  case weatherId>299&&weatherId<399:
  if(dayOrNight==='day'){
    weatherIcon=showerSunIcon;
    bgColor('#77acc7');
  }else if(dayOrNight==='night'){
    weatherIcon=rainsIcon;
    bgColor('#02102a');
  }
  image1Class='hidden';
  image2Src='rain';
  image2Class='NightStars';
  break;

  case weatherId>499&&weatherId<599:
  if(dayOrNight==='day'){
   bgColor('#77acc7');
   image2Src='dayHeavyRain';
   weatherIcon=showerSunIcon;
  }
  else if(dayOrNight==='night'){
     bgColor('#02102a'); 
     weatherIcon=rainsIcon;
     image2Src='nightHeavyRain';
  }
  image1Class='hidden';
  image2Class='NightStars';
  break;

  case weatherId>599&&weatherId<700:
  weatherIcon=snowIcon;
  image1Src='snowFlake';
  image2Src='Snow';
  image1Class='SnowFlake';
  image2Class='NightStars';
  if (dayOrNight==='day'){
    bgColor('#08589d');
  }else{
    bgColor('#02102a'); 
  }
   break;
   
   case weatherId>800&&weatherId<900:
   weatherIcon=cloudyIcon;
   image1Class='hidden';
   image2Src='lightcloud';
   image2Class='LightCloud';
   if (dayOrNight==='day'){
    bgColor('#08589d');
  }else{
    bgColor('#02102a'); 
  }
   break;

  case weatherId=== 800:
  if (dayOrNight==='night'){
  weatherIcon=moon;
  image1Class='hidden';
  image2Src='NightStars';
  image2Class='NightStars';
  bgColor('#02102a');
}
else if(dayOrNight==='day'){
  weatherIcon=sunnyIcon;
  image1Class='hidden';
  image2Src='SUN';
  image2Class='Sunny'; 
  bgColor('#77acc7');
}
  break;

  default:
  $('#images').css('height','500px');
  $('img').css('display','none');
  if(dayOrNight=='day') {
    bgColor('#77acc7');
    weatherIcon=sunnyIcon;
  }else {
    bgColor('#02102a');
    weatherIcon=moon;
  }
  image1Class='hidden';
  image2Class='hidden';
 
}

 var imagesTemp=`<img src="img/${image1Src}.png" class="${image1Class}">
        <img src="img/${image2Src}.png" class="${image2Class}">`;
console.log(imagesTemp);
 return imagesTemp;
   }
   weatherCases();
$('#images').append(weatherCases());




}
