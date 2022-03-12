var cityName = document.querySelector("#city-search");
var cityEl = document.querySelector("#city-name")
var windEl = document.querySelector("#wind");
var tempEl = document.querySelector("#temp");
var humidityEl = document.querySelector("#humidity");
var pressureEl = document.querySelector("#pressure");
var iconEl = document.querySelector("#icon");

// set dates for current and 5 day forcast
var getDate = moment().format("MMM Do YY")
$("#currentDate").text(getDate);

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
    var inputArea = $(this).prev()
    var city = inputArea.val()
    console.log(city);
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=491efaefbf6c39958eb32ebd66d9f046";
    console.log(apiUrl);
    fetch(apiUrl).then(function(response){
        response.json().then(function(data){
            var cityValue = data["name"];
            var windValue = data["wind"]["speed"];
            var tempValue = data["main"]["temp"];
            var humidityValue = data["main"]["humidity"];
            var pressureValue = data["main"]["pressure"];
            tempEl.innerHTML = "Temp: " + tempValue + "°F.";
            windEl.innerHTML = "Wind: " + windValue + "mph";
            humidityEl.innerHTML = "Humidity: " + humidityValue + "%";
            pressureEl.innerHTML = "Pressure: " + pressureValue + "psi";
            cityEl.innerHTML = cityValue;
            console.log(data);
        })
    })
})