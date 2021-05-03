var forcastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=";
var currentUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
var apiKey = "&appid=e15cbfae7f895d1b67f2da6731580502";
var city = ""; //need user input
var requestUrlTest =
  "http://api.openweathermap.org/data/2.5/forecast?q=sacramento&appid=e15cbfae7f895d1b67f2da6731580502";

fetch(requestUrlTest)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    for (var i = 0; i < data.length; i++) {
      console.log(data[i]);
    }
  });

// function getWeatherApi() {

//   fetch(testApitUrlWeather)
//   .then(function (response)) {
//       return response.json();
// })

// .then(function (data)) {}
// // .then((response) => response.json())
// //     .then((response) => {
// //       console.log(response);

// //       document.getElementById("city").innerHTML = "'" + response.content + "'";
// //       document.getElementById("temp").innerHTML =
// //         "author: " + response.originator.name;
// //     })
// //     .catch((err) => {
// //       console.log(err);
// //     });
// // }

// var searchBtn = document.getElementById("searchBtn");

// searchBtn.addEventListener("click", getWeatherApi);
