import React, { useState } from 'react'


export default function SearchBar({ onSearch, defaultValue = '' }) {
const [query, setQuery] = useState(defaultValue)


function submit(e) {
e.preventDefault()
if (!query.trim()) return
onSearch(query.trim())
}


return (
<form onSubmit={submit} className="flex gap-2 items-center w-full max-w-2xl">
<input
value={query}
onChange={(e) => setQuery(e.target.value)}
placeholder="Search movies, e.g., The Matrix"
className="flex-1 rounded-md border border-slate-200 shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
/>
<button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Search</button>
</form>
)
}