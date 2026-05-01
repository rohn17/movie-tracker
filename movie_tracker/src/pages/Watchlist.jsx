import { useContext } from "react";
import { WatchlistContext } from "../context/WatchlistContext";

export default function Watchlist() {
  const { watchlist, removeFromWatchlist } = useContext(WatchlistContext);

  if (!watchlist || watchlist.length === 0) {
    return (
      <p className="text-center mt-10 text-lg">
        ⭐ Your watchlist is empty
      </p>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      
      <h1 className="text-2xl font-bold mb-6">⭐ Your Watchlist</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {watchlist.map((item) => (
          <div
            key={item.id}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg group"
          >
            {/* 🎬 Image */}
            <div className="w-full h-72 bg-black">
              <img
                src={
                  item.poster_path
                    ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                    : "https://via.placeholder.com/300x450?text=No+Image"
                }
                alt={item.title || item.name}
                className="w-full h-full object-contain group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* ⭐ Rating Badge */}
            <div className="absolute top-2 left-2 bg-yellow-400 text-black text-xs px-2 py-1 rounded font-semibold">
              ⭐ {item.vote_average?.toFixed(1)}
            </div>

            {/* 📄 Info */}
            <div className="p-3">
              <h3 className="text-sm font-semibold line-clamp-2">
                {item.title || item.name}
              </h3>

              <p className="text-xs text-gray-400">
                📅 {item.release_date || item.first_air_date}
              </p>

              {/* ❌ Remove Button */}
              <button
                onClick={() => removeFromWatchlist(item.id)}
                className="bg-red-500 hover:bg-red-600 w-full mt-2 py-1 rounded text-sm"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}