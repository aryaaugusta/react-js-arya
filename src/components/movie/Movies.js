import {Card, Col, Container, Image, Row} from "react-bootstrap"
import React from "react";

const Movies = ({movies}) => {
    const baseImg = process.env.REACT_APP_IMG_URL
    return (
        <div>
            <Container>
                <br/>
                <br/>
                <h1 className="text-white">DISCOVERY MOVIES</h1>
                <br/>
                <Row>
                    {movies.map((result, index) => {
                        for (let x of result.movieDetails) {
                            return (
                                <Col md={3} className="movieWrapper" id="movies" key={index}>
                                    <Card className="movieImage">
                                        <div className="movieTitle">
                                            <Card.Title>{result.title}</Card.Title>
                                        </div>
                                        <Image src={`${baseImg}/${x.posterPath}`}
                                               className="images"/>
                                        <div className="bg-dark">
                                            <div className="p-2 m-1 text-white">
                                                <div className="movieOverview">
                                                    <Card.Text className="text-left">
                                                        {x.overview}
                                                    </Card.Text>
                                                </div>
                                                <div className="movieDate">
                                                    <Card.Text className="text-left">
                                                        release: {x.releaseDate}
                                                        <Card.Text className="movieRate">
                                                            rate: {x.voteAverage}
                                                        </Card.Text>
                                                    </Card.Text>

                                                </div>
                                                <div className="movieRate">

                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                            )
                        }
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default Movies
