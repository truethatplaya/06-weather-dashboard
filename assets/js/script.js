var apiKey = "&appid=e15cbfae7f895d1b67f2da6731580502";
var forcastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=";
var currentUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
var city = ""; //need user input

var currentCity = document.querySelector("#currentCity");
var currentTemp = document.querySelector("#currentTemp");
var currentHumidity = document.querySelector("#currentHumidity");
var currentWindSpeed = document.querySelector("#currentWindSpeed");
var currentUV = document.querySelector("#currentUV");

var searchBtn = document.getElementById("searchBtn");
var searchedCities = document.getElementById("cityInput");

//Calling the Weather API to run on the click of the serach button.
function getWeatherApi() {
  city = document.querySelector("#cityInput").value;

  query = currentUrl + city + apiKey + "&units=imperial";

  fetch(query)
    .then((response) => response.json())
    .then((response) => {
      currentCity.textContent = response.name;
      currentTemp.textContent = "Current Temp: " + response.main.temp + " F";
      currentHumidity.textContent =
        "Current Humidity: " + response.main.humidity + " %";
      currentWindSpeed.textContent =
        "Current Wind Speed: " + response.wind.speed + " MPH";
    });
}

// Calling Forcast API to run on the lick of the serach button.
function getForcastApi() {
  city = document.querySelector("#cityInput").value;

  query = forcastUrl + city + apiKey + "&units=imperial";

  fetch(query)
    .then((response) => response.json())
    .then((response) => {
      // These all work
      console.log(response);
      console.log(response.city.name);
      console.log(response.list[0].main.temp);
      console.log(response.list[0].main.humidity);
      console.log(response.list[0].wind.speed);
      currentCity.textContent = response.city.name; //appending city to html
      currentTemp.textContent =
        "Current Temp: " + response.list[0].main.temp + " F";
      currentHumidity.textContent =
        "Current Humidity: " + response.list[0].main.humidity;
      currentWindSpeed.textContent =
        "Current Wind Speed: " + response.list[0].wind.speed;
      console.log(response.current.uvi); //this doesn't work yet

      // currentCity.textContent = response.city.name; //appending city to html

      // for (var i = 0; i < response.length; i++) {
      //   console.log(response.length);
      // }
    })
    .catch((err) => {
      console.log(err);
    });
}

searchBtn.addEventListener("click", function (event) {
  event.preventDefault();

  var cities = {
    city: searchedCities.value.trim(),
  };

  localStorage.setItem("cities", JSON.stringify(cities));
});

// function saveToLocalStorage {

// }

searchBtn.addEventListener("click", getWeatherApi, getForcastApi);
