export default function SearchInput({ city, setCity, fetchWeather }) {
  return (
    <div className="flex flex-col sm:flex-row gap-2 mb-4 w-full max-w-md">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && fetchWeather(city)}
        className="p-2 border rounded-md shadow-sm w-full bg-white text-black"
      />
      <button
        onClick={() => fetchWeather(city)} // ✅ Pass the city explicitly
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full sm:w-auto"
      >
        Search
      </button>
    </div>
  );
}
