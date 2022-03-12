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

var getWeather = function () {

}