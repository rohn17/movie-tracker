import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/300x450?text=No+Image";

  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="relative rounded-lg overflow-hidden group cursor-pointer shadow-lg">
        
        {/* ⭐ Rating Badge */}
        <div className="absolute top-2 left-2 bg-yellow-400 text-black text-xs px-2 py-1 rounded font-semibold z-10">
          ⭐ {movie.vote_average?.toFixed(1)}
        </div>

        {/* 🎬 Image */}
        <div className="w-full h-72 bg-black">
          <img
            src={image}
            alt={movie.title}
            className="w-full h-full object-contain group-hover:scale-105 transition duration-300"
          />
        </div>

        {/* 🎯 Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-3">
          <h3 className="text-sm font-bold line-clamp-2">
            {movie.title}
          </h3>

          <p className="text-xs text-gray-300">
            📅 {movie.release_date}
          </p>
        </div>

      </div>
    </Link>
  );
}