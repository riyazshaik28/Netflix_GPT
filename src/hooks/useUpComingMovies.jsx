import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addUpComingMovies } from '../utils/movieSlice';
const useUpComingMovies = () => {
  // to add the movies data to thhe redux sttore we use useDispatch
    const dispatch =useDispatch(); 
// to make api call to fetch the data
    const getUpComingMovies=async()=>{
        const data=await fetch( 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',API_OPTIONS);

    const json= await data.json();

    dispatch(addUpComingMovies(json.results));
    }
// to call the api only once when the components called
    useEffect(()=>{
getUpComingMovies();
    },[]);
}

export default useUpComingMovies;