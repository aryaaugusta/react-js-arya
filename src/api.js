import axios from "axios"

const apiKey = process.env.REACT_APP_TMDB_KEY
const baseUrl = process.env.REACT_APP_BASE_URL

export const getPopularMovieList = async () => {
    const movieList = await axios.get(`${baseUrl}/movie/popular?page=1&api_key=${apiKey}`)
    return movieList.data.results
}

export const searchMovie = async (x) => {
    const searchMovie = await axios.get(`${baseUrl}/search/movie?query=${x}&page=1&api_key=${apiKey}`)
    return searchMovie.data
}

export const getDiscoverMovieList = async () => {
    const discoverMovieList = await axios.get(`${baseUrl}/discover/movie?page=1&api_key=${apiKey}`)
    return discoverMovieList.data.results
}
