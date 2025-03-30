import { IoRefresh } from "react-icons/io5";

export default function WeatherCard({ weather, fetchWeather, darkMode }) {
  return (
    <div
      className={`p-6 rounded-lg shadow-md w-full max-w-md text-center ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="text-2xl font-bold">{weather.name}</h2>
      <p className="text-lg">{weather.weather[0].description}</p>
      <p className="text-4xl font-bold">{weather.main.temp}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind: {weather.wind.speed} km/h</p>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="Weather icon"
        className="mx-auto"
      />

      <div className="flex justify-center mt-4">
        <button
          onClick={() => fetchWeather(weather.name)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center"
        >
          <IoRefresh className="mr-1" /> Refresh
        </button>
      </div>
    </div>
  );
}
