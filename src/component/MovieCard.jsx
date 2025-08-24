import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ title, posterPath }) => {
  return (
    <div className="w-48 flex-shrink-0 cursor-pointer transform transition duration-300 hover:scale-105 hover:z-20">
      <img
        alt={title}
        src={IMG_CDN_URL + posterPath}
        className="rounded-lg shadow-lg"
      />
      <h3 className="mt-2 text-white text-sm font-semibold truncate">{title}</h3>
    </div>
  );
};

export default MovieCard;
