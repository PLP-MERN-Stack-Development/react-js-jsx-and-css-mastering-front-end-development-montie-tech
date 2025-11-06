import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieById } from '../api'
import Loader from '../components/Loader'


export default function MoviePage() {
const { id } = useParams()
const [movie, setMovie] = useState(null)
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)


useEffect(() => {
let mounted = true
setLoading(true)
getMovieById(id)
.then((res) => {
if (!mounted) return
if (res.Response === 'True') setMovie(res)
else setError(res.Error || 'Movie not found')
})
.catch((err) => setError(err.message))
.finally(() => mounted && setLoading(false))


return () => (mounted = false)
}, [id])


if (loading) return <Loader />
if (error)
return <div className="text-center text-slate-600 py-8">Error: {error}</div>


return (
<div className="bg-white rounded-lg p-6 card-shadow md:flex gap-6">
<img
src={movie.Poster && movie.Poster !== 'N/A' ? movie.Poster : '/placeholder-poster.png'}
alt={movie.Title}
className="w-full max-w-sm object-cover rounded-md"
/>
<div>
<h2 className="text-2xl font-bold">{movie.Title} <span className="text-sm text-slate-500">({movie.Year})</span></h2>
<p className="text-sm text-slate-600 mt-2">{movie.Genre} • {movie.Runtime} • {movie.Rated}</p>
<p className="mt-4 text-slate-700">{movie.Plot}</p>


<div className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-600">
<div><strong>Director:</strong> {movie.Director}</div>
<div><strong>Writer:</strong> {movie.Writer}</div>
<div><strong>Actors:</strong> {movie.Actors}</div>
<div><strong>Language:</strong> {movie.Language}</div>
</div>


<div className="mt-6">
<a href={`https://www.imdb.com/title/${movie.imdbID}`} target="_blank" rel="noreferrer" className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md">Open on IMDB</a>
</div>
</div>
</div>
)
}