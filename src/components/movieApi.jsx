import { useState } from "react";
import axios from "axios";
import MovieCard from "./Landpagecomponents/MovieCard";
import Navbar from "./Landpagecomponents/Navbar";

export const MovieApi = () => {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = process.env.REACT_APP_API_KEY;
  const BASE_URL = "http://www.omdbapi.com/?"


  const fetchMovie = async (searchValue) => {
    if (!searchValue){
      return "search input is required"
    }else{
      setLoading(true);
      setError("");
      
      try {
          const response = await axios.get(`${BASE_URL}s=${searchValue}&apikey=${API_KEY}`);
          console.log(response)
          setMovies(response.data.Search);
      } catch (err) {
        setError("Error fetching movie details. Please try again.");
      }

    }

      setLoading(false);
  };



  return (
    <>
    <Navbar fetchFunction={fetchMovie} searchValue={searchValue} setSearchValue={setSearchValue}/>
      <div className="flex flex-col items-center p-4">
          {loading && <p className="mt-4 text-white font-bold">Loading...</p>}
          {error && <p className="text-red-500 mt-4">{error}</p>}

          <MovieCard movieArray={movies} /> 
      </div>
    </>
  );
};

export default MovieApi;
