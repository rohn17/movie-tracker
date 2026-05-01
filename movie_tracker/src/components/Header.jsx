import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { WatchlistContext } from "../context/WatchlistContext";
import { AuthContext } from "../context/AuthContext";

export default function Header() {
  const [query, setQuery] = useState("");

  const { watchlist } = useContext(WatchlistContext);
  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  // 🔍 Search
  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/movies?search=${query}`);
    setQuery("");
  };

  return (
    <header className="bg-black/90 backdrop-blur sticky top-0 z-50 px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-4 border-b border-gray-800">
      
      {/* Logo */}
      <h1 className="text-2xl font-bold text-red-500 tracking-wide">
        🎬 MovieHub
      </h1>

      {/* Search */}
      <form onSubmit={handleSearch} className="w-full md:w-1/3">
        <input
          type="text"
          placeholder="Search movies..."
          className="w-full px-4 py-2 rounded-full bg-gray-200 text-black outline-none focus:ring-2 ring-red-500"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>

      {/* Nav */}
      <nav className="flex items-center gap-4 text-sm md:text-base text-white">
        <Link className="hover:text-red-400" to="/">Home</Link>
        <Link className="hover:text-red-400" to="/movies">Movies</Link>
        <Link className="hover:text-red-400" to="/tv">TV</Link>

        {/* Watchlist */}
        <Link className="hover:text-red-400" to="/watchlist">
          Watchlist ({watchlist.length})
        </Link>

        {/* 🔐 Auth Section */}
        {user ? (
          <>
            {/* Username */}
            <span className="text-green-400 font-semibold">
              👤 {user.name}
            </span>

            {/* Logout */}
            <button
              onClick={() => {
                logout();
                navigate("/");
              }}
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="bg-green-500 px-3 py-1 rounded hover:bg-green-600"
          >
            Login
          </Link>
        )}
      </nav>
    </header>
  );
}