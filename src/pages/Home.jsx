import React, { useState } from 'react'
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)


async function handleSearch(q) {
setQuery(q)
setLoading(true)
setError(null)
try {
const res = await searchMovies(q)
if (res.Response === 'True') {
setMovies(res.Search)
} else {
setMovies([])
setError(res.Error || 'No results')
}
} catch (err) {
setError(err.message)
setMovies([])
} finally {
setLoading(false)
}
}


return (
<div>
<div className="mb-6">
<SearchBar onSearch={handleSearch} defaultValue={query} />
</div>


{loading && <Loader />}


{error && (
<div className="text-center text-slate-600 py-8">{error}</div>
)}


{!loading && !error && movies.length === 0 && (
<div className="text-center text-slate-500 py-12">Try searching for a movie above.</div>
)}


<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
{movies.map((m) => (
<MovieCard key={m.imdbID} movie={m} />
))}
</div>
</div>
)
