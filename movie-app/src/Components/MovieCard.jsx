// src/components/MovieCard.jsx

const MovieCard = ({ movie }) => {
    return (
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition transform hover:-translate-y-1">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">{movie.title}</h3>
          <p className="text-sm text-gray-600">⭐ IMDb: {movie.rating}</p>
        </div>
      </div>
    );
  };
  
  export default MovieCard;
  