import React from 'react'
import { Link } from 'react-router-dom'


export default function MovieCard({ movie }) {
const poster = movie.Poster && movie.Poster !== 'N/A' ? movie.Poster : '/placeholder-poster.png'


return (
<div className="bg-white rounded-lg overflow-hidden card-shadow">
<img src={poster} alt={movie.Title} className="w-full h-64 object-cover" />
<div className="p-4">
<h3 className="font-semibold text-lg truncate">{movie.Title}</h3>
<p className="text-sm text-slate-500">{movie.Year} • {movie.Type}</p>
<div className="mt-3 flex justify-end">
<Link to={`/movie/${movie.imdbID`} className="text-sm text-indigo-600 hover:underline">Details</Link>
</div>
</div>
</div>
)
}