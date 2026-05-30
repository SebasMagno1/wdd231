const key = "YOUR_API_KEY";

const lat = 40.2969;
const lon = -111.6946;

const currentURL =
`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${key}`;

const forecastURL =
`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${key}`;

async function getWeather() {

    const response = await fetch(currentURL);

    const data = await response.json();

    document.querySelector("#current-temp").textContent =
        `Temperature: ${Math.round(data.main.temp)}°F`;

    document.querySelector("#weather-desc").textContent =
        data.weather[0].description;

    getForecast();
}

async function getForecast() {

    const response = await fetch(forecastURL);

    const data = await response.json();

    const forecastDiv = document.querySelector("#forecast");

    forecastDiv.innerHTML = "";

    const days = data.list.filter(item =>
        item.dt_txt.includes("12:00:00")
    );

    days.slice(0,3).forEach(day => {

        const p = document.createElement("p");

        const date = new Date(day.dt_txt);

        p.textContent =
            `${date.toLocaleDateString("en-US",{weekday:"short"})}: ${Math.round(day.main.temp)}°F`;

        forecastDiv.appendChild(p);
    });
}

getWeather();