import { useState } from "react";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";
import WeatherCard from "./WeatherCard";
import Forecast from "./Forecast";
import SearchInput from "./SearchInput";
import ThemeToggle from "./ThemeToggle";
import RecentSearches from "./RecentSearch";

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [recentSearches, setRecentSearches] = useState([]);

  const API_KEY = "0df35e48da89fa9b8160a84380dd64ae";

  const fetchWeather = async (selectedCity) => {
    let formattedCity = (selectedCity || city).trim().toLowerCase();

    if (!/^[A-Za-z\s]+$/.test(formattedCity)) {
      setError("City name must contain only letters.");
      setCity("");
      return;
    }

    if (!formattedCity) {
      setError("Please enter a valid city name.");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${formattedCity}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
      setCity("");

      // ✅ Update recent searches, ensuring no duplicates and only last 5 are stored
      setRecentSearches((prev) => {
        const updatedSearches = [
          formattedCity,
          ...prev.filter((c) => c !== formattedCity),
        ].slice(0, 5);
        return updatedSearches;
      });

      fetchForecast(formattedCity);
    } catch (err) {
      setError("City not found or API error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fetchForecast = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      setForecast(response.data);
    } catch (err) {
      setError("Failed to fetch forecast data.");
    }
  };

  return (
    <div
      className={`relative flex flex-col items-center justify-center min-h-screen p-4 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <RotatingLines
            visible={true}
            height={"100"}
            width={"100"}
            strokeColor={"#3498db"}
            strokeWidth={"5"}
            animationDuration={"0.75"}
          />
        </div>
      )}
      <div className="flex items-center justify-between w-full max-w-md mb-4">
        <h1 className="text-2xl sm:text-3xl font-bold">Weather Dashboard</h1>
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <SearchInput city={city} setCity={setCity} fetchWeather={fetchWeather} />
      <RecentSearches
        recentSearches={recentSearches}
        setCity={setCity}
        fetchWeather={fetchWeather}
      />{" "}
      {/* ✅ Using the new component */}
      {error && <p className="text-red-500 text-center">{error}</p>}
      {weather && (
        <WeatherCard
          weather={weather}
          fetchWeather={fetchWeather}
          darkMode={darkMode}
        />
      )}
      {forecast && <Forecast forecast={forecast} darkMode={darkMode} />}
    </div>
  );
}
