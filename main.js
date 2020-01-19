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

  var div1 = document.getElementById("current-weather");
  div1.innerHTML += "Hello, " + currentCity + "!";
  // add attributes to the save buttons
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    currentCity +
    "&appid=4b0342f3707425c92eb021e9050a8450";
  // });

  var div2 = document.getElementById("time");
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



    // $(".movie-data").text(JSON.stringify(response.Rated));
    // Retrieves the release year

    // Creates an element to hold the release year
    // $(".movie-data").text(JSON.stringify(response.Released));
  });
});
