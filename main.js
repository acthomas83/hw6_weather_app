var dateTime = document.getElementById("#date-time");
var time = moment().format("h:mm:ss a");
var date = moment().format("MMMM Do YYYY");
var day = moment().format("dddd");
console.log(time);
console.log(date);
console.log(day);

var userSelection = document.getElementById("#user-input");
var searchBtn = document.getElementById("search-btn");

$("#search-btn").on("click", function() {
  var currentCity = $("input").val();
  

  console.log(currentCity);

  localStorage.setItem("City", currentCity);
  console.log(localStorage.setItem("City", currentCity));

  // var div1 = document.getElementById("current-weather");
  // div1.innerHTML += "Hello, " + currentCity + "!";
  // add attributes to the save buttons
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    currentCity +
    "&appid=4b0342f3707425c92eb021e9050a8450";
  // });

  var div2 = document.getElementById("date");
  div2.innerHTML += "Today is " + day + ", " + date;
  // div.innerHTML += "Hello, " + currentCity;

  // Creates AJAX call for the specific movie button being clicked
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    var conditionsIcon = $(response.weather[0].icon);
    $("#weather-icon").append(conditionsIcon);
    console.log(conditionsIcon);
    
    console.log("Welcome to " + response.name);
    console.log("Temp: " + response.main.temp);
    console.log("Humidity: " + response.main.humidity);
    console.log("Wind Speed: " + response.wind.speed);
    // console.log("UV Index: " + response.main.humidity);

  var kTemp = $(response.main.temp);
  kTemp="temperatureConverter(this.value)"
// Convert Kelvin to Fahrenheit
function temperatureConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("temp").innerHTML=((valNum-273.15)*1.8)+32;
}
console.log($(temperatureConverter));
  // console.log(temo);

  $("#city").text(JSON.stringify(response.name));
    $("#temp").text(JSON.stringify("Temp: " + response.main.temp));
    $("#humidity").text(JSON.stringify("Humidity: " + response.main.humidity));
    $("#windspeed").text(JSON.stringify("Wind Speed: " + response.wind.speed + "mph"));

    // HISTORY LIST
    var historyOne = document.getElementById("history-1");
    var historyTwo = document.getElementById("history-2");
    var historyThree = document.getElementById("history-3");
    var historyFour = document.getElementById("history-4");
    var historyFive = document.getElementById("history-5");

    

    // Retrieves the release year

    // Creates an element to hold the release year
    // $(".movie-data").text(JSON.stringify(response.Released));
  });
});
