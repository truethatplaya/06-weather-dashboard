var apiKey = "&appid=e15cbfae7f895d1b67f2da6731580502";
var forcastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=";
var currentUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
var city = ""; //need user input
var requestUrlTest =
  "http://api.openweathermap.org/data/2.5/forecast?q=sacramento&appid=e15cbfae7f895d1b67f2da6731580502";

var currentCity = document.querySelector("#currentCity");
var currentTemp = document.querySelector("#currentTemp");
var currentHumidity = document.querySelector("#currentHumidity");
var currentWindSpeed = document.querySelector("#currentWindSpeed");
var currentUV = document.querySelector("#currentUV");

// Calling the Weather API to run on the click of the serach button. Fetching that response with the Test URL
function getWeatherApi() {
  fetch(requestUrlTest)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response.city.name); //this works
      currentCity.textContent = response.city.name; //appending city to html

      for (var i = 0; i < response.length; i++) {
        console.log(response.length);
      }
    });
}

//! BELOW THIS LINE WORKS TOO! //
// function getWeatherApi() {
//   fetch(requestUrlTest)
//     .then((response) => response.json())
//     .then((response) => {
//       console.log(response);
//       console.log(response.city.name);

// document.getElementById("quote").innerHTML =
//   "'" + response.city.name + "'";
// document.getElementById("author").innerHTML =
//   "author: " + response.originator.name;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

// // var searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", getWeatherApi);
