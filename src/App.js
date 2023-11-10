import "./App.css"
import NavigationBar from "./components/nav/NavigationBar"
import Intro from "./components/intro/Intro"
import DiscoverMovies from "./components/movie/Movies"
import "./style/landingPage.css"
import React, {useEffect, useState} from "react";
import Pagination from "./components/pagination/Pagination";
import {getDiscoverMovieList, searchMovie} from './api'
import {Container} from "react-bootstrap";

function App() {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(8);

    useEffect(() => {
        getDiscoverMovieList().then((result) => {
            setMovies(result)
        })
    }, []);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = movies.slice(firstPostIndex, lastPostIndex);

    const search = async (x) => {
        console.log({movies})
        if (x.length > 3) {
            const query = await searchMovie(x)
            setMovies(query.results)
        }
        if (x.length === 0) {
            const movieList = await getDiscoverMovieList()
            setMovies(movieList)
        }
    }

    return (
        <div>
            <div className="myBG">
                <NavigationBar/>
                <Intro/>
                <Container className="text-center d-flex justify-content-center align-items-center">
                    <input placeholder="search your movie here..." className="movieSearch"
                           onChange={({target}) => search(target.value)}/>

                </Container>
            </div>
            <div className="trending">
                <DiscoverMovies movies={currentPosts}/>
                <Pagination totalPosts={movies.length}
                            postsPerPage={postsPerPage}
                            setCurrentPage={setCurrentPage}
                            currentPage={currentPage}/>
            </div>
        </div>
    )
}

export default App
