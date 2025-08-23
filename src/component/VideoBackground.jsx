import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({movieId}) => {

    useMovieTrailer(movieId);
    
    const trailerVideo =useSelector(store=>store.movies?.trailerVideo)
        if (!trailerVideo) return null;
    //it is custom hook which which the trailer of movie 

      

  return (
 <div className="absolute top-0 left-0 w-full h-screen -z-10 overflow-hidden">
  <iframe
 className="w-full h-full object-cover"
   src={
    "https://www.youtube.com/embed/" +
    trailerVideo?.key +
    "?autoplay=1&mute=1&controls=1&loop=1&playlist=" +
    trailerVideo?.key +
    "&rel=0"
  }
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowFullScreen
  ></iframe>
</div>
  )
}

export default VideoBackground;
