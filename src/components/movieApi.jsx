import { useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

export const MovieApi = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = process.env.REACT_APP_API_KEY;

  const BASE_URL = "http://www.omdbapi.com/?"



  const fetchMovie = async (query) => {
    if (!query) return;

    setLoading(true);
    setError("");

    try {
        const response = await axios.get(`${BASE_URL}s=${query}&apikey=${API_KEY}`);
        console.log(response)
        setMovies(response.data.Search);
    } catch (err) {
      setError("Error fetching movie details. Please try again.");
    }
    
    setLoading(false);
  };



  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Movie Search</h1>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter movie title..."
          className="p-2 border rounded-lg"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={()=>fetchMovie(query)} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Search
        </button>
      </div>

      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="text-red-500 mt-4">{error}</p>}

      <MovieCard movieArray={movies} />

      
    </div>
  );
};

export default MovieApi;
