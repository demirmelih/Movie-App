const API_KEY = "612e9c0e30c45e0f6512f5d14166c2cf"; // 🔐 Replace with your key
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500"; // You can use w200, w300, w500, original

export const fetchPopularMovies = async () => {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
  const data = await res.json();
  return data.results.map((movie) => ({
    id: movie.id,
    title: movie.title,
    poster: IMAGE_BASE_URL + movie.poster_path,
    rating: movie.vote_average.toFixed(1),
  }));
};
