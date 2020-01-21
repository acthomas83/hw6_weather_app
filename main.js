var dateTime = document.getElementById("#date-time");
var time = moment().format("h:mm:ss a");
var date = moment().format("MMMM Do YYYY");
var day = moment().format("dddd");
console.log(time);
console.log(date);
console.log(day);

var userSelection = document.getElementById("#user-input");
var searchBtn = document.getElementById("search-btn");

var currentDate = document.getElementById("date");
currentDate.innerHTML += "Today is " + day + ", " + date;

var cityArr = [];

$("#search-btn").on("click", function() {
  var currentCity = $("input").val();
  cityArr.push(currentCity);

  console.log(currentCity);

  localStorage.setItem("City", JSON.stringify(cityArr));

  // var div1 = document.getElementById("current-weather");
  // div1.innerHTML += "Hello, " + currentCity + "!";
  // add attributes to the save buttons
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    currentCity +
    "&appid=4b0342f3707425c92eb021e9050a8450";
  // });

  // div.innerHTML += "Hello, " + currentCity;

  // Creates AJAX call for the specific movie button being clicked
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    var conditionsIcon = $(response.weather[0].icon);
    $("#weather-icon").append(conditionsIcon);
    // console.log(conditionsIcon);

    console.log("Welcome to " + response.name);
    console.log("Temp: " + response.main.temp);
    console.log("Humidity: " + response.main.humidity);
    console.log("Wind Speed: " + response.wind.speed);
    // console.log("UV Index: " + response.main.humidity);

    var kTemp = $(response.main.temp);
    kTemp = "temperatureConverter(this.value)";
    // Convert Kelvin to Fahrenheit
    // function temperatureConverter(tempVal) {
    //   var tempVal = $(response.main.temp).val();
    //   tempVal = parseFloat(tempVal);
    //   document.getElementById("temp").innerHTML=(("Temp: " + tempVal-273.15)*1.8)+32;
    // }
    // console.log($(temperatureConverter));
    // console.log(temo);

    // WEATHER DISPLAY *****
    $("#city").text(response.name);
    $("#temp").text("Temp: " + response.main.temp);
    $("#humidity").text("Humidity: " + response.main.humidity);
    $("#windspeed").text("Wind Speed: " + response.wind.speed + "mph");

    // var cityReturn = document.getElementById("city");
    // cityReturn.innerHTML += response.name;
    // var tempReturn = document.getElementById("temp");
    // tempReturn.innerHTML += "Temp: " + response.main.temp;
    // var humidityReturn = document.getElementById("humidity");
    // humidityReturn.innerHTML += "Humidity: " + response.main.humidity;
    // var windReturn = document.getElementById("windspeed");
    // windReturn.innerHTML += "Wind Speed: " + response.wind.speed;

    // HISTORY LIST
    var historyOne = document.getElementById("history-1");
    var historyTwo = document.getElementById("history-2");
    var historyThree = document.getElementById("history-3");
    var historyFour = document.getElementById("history-4");
    var historyFive = document.getElementById("history-5");

    var history = JSON.parse(window.localStorage.getItem("City"));
console.log(history);
    for (var i = 0; i < history.length; i++) {
      var li = $("<li>").addClass("list-group-item");
      li.text(history[i]);
      $("#history-1").append(li);
    }


    // Retrieves the release year

    // Creates an element to hold the release year
    // $(".movie-data").text(JSON.stringify(response.Released));
  });
});
