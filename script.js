const apiKey = "f6de8987ae8e7440af9cf937798021a9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&";

const search = document.querySelector(".search input");
const searchBtn = document.querySelector(".search .button");
const weatherIcon = document.querySelector(".icon");

async function checkWeather(city = "Maribor") {
  const response = await fetch(apiUrl + `q=${city}&appid=${apiKey}`);
  var data = await response.json();

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".current-temp-unit").innerHTML =
    Math.round(data.main.temp) + `°C`;
  document.querySelector(".feels-like-unit").innerHTML =
    Math.round(data.main.feels_like) + `°C`;
  document.querySelector(".pressure-unit").innerHTML =
    data.main.pressure + `mb`;
  document.querySelector(".humidity-unit").innerHTML = data.main.humidity + `%`;
  document.querySelector(".wind-speed-unit").innerHTML =
    data.wind.speed + `km/h`;

  if (data.weather[0].main == "Clouds") {
    weatherIcon.classList.add("fa-cloud");
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.classList.add("fa-sun");
  } else if (data.weather[0].main == "Rain" || "Drizzle") {
    weatherIcon.classList.add("fa-cloud-rain");
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.classList.add("fa-smog");
  }
}

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  checkWeather(search.value);
});

checkWeather();
