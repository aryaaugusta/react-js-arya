import "./App.css"
import NavigationBar from "./components/nav/NavigationBar"
import Intro from "./components/intro/Intro"
import DiscoverMovies from "./components/movie/Movies"
import TvShows from "./components/tvshows/TvShows"
import "./style/landingPage.css"
import React, {useEffect, useState} from "react";
import Pagination from "./components/pagination/Pagination";
import {getDiscoverMovieList, searchMovie, getTrendingTVShowList, searchTv, getAllMovies} from './api/api'
import {Container} from "react-bootstrap";
import api from './api/axiosConfig'
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Trailer from './components/trailer/Trailer';
import NotFound from './components/notFound/NotFound';

function App() {
    const [movies, setMovies] = useState([]);
    const [tvShows, setTvShows] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(8);
    const [hiddenMovies, setHiddenMovies] = useState(false);
    const [hiddenTvShows, setHiddenTvShows] = useState(false);

    useEffect(() => {
        /*getDiscoverMovieList().then((result) => {
            setMovies(result)
        })*/
        getAllMovies().then((result) => {
            setMovies(result)
        })
        getTrendingTVShowList().then((result) => {
            setTvShows(result)
        })
    }, []);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPostsMovie = movies.slice(firstPostIndex, lastPostIndex);
    const currentPostsTvShow = tvShows.slice(firstPostIndex, lastPostIndex);

    const searchMoviesOrTv = async (x) => {
        if (window.location.pathname === '/tvshows') {
            if (x.length > 3) {
                const query = await searchTv(x)
                setTvShows(query.results)
            }
            if (x.length === 0) {
                const tvShowList = await getTrendingTVShowList()
                setTvShows(tvShowList)
            }
        }
        if (x.length > 3) {
            const query = await searchMovie(x)
            setMovies(query.results)
        }
        if (x.length === 0) {
            const movieList = await getDiscoverMovieList()
            setMovies(movieList)
        }
    }

    const ShowMovieTvResults = () => {
        if (window.location.pathname === '/movies') {
            console.log('masuk movie result')
            return (
                <div hidden={hiddenMovies}>
                    <DiscoverMovies movies={currentPostsMovie}/>
                    <Pagination totalPosts={movies.length}
                                postsPerPage={postsPerPage}
                                setCurrentPage={setCurrentPage}
                                currentPage={currentPage}/>
                </div>
            )
        } else if (window.location.pathname === '/tvshows') {
            console.log('masuk tv show result')
            return (
                <div hidden={hiddenTvShows}>
                    <TvShows tvShows={currentPostsTvShow}/>
                    <Pagination totalPosts={tvShows.length}
                                postsPerPage={postsPerPage}
                                setCurrentPage={setCurrentPage}
                                currentPage={currentPage}/>
                </div>
            )
        } else {
            console.log('masuk discover result')
            return (
                <div hidden={hiddenMovies}>
                    <DiscoverMovies movies={currentPostsMovie}/>
                    <Pagination totalPosts={movies.length}
                                postsPerPage={postsPerPage}
                                setCurrentPage={setCurrentPage}
                                currentPage={currentPage}/>
                </div>
            )
        }
    }

    return (
        <div>
            {/*<div className="myBG">
                <NavigationBar/>
                <Intro/>
                <Container className="text-center d-flex justify-content-center align-items-center">
                    <input placeholder="search your movie or tv shows here..." className="movieSearch"
                           onChange={({target}) => searchMoviesOrTv(target.value)}/>
                </Container>
            </div>
            <div className="movies">
                <ShowMovieTvResults/>
            </div>*/}
            <div className="myBG">
                <NavigationBar/>
                <Routes>
                    <Route path="/">
                        <Route path="/" element={<Home movies={movies}/>}/>
                        <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Route>
                </Routes>
                <div className="movies">
                    <ShowMovieTvResults/>
                </div>
            </div>
        </div>
    )
}

export default App
