import React from 'react'

export const MovieCard = ({ movieArray }) => {
  return (
    <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movieArray.map((movie) => (
          <div key={movie.imdbID} className="border p-4 rounded-lg text-center bg-slate-700">
              <h2 className="text-lg font-semibold">{movie.Title} ({movie.Year})</h2>
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
