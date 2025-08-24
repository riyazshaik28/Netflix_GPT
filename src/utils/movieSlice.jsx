import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    PopularMovies:null,
    trailerVideo:null,
    TopRatedMovies:null,
    UpComingMovies:null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.PopularMovies = action.payload;
    },
    addTopRatedMovies:(state,action)=>{
       state.TopRatedMovies=action.payload;
    },
    addUpComingMovies:(state,action)=>{
       state.UpComingMovies=action.payload;
    },
    addTrailerVideo:(state,action)=>{
     state.trailerVideo =action.payload;
    }
  },
});

export const { addNowPlayingMovies,addTrailerVideo,addPopularMovies ,addTopRatedMovies,addUpComingMovies} = movieSlice.actions;

export default movieSlice.reducer;
