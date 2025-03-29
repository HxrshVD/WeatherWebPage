export default function Forecast({ forecast, darkMode }) {
  if (!forecast || !forecast.list?.length) {
    return (
      <p className="text-center text-gray-500">No forecast data available.</p>
    );
  }

  return (
    <div
      className={`w-full max-w-md mt-6 p-4 rounded-lg ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
      }`}
    >
      <h3 className="text-xl flex justify-center font-bold mb-3">
        5-Day Forecast
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {forecast.list
          .filter((_, index) => index % 8 === 0)
          .slice(0, 5)
          .map((item, index) => (
            <div
              key={index}
              className={`p-2 rounded shadow-md text-center ${
                darkMode ? "bg-gray-700 text-white" : "bg-white text-black"
              }`}
            >
              <p className="font-bold">
                {new Date(item.dt_txt).toLocaleDateString()}
              </p>
              <p>{item.weather[0].description}</p>
              <p className="text-lg font-bold">{item.main.temp}°C</p>
              <img
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                // src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                alt="forecast icon"
                className="mx-auto"
              />
            </div>
          ))}
      </div>
    </div>
  );
}
