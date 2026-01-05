const apiKey = "a714dd134f6cf618ee9b585941dab5dc";

function getWeather() {
    const city = document.getElementById("cityInput").value.trim();
    const weatherInfo = document.getElementById("weatherInfo");

    if (city === "") {
        weatherInfo.innerHTML = "Please enter a city name";
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {

            console.log(data); // 👈 VERY IMPORTANT (debug)

            if (!data.name) {
                weatherInfo.innerHTML = "City not found";
                return;
            }

            weatherInfo.innerHTML = `
                <h2>${data.name}</h2>
                <p>🌡 Temperature: ${data.main.temp} °C</p>
                <p>☁ Condition: ${data.weather[0].description}</p>
                <p>💧 Humidity: ${data.main.humidity}%</p>
                <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
            `;
        })
        .catch(() => {
            weatherInfo.innerHTML = "Error fetching data";
        });
}
