/////////////////////////////////////////// WEEK 3 HOMEWORK//////////////////////////////////////////////

/*
let weather = {
    paris: {
        temp: 3,
        humidity: 0
    },
    adelaide: {
        temp: 25,
        humidity: 60
    },
    melbourne: {
        temp: 2,
        humidity: 0
    },
    manilla: {
        temp: 35,
        humidity: 100
    },
    perth: {
        temp: 27,
        humidity: 15
    }

}

let city = prompt("Which city are you looking for?");

city = city.toLowerCase();

if(weather[city] !== undefined) {
    let temperature = weather[city].temp;
    let humidity = weather[city].humidity;
    let tempC = Math.round(temperature);
    let tempF = Math.round((temperature * 9) / 5 + 32);

    alert(`It is currently ${tempC}°C (${tempF}°F) in ${city} with a humidity of ${humidity}%`);

} else {
    alert("Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+sydney");
}
*/

/////////////////////////////////////////// WEEK 4 HOMEWORK//////////////////////////////////////////////

/////// 1. In your project, display the current date and time using JavaScript: Tuesday 16:00

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

function todaysDay(){
    let now = new Date();
    let day = days[now.getDay()];
    let hour = now.getHours();
        if (hour < 10) {
        hour = `0${hour}`;
        }
    let mins = now.getMinutes();
        if (mins < 10) {
        mins = `0${mins}`;
        }
    return `${day} ${hour}:${mins}`

}

let today = document.querySelector(".currentDay")
today.innerHTML = todaysDay();

/////// 2. Add a search engine, when searching for a city (i.e. Paris), display the city name 
///////    on the page after the user submits the form.

/*
function enterCity(event) {
  event.preventDefault();
  let h1 = document.querySelector("h1");
  let cityInput = document.querySelector(".input-city");
  h1.innerHTML = cityInput.value;
}

let searchForm = document.querySelector("form");
searchForm.addEventListener("submit", enterCity);
*/

/////// Bonus: Display a fake temperature (i.e 17) in Celsius and add a link to convert it to Fahrenheit. 
/////// When clicking on it, it should convert the temperature to Fahrenheit. When clicking on Celsius, 
/////// it should convert it back to Celsius.

/////////////////////////////////////////// WEEK 5 HOMEWORK//////////////////////////////////////////////

/////// 1. On your project, when a user searches for a city (example: New York), it should display 
///////    the name of the city on the result page and the current temperature of the city.


function showTemperature(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector(".current-temp").innerHTML = Math.round(
    response.data.main.temp);

}

function searchCity(city) {
  let apiKey = "1fb819a70022e5b5b0ca00fd56103479";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector(".input-city").value;
  searchCity(city);
}

let searchForm = document.querySelector("form");
searchForm.addEventListener("submit", handleSubmit);

searchCity("New York");


/////// Bonus: Add a Current Location button. When clicking on it, it uses the Geolocation API to get your 
/////// GPS coordinates and display and the city and current temperature using the OpenWeather API.

function searchLocation(position) {
  let apiKey = "1fb819a70022e5b5b0ca00fd56103479";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${
    position.coords.latitude
  }&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let currentLocationButton = document.querySelector(".getCurrentLocation");
currentLocationButton.addEventListener("click", getCurrentLocation);