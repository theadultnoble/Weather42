# Weather 42

Start with a simple weather app

**Historical Weather Data:**

- Allow users to explore historical weather data for their location. They could compare current conditions with the same date in previous years.

**Eco-Friendly Tips:**

- Provide an eco-friendly tip related to the weather every day. For instance, on a sunny day, suggest an energy-saving tip or eco-friendly outdoor activities.

## **Requirements**

- Create a React app
- An input for users to type city name
- Display current weather, including weather conditions, temperature, humidity, wind speed, and date and time
- Visualization to display the temperature change, humidity change, and weather conditions of each day

## **Suggested Implementation**

- Fetch the user's device position. If you're unable to get the user's position, set London as the default location.
- Fetch weather data (forecast data and current weather data) of the location from weather API
- Format the data into charts
- Display the chart and current weather

## **References**

- [Getting device position](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation)
- [Chart.js](https://www.chartjs.org/): JavaScript charting
- [OpenWeather](https://openweathermap.org/) provides weather data APIs