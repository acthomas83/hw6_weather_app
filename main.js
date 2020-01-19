var dateTime = document.getElementById("#date-time");
var time = moment().format('h:mm:ss a');
var date = moment().format('MMMM Do YYYY');
var day = moment().format('dddd');
console.log(time);
console.log(date);
console.log(day);

var userSelection = document.getElementById('#user-input');
var searchBtn = document.getElementById("search-btn")

var div = document.getElementById("time");
div.innerHTML += day + ", " + date;




$("#search-btn").on("click", function() {
    var currentCity = $("input").val();
  
    console.log(currentCity);
  
    //localStorage.setItem($(this).attr("data-hour"), event);
    localStorage.setItem(currentCity);
    console.log(localStorage.setItem(currentCity));
  
    // add attributes to the save buttons
  });