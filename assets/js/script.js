var forcastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=";
var currentUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
var apiKey = "&appid=e15cbfae7f895d1b67f2da6731580502";
var city = ""; //need user input
var requestUrlTest =
  "http://api.openweathermap.org/data/2.5/forecast?q=sacramento&appid=e15cbfae7f895d1b67f2da6731580502";

// Fetching the Weather API response.
function getWeatherApi() {
  fetch(requestUrlTest)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response.city.name); //this works

      for (var i = 0; i < response.length; i++) {
        console.log(response.name);
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

//       // document.getElementById("quote").innerHTML = "'" + response.city.name + "'";
//       // document.getElementById("author").innerHTML =
//       //   "author: " + response.originator.name;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

// // var searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", getWeatherApi);
