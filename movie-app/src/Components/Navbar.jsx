import { useState } from "react";
import { Link } from "react-router-dom";

const genres = ["Action", "Comedy", "Horror", "Sci-Fi", "Adventure", "Animation", "Biography", "Crime", "Documentary", "Drama", "Family", "Fantasy", "History", "Musical", "Mystery",  "Sport", "Thriller", "War", "Western"];

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      console.log("Search for:", searchTerm);
      // TODO: redirect or trigger search result
    }
  };

  return (
    <nav className="bg-white shadow-md px-4 py-3 flex flex-col sm:flex-row items-center justify-between">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-blue-600 mb-2 sm:mb-0">
        🎬 MovieApp
      </Link>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="flex items-center space-x-2 mb-2 sm:mb-0">
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-3 py-1 border border-gray-300 rounded-lg w-40 sm:w-64"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* Genre Dropdown */}
      <select
        className="border border-gray-300 rounded px-2 py-1 mb-2 sm:mb-0"
        onChange={(e) => {
            const selected = e.target.value;
            if (selected) {
            console.log("Selected genre:", selected);
            // TODO: Implement genre filtering / redirect
            }
        }}
        >
        <option value="">Genres</option>
        {genres.map((genre) => (
            <option key={genre} value={genre.toLowerCase()}>
            {genre}
            </option>
        ))}
       </select>

        
      {/* Auth Links */}
      <div className="space-x-3">
        <Link to="/login" className="text-gray-600 hover:text-blue-600">
          Login
        </Link>
        <Link to="/signup" className="text-gray-600 hover:text-blue-600">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
