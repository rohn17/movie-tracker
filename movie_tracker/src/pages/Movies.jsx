import { useLocation } from "react-router-dom";
import { useState } from "react";
import useFetch from "../hooks/useFetch";
import MovieCard from "../components/MovieCard";
import Loader from "../components/Loader";

export default function Movies() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("search");

  const [page, setPage] = useState(1);
  const [genre, setGenre] = useState("");

  // 🎯 Fetch genres
  const { data: genresData } = useFetch("/genre/movie/list");

  // 🎯 Build endpoint
  let endpoint = "";

  if (query) {
    endpoint = `/search/movie?query=${query}&page=${page}`;
  } else if (genre) {
    endpoint = `/discover/movie?with_genres=${genre}&page=${page}`;
  } else {
    endpoint = `/movie/popular?page=${page}`;
  }

  const { data, loading, error } = useFetch(endpoint);

  // ✅ Loader
  if (loading) return <Loader />;

  // ❌ Error
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  // ⚠️ Empty
  if (!data || data.length === 0) {
    return <p className="text-center mt-10">No movies found</p>;
  }

  return (
    <div className="p-4 max-w-7xl mx-auto">
      
      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">
        {query
          ? `Results for "${query}"`
          : genre
          ? "Filtered Movies"
          : "Popular Movies"}
      </h1>

      {/* 🎯 Genre Filter */}
      {!query && (
        <select
          onChange={(e) => {
            setGenre(e.target.value);
            setPage(1);
          }}
          className="mb-4 p-2 rounded text-black"
        >
          <option value="">All Genres</option>
          {genresData?.genres?.map((g) => (
            <option key={g.id} value={g.id}>
              {g.name}
            </option>
          ))}
        </select>
      )}

      {/* Movies Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {/* 🔄 Pagination */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600"
        >
          ⬅ Prev
        </button>

        <span className="px-4 py-2 bg-gray-800 rounded">
          Page {page}
        </span>

        <button
          onClick={() => setPage((p) => p + 1)}
          className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
        >
          Next ➡
        </button>
      </div>
    </div>
  );
}