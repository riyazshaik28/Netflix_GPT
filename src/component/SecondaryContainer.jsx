import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  if (!movies|| movies.length === 0) return null;

  return (
    <div className="  ">
      <div className="-mt-96 relative z-20">
      <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
     
      <MovieList title="Popular" movies={movies.PopularMovies} />
      <MovieList title="Top Rated" movies={movies.TopRatedMovies} />
      <MovieList title="Upcoming" movies={movies.UpComingMovies} />
       <MovieList title="Trending Now" movies={movies.nowPlayingMovies} />
        <MovieList title="comdey" movies={movies.nowPlayingMovies} />
         <MovieList title="thriller" movies={movies.nowPlayingMovies} />
          <MovieList title="war" movies={movies.nowPlayingMovies} />
           <MovieList title="Love" movies={movies.nowPlayingMovies} />
    </div>
    </div>
  );
};

export default SecondaryContainer;
