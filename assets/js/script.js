var cityName = document.querySelector("#city-search");
var cityEl = document.querySelector("#city-name")
var windEl = document.querySelector("#wind");
var tempEl = document.querySelector("#temp");
var humidityEl = document.querySelector("#humidity");
var pressureEl = document.querySelector("#pressure");
var iconEl = document.querySelector("#icon");
var savedCity = document.querySelector("#saved-city")
// forcast ELs
var tempOneEl = document.querySelector("#temp-one");
var windOneEl = document.querySelector("#wind-one");
var humidityOneEl = document.querySelector("#humidity-one");

var tempTwoEl = document.querySelector("#temp-two");
var windTwoEl = document.querySelector("#wind-two");
var humidityTwoEl = document.querySelector("#humidity-two");

var tempThreeEl = document.querySelector("#temp-three");
var windThreeEl = document.querySelector("#wind-three");
var humidityThreeEl = document.querySelector("#humidity-three");

var tempFourEl = document.querySelector("#temp-four");
var windFourEl = document.querySelector("#wind-four");
var humidityFourEl = document.querySelector("#humidity-four");

var tempFiveEl = document.querySelector("#temp-five");
var windFiveEl = document.querySelector("#wind-five");
var humidityFiveEl = document.querySelector("#humidity-five");



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
    fetch(apiUrl).then(function (response) {
        response.json().then(function (data) {
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
    var secondApi = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=491efaefbf6c39958eb32ebd66d9f046";
    fetch(secondApi).then(function (response) {
        response.json().then(function (data) {
           var windOneVal = data.list[0]["wind"]["speed"];
           var tempOneVal = data.list[0]["main"]["temp"];
           var humidityOneVal = data.list[0]["main"]["humidity"];
           humidityOneEl.innerHTML = "Humidity: " + humidityOneVal + "%";
           tempOneEl.innerHTML = "Temp: " + tempOneVal + "°F."
           windOneEl.innerHTML = "Wind: " + windOneVal + "mph";

           var windTwoVal = data.list[1]["wind"]["speed"];
           var tempTwoVal = data.list[1]["main"]["temp"];
           var humidityTwoVal = data.list[1]["main"]["humidity"];
           humidityTwoEl.innerHTML = "Humidity: " + humidityTwoVal + "%";
           tempTwoEl.innerHTML = "Temp: " + tempTwoVal + "°F."
           windTwoEl.innerHTML = "Wind: " + windTwoVal + "mph";

           var windThreeVal = data.list[2]["wind"]["speed"];
           var tempThreeVal = data.list[2]["main"]["temp"];
           var humidityThreeVal = data.list[2]["main"]["humidity"];
           humidityThreeEl.innerHTML = "Humidity: " + humidityThreeVal + "%";
           tempThreeEl.innerHTML = "Temp: " + tempThreeVal + "°F."
           windThreeEl.innerHTML = "Wind: " + windThreeVal + "mph";

           var windFourVal = data.list[3]["wind"]["speed"];
           var tempFourVal = data.list[3]["main"]["temp"];
           var humidityFourVal = data.list[3]["main"]["humidity"];
           humidityFourEl.innerHTML = "Humidity: " + humidityFourVal + "%";
           tempFourEl.innerHTML = "Temp: " + tempFourVal + "°F."
           windFourEl.innerHTML = "Wind: " + windFourVal + "mph";

           var windFiveVal = data.list[4]["wind"]["speed"];
           var tempFiveVal = data.list[4]["main"]["temp"];
           var humidityFiveVal = data.list[4]["main"]["humidity"];
           humidityFiveEl.innerHTML = "Humidity: " + humidityFiveVal + "%";
           tempFiveEl.innerHTML = "Temp: " + tempFiveVal + "°F."
           windFiveEl.innerHTML = "Wind: " + windFiveVal + "mph";
        })
    })
})

$("#search-btn").on("click", function (event) {
    event.preventDefault()
    var inputArea = $(this).prev()
    var text = inputArea.attr("id")
    var savedCity = inputArea.val()
    
    localStorage.setItem(text, savedCity);
})

$("#city-search").val(localStorage.getItem("city-search"));