import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import {Paper} from '@mui/material';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCirclePlay} from '@fortawesome/free-solid-svg-icons';
import {Link, useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';

const Hero = ({movies}) => {

    /*const navigate = useNavigate();

    function reviews(movieId) {
        navigate(`/Reviews/${movieId}`);
    }*/
    const baseImg = process.env.REACT_APP_IMG_URL
    return (
        <div className='movie-carousel-container'>
            <Carousel>
                {
                    movies?.map((movie) => {
                        console.log({movie})
                        return (
                            <Paper key={movie.id}>
                                <div className='movie-card-container'>
                                    <div className="movie-card" style={{"--img": `url(${baseImg}/${movie.backdropPath})`}}>
                                        <div className="movie-detail">
                                            <div className="movie-poster">
                                                <img src={`${baseImg}/${movie.posterPath}`} alt=""/>
                                            </div>
                                            <div className="movie-title">
                                                <h3>{movie.title}</h3>
                                                <div className="movie-buttons-container">
                                                    <Link
                                                        to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                                                        <div className="play-button-icon-container">
                                                            <FontAwesomeIcon className="play-button-icon"
                                                                             icon={faCirclePlay}/>
                                                        </div>
                                                    </Link>
                                                    {/*<div className="movie-review-button-container">
                                                    <Button variant="info"
                                                            onClick={() => reviews(movie.imdbId)}>Reviews</Button>
                                                </div>*/}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default Hero
