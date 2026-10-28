
const form = document.getElementById("search-form");
const cityInput = document.getElementById("city-input");
const status = document.getElementById("status");
const weatherResult = document.getElementById("weather-result");

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const city = cityInput.value.trim();

    if (!city) {
        status.textContent = "Please enter a city name.";
        return;
    }

    // Clear old weather and show loading message
    status.textContent = "Searching for city...";
    weatherResult.innerHTML = "";

    try {
        // STEP 1: Find the city coordinates
        const geoUrl =
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`;

        const geoResponse = await fetch(geoUrl);

        if (!geoResponse.ok) {
            throw new Error(`City search failed (HTTP ${geoResponse.status})`);
        }

        const geoData = await geoResponse.json();

        if (!geoData.results || geoData.results.length === 0) {
            status.textContent = "City not found. Try another name.";
            return;
        }

        const location = geoData.results[0];
        const latitude = location.latitude;
        const longitude = location.longitude;

        // STEP 2: Fetch weather using the coordinates
        status.textContent = "Fetching weather...";

        const weatherUrl =
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m&timezone=auto`;

        const weatherResponse = await fetch(weatherUrl);

        if (!weatherResponse.ok) {
            throw new Error(`Weather request failed (HTTP ${weatherResponse.status})`);
        }

        const weatherData = await weatherResponse.json();

        if (!weatherData.current) {
            throw new Error("Weather data is missing from the response.");
        }

        const current = weatherData.current;

        // STEP 3: Display weather on the webpage
        weatherResult.innerHTML = `
            <h2>${current.temperature_2m}°C</h2>
            <p>📍 ${location.name}, ${location.country || ""}</p>

            <div class="weather-cards">
                <div class="weather-card">
                    <span>💧 Humidity</span>
                    <strong>${current.relative_humidity_2m}%</strong>
                </div>

                <div class="weather-card">
                    <span>💨 Wind speed</span>
                    <strong>${current.wind_speed_10m} km/h</strong>
                </div>
            </div>
        `;

        status.textContent = "Weather updated successfully!";

    } catch (error) {
        console.error("Weather app error:", error);

        status.textContent =
            `Unable to load weather. ${error.message}`;

        weatherResult.innerHTML = `
            <p>Please check your internet connection and try again.</p>
        `;
    }
});
