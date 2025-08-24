import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browser = () => {
  useNowPlayingMovies();
   usePopularMovies();
   useTopRatedMovies();
   useUpComingMovies();
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Header />
      <main className="pt-16 px-6 space-y-16">
        <MainContainer />
        <SecondaryContainer />
      </main>
    </div>
  );
};

export default Browser;
