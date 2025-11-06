import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
return (
<nav className="bg-white shadow-sm">
<div className="container mx-auto px-4 py-3 flex items-center justify-between">
<Link to="/" className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">M</div>
<div>
<div className="font-semibold">Movie Search</div>
<div className="text-xs text-slate-500">OMDB + React + Tailwind</div>
</div>
</Link>
<div>
<Link to="/" className="text-sm text-slate-700 hover:text-slate-900">Home</Link>
</div>
</div>
</nav>
)
}