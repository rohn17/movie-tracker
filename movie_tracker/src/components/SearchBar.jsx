import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/movies?search=${query}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search movies..."
        className="p-2 rounded text-black"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}