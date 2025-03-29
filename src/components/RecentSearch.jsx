export default function RecentSearches({
  recentSearches,
  setCity,
  fetchWeather,
}) {
  if (recentSearches.length === 0) return null; // Don't render if no searches

  return (
    <div className="flex gap-2 mb-4 flex-wrap">
      {recentSearches.map((search, index) => (
        <button
          key={index}
          className="bg-gray-200 text-black px-3 py-2 rounded-md hover:bg-gray-300 transition"
          onClick={() => {
            setCity(search);
            fetchWeather(search);
          }}
        >
          {search.charAt(0).toUpperCase() + search.slice(1)}
        </button>
      ))}
    </div>
  );
}
