// $(document).ready(function(){


(function(){
    var api = "http://api.openweathermap.org/data/2.5/weather?q=";
    var key = "&APPID=11f09c6cb2c205ef6c7dc38d7d176be8";
    var metric = "&units=metric";
    var weather;
    var fotoSpot = document.querySelector('#fotoSpot');
    $selectorOption = $('#selectorOption');

    $tytul = $('h2');
    $forecast = $('h3');
   
 $sprPogode = $('#sprPogode');
 $sprPogode.click(wyswietlTemp);
        

        function wyswietlTemp(){
            var city = $('#inputField').val();
            var apiUrl = api + city  + key + metric ;

            if(city === ""){
                console.log('nie podales miasta');
            }else{
 
                $.getJSON( apiUrl, function( data ) {           
                    displayTemp(data); 
                  });
            }
          

        }


        function displayTemp(data){
            weatherCheck = data;
            console.log(weatherCheck);
            var forecastCity = weatherCheck.weather[0].main;

            if( forecastCity === "Clouds"   ){
                 fotoSpot.setAttribute("src", "forecast/clouds.png");
                           
            }else  if( forecastCity === "Rain" || forecastCity === "rain"    ){
                fotoSpot.setAttribute("src", "forecast/rain.png");
            }else  if( forecastCity === "Clear"   ){
                fotoSpot.setAttribute("src", "forecast/clear.png");
            }else  if( forecastCity === "Mist"   ){
                fotoSpot.setAttribute("src", "forecast/fog.png");
            }else  if( forecastCity === "Snow"   ){
                fotoSpot.setAttribute("src", "forecast/snow.png");
            }else  if( forecastCity === "Haze"   ){
                fotoSpot.setAttribute("src", "forecast/fog.png");
            }else{
                fotoSpot.setAttribute("src", "forecast/clauds.png");
            }

            if( $('#mainContainer').css( 'background-image','url("forecast/sky1.jpg")')  ){
                console.log('to jest sky');
            }else{

            }


         $tytul.html(weatherCheck.main.temp.toFixed(1) + '&deg C');
         $forecast.html(forecastCity);
         
        }




  
$('select').change(function() {
 
    $selectorOptionValue = $selectorOption.val();
    city = $selectorOptionValue;
    var apiUrl = api + city  + key + metric ;
    $mainContainer = $('#mainContainer');
    var colorCzionki ;

    function showCity(){
        $.getJSON( apiUrl, function( data ) {           
            displayTemp(data); 
          });

          animateFoto();
    }

    function animateFoto(){
        $mainContainer.animate({opacity:0 },500, function(){
            $(this).css({
                'background-image': 'url("https://rawgit.com/rafalWili/Weather-API/master/forecast/'+ $selectorOptionValue +'.jpg")',
                'color' : colorCzionki
              })
              .animate({opacity:1},500);
        });

    }

    if($selectorOptionValue === "London" ){
        colorCzionki = "#000000";
        showCity(colorCzionki);
    }else if($selectorOptionValue === "Tokyo" ){
        colorCzionki = "#000000";
        showCity(colorCzionki);
    }else if($selectorOptionValue === "Warsaw" ){
        colorCzionki = "#000000";
        showCity(colorCzionki);
    }else if($selectorOptionValue === "Paris" ){
        colorCzionki = "#000000";
        showCity(colorCzionki);
    }else if($selectorOptionValue === "Toronto" ){
        colorCzionki = "#ffffff";
        showCity(colorCzionki);
    }else{
    }

}); //end change

$('#inputField').on("focus", function(){

    $('#inputField').val('');
});

var oknoSzerokosc = window.innerWidth;
console.log(oknoSzerokosc);


// $(window).resize(function(){


//     console.log('zmiana okna');
//     if( oknoSzerokosc < 768 ){
//         $('#inputHolder').addClass('col-sm-12');
//     }

// });





})(); //self started function

// });