import React from 'react'
import { Link } from 'react-router-dom'


export default function NotFound() {
return (
<div className="text-center py-20">
<h2 className="text-3xl font-bold">404 — Page not found</h2>
<p className="mt-4 text-slate-600">We couldn't find what you were looking for.</p>
<Link to="/" className="inline-block mt-6 px-4 py-2 bg-indigo-600 text-white rounded-md">Go home</Link>
</div>
)
}