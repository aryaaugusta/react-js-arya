import axios from "axios"
import api from './axiosConfig'

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

export const getTrendingTVShowList = async () => {
    const trendingTvShowList = await axios.get(`${baseUrl}/discover/tv?page=1&api_key=${apiKey}&with_original_language=en`)
    return trendingTvShowList.data.results
}

export const searchTv = async (x) => {
    const searchTv = await axios.get(`${baseUrl}/search/tv?query=${x}&page=1&api_key=${apiKey}`)
    return searchTv.data
}

export const getAllMovies = async () => {
    const allMovies = await api.post("api/nostramovie/movie/search", {
        filters: [],
        sorts: [],
        page: 0
    })
    return allMovies.data
}

export const searchMovieNostra = async (search) => {

    const searchMovie = await api.post("api/nostramovie/movie/search", {
        filters: [{
            "field": "title",
            "operator": "LIKE",
            "value": search
        }],
        sorts: [{
            "field": "title",
            "sort": "ASC"
        }],
        page: 0
    })
    return searchMovie.data
}
