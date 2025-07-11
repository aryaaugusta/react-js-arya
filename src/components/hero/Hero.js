import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import {Paper} from '@mui/material';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCirclePlay} from '@fortawesome/free-solid-svg-icons';
import Trailer from '../trailer/Trailer';
import React, {useState} from 'react';

const Hero = ({movies}) => {
    const baseImg = process.env.REACT_APP_IMG_URL;
    const [openTrailerId, setOpenTrailerId] = useState(null);

    const handlePlayTrailer = (trailerLink) => {
        const ytId = trailerLink.substring(trailerLink.length - 11);
        setOpenTrailerId(ytId);
    };

    const handleCloseTrailer = () => {
        setOpenTrailerId(null);
    };

    return (
        <div className='movie-carousel-container'>
            <Carousel>
                {
                    movies?.map((movie) => {
                        for (let x of movie.movieDetails) {
                            return (
                                <Paper key={movie.id}>
                                    <div className='movie-card-container'>
                                        <div className="movie-card"
                                             style={{"--img": `url(${baseImg}/${x.backdropPath})`}}>
                                            <div className="movie-detail">
                                                <div className="movie-poster">
                                                    <img src={`${baseImg}/${x.posterPath}`} alt=""/>
                                                </div>
                                                <div className="movie-title">
                                                    <h3>{movie.title}</h3>
                                                    <div className="movie-buttons-container">
                                                        <div
                                                            className="play-button-icon-container"
                                                            onClick={() => handlePlayTrailer(x.trailerLink)}
                                                            style={{cursor: 'pointer'}}>
                                                            <FontAwesomeIcon className="play-button-icon"
                                                                             icon={faCirclePlay}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Paper>
                            )
                        }
                    })
                }
            </Carousel>
            {/* Trailer Modal */}
            {openTrailerId &&
                <Trailer ytTrailerId={openTrailerId} onClose={handleCloseTrailer}/>
            }
        </div>
    )
}

export default Hero;

/*
import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import {Paper} from '@mui/material';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCirclePlay} from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";

const Hero = ({movies}) => {
    const baseImg = process.env.REACT_APP_IMG_URL
    return (
        <div className='movie-carousel-container'>
            <Carousel>
                {
                    movies?.map((movie) => {
                        for (let x of movie.movieDetails) {
                            return (
                                <Paper key={movie.id}>
                                    <div className='movie-card-container'>
                                        <div className="movie-card"
                                             style={{"--img": `url(${baseImg}/${x.backdropPath})`}}>
                                            <div className="movie-detail">
                                                <div className="movie-poster">
                                                    <img src={`${baseImg}/${x.posterPath}`} alt=""/>
                                                </div>
                                                <div className="movie-title">
                                                    <h3>{movie.title}</h3>
                                                    <div className="movie-buttons-container">
                                                        <Link
                                                            to={`/Trailer/${x.trailerLink.substring(x.trailerLink.length - 11)}`}>
                                                            <div className="play-button-icon-container">
                                                                <FontAwesomeIcon className="play-button-icon"
                                                                                 icon={faCirclePlay}/>
                                                            </div>
                                                        </Link>
                                                        {/!*<div className="movie-review-button-container">
                                                    <Button variant="info"
                                                            onClick={() => reviews(movie.imdbId)}>Reviews</Button>
                                                </div>*!/}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Paper>
                            )
                        }
                    })
                }
            </Carousel>
        </div>
    )
}

export default Hero
*/
