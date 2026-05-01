import { Link } from "react-router-dom";

export default function TvCard({ show }) {
  const img = show.poster_path
    ? `https://image.tmdb.org/t/p/w500${show.poster_path}`
    : "https://via.placeholder.com/300";

  return (
    <Link to={`/tv/${show.id}`}>
      <div className="bg-gray-800 rounded p-2">
        <img src={img} alt={show.name} />
        <h3>{show.name}</h3>
      </div>
    </Link>
  );
}