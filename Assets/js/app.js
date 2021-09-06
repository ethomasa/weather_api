var cityForm=document.querySelector("#form");
var cityInput=document.querySelector("#city");
// function listener on click button
cityForm.addEventListener('submit', e => {
    // prevent default action
    e.preventDefault();    
    // get city value from user input
    const city = cityForm.city.value.trim();
    if(city){
        getCityForecast(city) 
        fiveDayForcast(city);
        cityInput.value = "";
    } else{
        alert("Please enter a City");
    }
    pastSearch(city);
    cityForm.reset();
    console.log(city);

  });
  //City search history button
  searcHistoryCitiesBtn.addEventListener('click',  e => {
    var city = e.target.getAttribute("data-city")
    if(city){
        getCityForecast(city);
        fiveDayForcast(city);
    }
});
 

