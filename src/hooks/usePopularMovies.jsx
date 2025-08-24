import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";
const usePopularMovies=()=>{

  // to add the movies data to thhe redux sttore we use useDispatch
const dispatch=useDispatch();
// to make api call to fetch the data
  const getPopularMovies= async()=>{
    const data= await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
      API_OPTIONS);
      const json= await data.json();
      dispatch(addPopularMovies(json.results));
  };
// to call the api only once when the components called
  useEffect(()=>{
getPopularMovies();
  },[]);

}

export default usePopularMovies;