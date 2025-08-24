import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);

  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  if (!trailerVideo) return null;

  return (
    <iframe
      className="relative  w-fullscreen aspect-video object-cover"
      src={
        "https://www.youtube.com/embed/" +
        trailerVideo?.key +
        "?autoplay=1&mute=1&controls=0&loop=1&playlist=" +
        trailerVideo?.key +
        "&rel=0"
      }
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default VideoBackground;
