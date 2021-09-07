//Weather app api key
var key ='1254900f01665319d968188f7375eee7';
// get city weather information from api provider
var getCityForecast = async(city) => {
    var apiURL = "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=imperial&appid=1254900f01665319d968188f7375eee7"
    await fetch(apiURL)
    .then(function(response){
        response.json().then(function(data){
           displayWeather(data, city);
            console.log(data)
          
        });
    });
};
//getCity(city)

var listGroup=document.querySelector("#today-listgroup");
var citySearch = document.querySelector("#searched-city");
var forecastTitle = document.querySelector("#forecast");


var displayWeather = function(weather, searchCity){

    listGroup.textContent= "";  
    citySearch.textContent=searchCity;

var todayDate = document.createElement("span")
   todayDate.textContent=" (" + moment(weather.dt.value).format("MMM D, YYYY") + ") ";
   citySearch.appendChild(todayDate);

  // update the night/day & icon images(main list div)
   var weatherIcon = document.createElement("img")
   weatherIcon.setAttribute("src", "https://openweathermap.org/img/wn/" + weather.weather[0].icon + "@2x.png");
   citySearch.appendChild(weatherIcon);
  // Today's Temp (main list div)
   var temperatureEl = document.createElement("span");
   temperatureEl.textContent = "Temperature: " + (Math.round(weather.main.temp))+ " °F";
   temperatureEl.classList = "list-group-item"
  
   // current humidity (main list dis div)
   var humidityEl = document.createElement("span");
   humidityEl.textContent = "Humidity: " + weather.main.humidity + " %";
   humidityEl.classList = "list-group-item"
  // current wind speed (main list div)
   var windSpeedEl = document.createElement("span");
   windSpeedEl.textContent = "Wind Speed: " + weather.wind.speed + " mph";
   windSpeedEl.classList = "list-group-item"

   //append to list group div
   listGroup.appendChild(temperatureEl);

   //append to list group div
   listGroup.appendChild(humidityEl);

   //append to list group div
   listGroup.appendChild(windSpeedEl);

}

// Get 7 day forecast for any  city
var fiveDayForcast = async(city) =>{

    var apiURL = "https://api.openweathermap.org/data/2.5/forecast?q="+ city +"&units=imperial&appid=1254900f01665319d968188f7375eee7";
     
    await fetch(apiURL)
    .then(function(response){
        response.json().then(function(data){
           display5Day(data);
        });
    });
};

var display5Day = async(weather) =>{
    var forecastContainerEl = document.querySelector("#fiveday-container");
    forecastContainerEl.textContent = ""
    forecastTitle.textContent = "5-Day Forecast:";

    var forecast = weather.list;
        for(var i=5; i < forecast.length; i=i+8){
       var dailyForecast = forecast[i];
        
       var forecastEl=document.createElement("div");
       forecastEl.classList = "card bg-primary text-light m-2";

       //date element
       var forecastDate = document.createElement("h5")
       forecastDate.textContent= moment.unix(dailyForecast.dt).format("MMM D, YYYY");
       forecastDate.classList = "card-header text-center"
       forecastEl.appendChild(forecastDate);
       
       // update the night/day & icon images
       var weatherIcon = document.createElement("img")
       weatherIcon.classList = "card-body text-center";
       weatherIcon.setAttribute("src", "https://openweathermap.org/img/wn/"+ dailyForecast.weather[0].icon +".png");  
       console.log(weatherIcon);

       //append to forecast card
       forecastEl.appendChild(weatherIcon);
       
       //create temperature span
       var forecastTempEl=document.createElement("span");
       forecastTempEl.classList = "card-body text-center";
       forecastTempEl.textContent = "Temp: "+ (Math.round(dailyForecast.main.temp)) + " °F";

      // forecast card
        forecastEl.appendChild(forecastTempEl);

       var forecastHumEl=document.createElement("span");
       forecastHumEl.classList = "card-body text-center";
       forecastHumEl.textContent ="Humidity: "+ dailyForecast.main.humidity + "  %";

       //append to forecast card
       forecastEl.appendChild(forecastHumEl);

      
       //append five day card
        forecastContainerEl.appendChild(forecastEl);
    }

}

var searcHistoryCitiesBtn = document.querySelector("#past-search-buttons");
var pastSearch = function(pastSearch){


    citySearcHistory = document.createElement("button");
    citySearcHistory.textContent = pastSearch;
    citySearcHistory.classList = "d-flex w-100 btn-light border p-2";
    citySearcHistory.setAttribute("data-city",pastSearch)
    citySearcHistory.setAttribute("type", "submit");
    searcHistoryCitiesBtn.prepend(citySearcHistory);
}


