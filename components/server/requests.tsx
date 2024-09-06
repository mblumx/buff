const API_KEY = process.env.NEXT_PUBLIC_TMDB_SECRET_KEY
const TMDB_URL = process.env.NEXT_PUBLIC_BASE_URL

interface Movie {
    id: number,
    title: string
}

export const getTrendingMovies = async (): Promise<Movie[]> => {
  const res = await fetch(
    `${TMDB_URL}/trending/movie/day?language=en-US&api_key=${API_KEY}`
  )
  const data = await res.json()

  if (!res.ok) {
    throw new Error("Failed to fetch trending movies")
  }

  console.log(data.results)
  return data.results as Movie[]
}

// export const getMovies = async (query: String) => {
//   const res = await fetch(
//     `${TMDB_URL}/search/movie?api_key=${API_KEY}&query=${query}`
//   )
//   const data = await res.json()
//   console.log(data.results)
//   return data.results
// }

// export const getMovieDetails = async (id: String | Number) => {
//   const res = await fetch(`${TMDB_URL}/movie/${id}?api_key=${API_KEY}`)
//   const data = await res.json()
//   console.log(data)
//   return data
// }

// export const getSimilarMovies = async (id: String | Number) => {
//   const res = await fetch(`${TMDB_URL}/movie/${id}/similar?api_key=${API_KEY}`)
//   const data = await res.json()
//   console.log(data.results)
//   return data.results
// }
