import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">

        {/* Left */}
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} MovieHub. All rights reserved.
        </p>

        {/* Center Links */}
        <div className="flex gap-4">
          <Link to="/" className="hover:text-red-400 transition">
            Home
          </Link>
          <Link to="/movies" className="hover:text-red-400 transition">
            Movies
          </Link>
          <Link to="/tv" className="hover:text-red-400 transition">
            TV Shows
          </Link>
        </div>

        {/* Right */}
        <p className="text-xs text-center md:text-right">
          Built with ❤️ using React & TMDB API
        </p>

      </div>
    </footer>
  );
}