const MovieCard = ({ movie }) => {
  return (
    <div className="w-[160px] flex-shrink-0 rounded-lg overflow-hidden relative">
      {/* poster */}
      <div className="relative">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-[240px] object-cover"
        />

        {/* rating circle – now half-over the bottom edge */}
        <div className="absolute -bottom-4 left-2 w-10 h-10 rounded-full
                        bg-black text-white text-xs font-bold flex items-center
                        justify-center border-4 border-white shadow">
          {movie.rating}
        </div>
      </div>

      {/* title + date */}
      <div className="mt-6 text-center px-1 pb-4">
        <h3 className="text-[15px] font-semibold leading-tight truncate">
          {movie.title}
        </h3>
        <p className="text-xs text-gray-500 mt-1 flex items-center justify-center gap-1">
          📅 {movie.release_date}
        </p>
      </div>
    </div>
  );
};
export default MovieCard;
