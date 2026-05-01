import useFetch from "../hooks/useFetch";
import MovieCard from "../components/MovieCard";

export default function Home() {
  const { data, loading } = useFetch("/trending/movie/week");

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <div>
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-black to-gray-900 p-10">
        <h1 className="text-4xl font-bold mb-2">Welcome to MovieHub 🎬</h1>
        <p className="text-gray-400">
          Discover trending movies and TV shows
        </p>
      </div>

      {/* Movies Grid */}
      <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        {data?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}