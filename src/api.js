import axios from 'axios'


const API_KEY = import.meta.env.VITE_OMDB_API_KEY
const client = axios.create({ baseURL: 'https://www.omdbapi.com/' })


export async function searchMovies(query, page = 1) {
if (!API_KEY) throw new Error('OMDB API key not set in VITE_OMDB_API_KEY')
const { data } = await client.get('/', {
params: { s: query, page, apikey: API_KEY },
})
return data
}


export async function getMovieById(id) {
if (!API_KEY) throw new Error('OMDB API key not set in VITE_OMDB_API_KEY')
const { data } = await client.get('/', {
params: { i: id, plot: 'full', apikey: API_KEY },
})
return data
}