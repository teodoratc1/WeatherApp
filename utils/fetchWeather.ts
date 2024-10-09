import { fetchWeatherApi } from "openmeteo";

export async function fetchWeatherDataLocation(lat: number, long: number) {
  const params = {
    latitude: lat,
    longitude: long,
    current: ["temperature_2m", "relative_humidity_2m"],
    timezone: "GMT",
  };
  const url = "https://api.open-meteo.com/v1/forecast";
  const responses = await fetchWeatherApi(url, params);

  // Helper function to form time ranges
  const range = (start: number, stop: number, step: number) =>
    Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

  const response = responses[0];
  const utcOffsetSeconds = response.utcOffsetSeconds();
  const current = response.current()!;

  // Note: The order of weather variables in the URL query and the indices below need to match!
  const data = {
    time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
    temperature: Number(current.variables(0)?.value().toFixed(2)),
    relativeHumidity: current.variables(1)?.value(),
  };
  return data;
}
export async function fetchWeatherDataFile() {
  let locations = require("@/utils/locations.json");

  const latitudes = locations.map(
    (city: { latitude: number }) => city.latitude
  );
  const longitudes = locations.map(
    (city: { longitude: number }) => city.longitude
  );

  const params = {
    latitude: latitudes,
    longitude: longitudes,
    current: ["temperature_2m", "relative_humidity_2m"],
    timezone: "GMT",
  };
  const url = "https://api.open-meteo.com/v1/forecast";
  const responses = await fetchWeatherApi(url, params);

  // Helper function to form time ranges
  const range = (start: number, stop: number, step: number) =>
    Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

  let data = [];
  for (let i = 0; i < responses.length; i++) {
    const response = responses[i];
    const utcOffsetSeconds = response.utcOffsetSeconds();
    const current = response.current()!;
    const currentCity = {
      city: locations[i].city,
      time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
      temperature: Number(current.variables(0)?.value().toFixed(2)),
      relativeHumidity: current.variables(1)?.value(),
    };
    data.push(currentCity);
  }
  return data || null;
}

export async function fetchWeatherDataLocation1() {
  const params = {
    latitude: [44.4323],
    longitude: [26.1063],
    current: [
      "temperature_2m",
      "relative_humidity_2m",
      "precipitation",
      "rain",
      "cloud_cover",
      "wind_speed_10m",
    ],
    daily: [
      "temperature_2m_max",
      "temperature_2m_min",
      "sunrise",
      "sunset",
      "precipitation_sum",
      "rain_sum",
      "wind_speed_10m_max",
    ],
    timezone: "GMT",
  };
  const url = "https://api.open-meteo.com/v1/forecast";
  const responses = await fetchWeatherApi(url, params);

  // Helper function to form time ranges
  const range = (start: number, stop: number, step: number) =>
    Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

  // Process first location. Add a for-loop for multiple locations or weather models
  const response = responses[0];
  // Attributes for timezone and location
  const utcOffsetSeconds = response.utcOffsetSeconds();
  const current = response.current()!;
  const daily = response.daily()!;

  // Note: The order of weather variables in the URL query and the indices below need to match!
  const weatherData = {
    current: {
      time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
      temperature2m: current.variables(0)!.value(),
      relativeHumidity2m: current.variables(1)!.value(),
      precipitation: current.variables(2)!.value(),
      rain: current.variables(3)!.value(),
      cloudCover: current.variables(4)!.value(),
      windSpeed10m: current.variables(5)!.value(),
    },

    daily: {
      day: range(
        Number(daily.time()),
        Number(daily.timeEnd()),
        daily.interval()
      ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
      temperature2mMax: daily.variables(0)!.valuesArray()!,
      temperature2mMin: daily.variables(1)!.valuesArray()!,
      sunrise: daily.variables(2)!.valuesArray()!,
      sunset: daily.variables(3)!.valuesArray()!,
      precipitationSum: daily.variables(4)!.valuesArray()!,
      rainSum: daily.variables(5)!.valuesArray()!,
      windSpeed10mMax: daily.variables(6)!.valuesArray()!,
    },
  };
  return weatherData || null;
}
