import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTopRatedMovies } from '../utils/movieSlice';
const useTopRatedMovies = () => {
    // to add the movies data to thhe redux sttore we use useDispatch
       const dispatch =useDispatch();
       // to make api call to fetch the data
    const getTopRatedMovies=async()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
        const json=await data.json();
        dispatch(addTopRatedMovies(json.results));
      
    };

    useEffect(()=>{
        getTopRatedMovies();
    },[]);
  
}

export default useTopRatedMovies;

