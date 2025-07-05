// src/pages/Home.jsx

import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { fetchPopularMovies } from "../api/tmdb";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      const popular = await fetchPopularMovies();
      setMovies(popular);
    };
    loadMovies();
  }, []);

  return (
    <div className="px-6 py-10 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">🔥 Popular Movies 2025</h2>

      {/* ✅ Horizontal Scroll Row with Flex */}
      <div className="flex flex-row gap-6 overflow-x-auto whitespace-nowrap pb-8 scrollbar-hide">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
