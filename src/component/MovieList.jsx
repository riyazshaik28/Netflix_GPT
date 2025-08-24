import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  return (
    <div className="-mt-13 ">
      <h2 className="text-3xl text-white py-4 font-bold ">{title}</h2>
      <div className="flex overflow-x-auto space-x-4 scrollbar-hide py-2 mb-12">
        {movies?.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
