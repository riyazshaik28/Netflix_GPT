import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
    const movies=useSelector(store=>store.movies?.nowPlayingMovies)

    if(!movies || movies.length===0) return null;

    const mainMovie=movies[0];
   

    const{original_title,overview,id}= mainMovie;

  return (
    <div  className="relative w-full">
      <VideoTitle title={original_title} overview={overview} />  
      <VideoBackground movieId={id} />
    </div>
  )
}

export default MainContainer;
