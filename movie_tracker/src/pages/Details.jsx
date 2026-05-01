import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useContext, useState } from "react";
import { WatchlistContext } from "../context/WatchlistContext";

export default function Details() {
  const { id, type } = useParams();
  const navigate = useNavigate();

  const { data, loading, error } = useFetch(`/${type}/${id}`);
  const { data: videos } = useFetch(`/${type}/${id}/videos`);

  const { addToWatchlist } = useContext(WatchlistContext);

  const [showTrailer, setShowTrailer] = useState(false);

  const trailer = videos?.find(
    (v) => v.type === "Trailer" && v.site === "YouTube"
  );

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 bg-gray-700 px-3 py-1 rounded hover:bg-gray-600"
      >
        ← Back
      </button>

      <div className="grid md:grid-cols-2 gap-6">
        
        {/* Poster */}
        <img
          src={
            data.poster_path
              ? `${import.meta.env.VITE_IMAGE_URL}${data.poster_path}`
              : "https://via.placeholder.com/400x600?text=No+Image"
          }
          alt={data.title || data.name}
          className="rounded-lg shadow-lg w-full"
        />

        {/* Info */}
        <div>
          <h1 className="text-3xl font-bold mb-3">
            {data.title || data.name}
          </h1>

          <p className="text-gray-400 mb-2">
            📅 {data.release_date || data.first_air_date}
          </p>

          <p className="text-yellow-400 mb-4">
            ⭐ {data.vote_average}
          </p>

          <p className="mb-4 leading-relaxed">
            {data.overview}
          </p>

          {/* Genres */}
          <div className="flex flex-wrap gap-2 mb-4">
            {data.genres?.map((genre) => (
              <span
                key={genre.id}
                className="bg-gray-700 px-2 py-1 rounded text-sm"
              >
                {genre.name}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            
            {/* Watchlist */}
            <button
              className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white"
              onClick={() => addToWatchlist(data)}
            >
              ➕ Watchlist
            </button>

            {/* Trailer */}
            {trailer && (
              <button
                onClick={() => setShowTrailer(true)}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
              >
                ▶ Trailer
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 🎬 Trailer Modal */}
      {showTrailer && (
        <div
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
          onClick={() => setShowTrailer(false)}
        >
          <div
            className="bg-black p-4 rounded-lg w-[90%] md:w-[700px] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowTrailer(false)}
              className="absolute top-2 right-2 text-white text-xl"
            >
              ✖
            </button>

            <iframe
              width="100%"
              height="400"
              src={`https://www.youtube.com/embed/${trailer.key}`}
              title="Trailer"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}