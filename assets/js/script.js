var cityName = document.querySelector("#city-search");

// set dates for current and 5 day forcast
var getDate = moment().format("MMM Do YY")

var dayOne = moment().add(1, "days").format("MMM Do YY");
$("#day-one").text(dayOne);
var dayTwo = moment().add(2, "days").format("MMM Do YY");
$("#day-two").text(dayTwo);
var dayThree = moment().add(3, "days").format("MMM Do YY");
$("#day-three").text(dayThree);
var dayFour = moment().add(4, "days").format("MMM Do YY");
$("#day-four").text(dayFour);
var dayFive = moment().add(5, "days").format("MMM Do YY");
$("#day-five").text(dayFive);

// get weather for selected city
$("#search-btn").on("click", function (event) {
    var apiUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=5&appid=491efaefbf6c39958eb32ebd66d9f046"
    fetch(apiUrl).then(function(response){
        response.json().then(function(data){
            console.log(data);
        })
    })
})