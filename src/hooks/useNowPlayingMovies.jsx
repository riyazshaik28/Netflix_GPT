import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies=()=>{

  // to add the movies data to thhe redux sttore we use useDispatch
const dispatch=useDispatch();
// to make api call to fetch the data
  const getNowPlayingMovies= async()=>{
    const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',
      API_OPTIONS);
      const json= await data.json();
      dispatch(addNowPlayingMovies(json.results));
  };
// to call the api only once when the components called
  useEffect(()=>{
getNowPlayingMovies();
  },[]);

}

export default useNowPlayingMovies;