
# WeatherNow

A simple, browser-based weather application built with HTML, CSS, and JavaScript using the Open-Meteo APIs.

## Features

- Search for weather by city name
- Display current temperature in °C
- Display relative humidity
- Display wind speed in km/h
- Handle invalid city names and request errors
- Responsive, dark-themed user interface

## How It Works

WeatherNow uses two APIs:

1. **Geocoding API:** Finds a city's location and returns its latitude and longitude.
2. **Weather Forecast API:** Uses those coordinates to retrieve current weather data.

JavaScript fetches the API responses, parses the returned JSON, and updates the webpage with the weather information.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Open-Meteo Geocoding API
- Open-Meteo Weather Forecast API

## Run Locally

1. Download or clone this repository.
2. Open `index.html` in your browser.
3. Enter a city name and click **Search**.

An internet connection is required to retrieve weather data. No API key is needed for ordinary non-commercial use of Open-Meteo.

## What I Learned

- Making HTTP requests with JavaScript `fetch()`
- Working with asynchronous functions using `async/await`
- Parsing JSON API responses
- Accessing nested objects and arrays
- Connecting multiple APIs in one application
- Updating HTML dynamically with JavaScript
- Handling errors and missing search results


## APIs

-
- Connecting multiple APIs in one application
- Updating HTML dynamically with JavaScript
- Handling errors and missing search[Open-Meteo Geocoding API](https://open-meteo.com/en/docs/geocoding-api)
- [Open-Meteo Weather Forecast API](https://open-meteo.com/en/docs)

## Future Improvements

- Display weather conditions and icons
- Add a multi-day forecast
- Improve accessibility and mobile styling
- Add recent city searches


Built as a learning project to practice working with APIs and JavaScript.
