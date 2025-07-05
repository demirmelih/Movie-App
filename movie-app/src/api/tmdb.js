const API_KEY = "612e9c0e30c45e0f6512f5d14166c2cf";     
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500"; // w200 | w300 | w500 | original

// Fetch the first page of popular movies
export const fetchPopularMovies = async () => {
    const res = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    const data = await res.json();
  
    return data.results.map((m) => ({
      id: m.id,
      title: m.title,
      poster: IMAGE_BASE_URL + m.poster_path,
      rating: m.vote_average ? m.vote_average.toFixed(1) : "NR",   // ← fixed
      release_date: m.release_date,
    }));
  };
  
