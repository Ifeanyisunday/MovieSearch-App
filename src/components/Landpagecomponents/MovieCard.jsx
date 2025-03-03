import React from 'react'

export const MovieCard = ({ movieArray }) => {
  return (
    <div className="mt-[130px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {movieArray.map((movie) => (
          <div key={movie.imdbID} className="border p-4 rounded-lg text-center w-[300px] bg-gray-950">
              <h2 className="text-white text-lg font-semibold">{movie.Title} ({movie.Year})</h2>
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="w-32 mx-auto my-2"
              />
            </div>
        ))
        }
    </div>
  )
}

export default MovieCard
