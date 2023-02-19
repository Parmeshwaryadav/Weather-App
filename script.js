const weatherStatus = document.getElementById("weatherStatus");

const cityName = document.getElementById("cityName");
const cityNameWT = cityName.value;

// sets the background image from unsplash API.
const backgroundImage = async () => {
  // Fetch Details
  const fetchData = await fetch(
    `https://api.unsplash.com/search/photos?page=1&query=${cityNameWT}&client_id=WpcvfYB4CrJFW3URGI7zUGbHukXU-kkbKgssMHCaVHU`
  );

  const APIData = await fetchData.json();

  // Displaying the data in HTML
  const background = document.querySelector("body");
  background.style.backgroundImage = `url(${APIData.results[4].urls.full})`;
};
backgroundImage();

//targeting the element.
const inputBox = document.getElementById("inputBox");
const countryName = document.getElementById("countryName");
const stateName = document.getElementById("stateName");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const temprature = document.getElementById("temprature");
const logoImage = document.getElementById("logoImage");

// Function to get the data from weather app
// preventing default behaviour
const getData = async (event) => {
  event.preventDefault();
  if (!inputBox.value) {
    alert("Please Enter The City Name: ");
    return;
  }

  //
  const city = inputBox.value;

  // Fetch Details
  const fetchData = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=d489ab773d4040548e9110519231102&q=${city}`
  );

  const orgData = await fetchData.json();
  let data = orgData;

  // Displaying the data in HTML
  countryName.innerHTML = data.location.country;
  stateName.innerHTML = data.location.region;
  cityName.innerHTML = data.location.name;
  humidity.innerHTML = data.current.humidity;
  windSpeed.innerHTML = data.current.wind_kph;
  temprature.innerHTML = data.current.temp_c;
  logoImage.src = data.current.condition.icon;
  weatherStatus.innerHTML = data.current.condition.text;
};

// for future forecast

// const getForecastData = async (e) => {
//   const fetchForecastedData = await fetch(
//     `http://api.weatherapi.com/v1/forecast.json?key=d489ab773d4040548e9110519231102&q=07112&days=7`
//   );

//   const fetchedData = fetchForecastedData.json();
//   let forecastedData = fetchedData;
// };

// // date as of now
// let date = document.getElementById("date");
// const todaysDate = new Date().toLocaleDateString();
// date.innerHTML = todaysDate;

// for time
// function showTime() {
//   let date = new Date();
//   let h = date.getHours();
//   let m = date.getMinutes();
//   let s = date.getSeconds();
//   let session = "AM";

//   if (h > 12) {
//     session = "PM";
//   }
//   // Will add the zeros at start of the element if its less then 10 hour, minutes or a sec
//   h = h < 10 ? "0" + h : h;
//   m = m < 10 ? "0" + m : m;
//   s = s < 10 ? "0" + s : s;
//   let time = h + ":" + m + ":" + s + " " + session;
//   document.getElementById("DigitalCLOCK").innerText = time;

//   setTimeout(showTime, 1000);
// }

// showTime();

// function that change background of the web app
// function backgroundChange(weather) {
//   if (weather === "Rain") {
//     document.body.style.backgroundImage =
//       "url('https://sukhbinder.files.wordpress.com/2012/10/wpid-rain.jpg')";
//   } else if (weather === "Clouds") {
//     document.body.style.backgroundImage = "url(cloud.gif)";
//   } else if (weather === "Clear") {
//     document.body.style.backgroundImage = "url('https://i...')";
//   } else if (weather === "Haze") {
//     document.body.style.backgroundImage =
//       "url('https://live.staticflickr.com/7192/6814624698_2a45c14996_n.jpg')";
//   } else {
//     document.body.style.backgroundImage = "url(background.gif)";
//   }
// }

// <button onclick="backgroundChange('Rain')">rain</button>
// <button onclick="backgroundChange('Haze')">haze</button>
