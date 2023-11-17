import {Card, Col, Container, Image, Row} from "react-bootstrap"

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
                        return (
                            <Col md={3} className="movieWrapper" id="movies" key={index}>
                                <Card className="movieImage">
                                    <div className="movieTitle">
                                        <Card.Title>{result.title}</Card.Title>
                                    </div>
                                    <Image src={`${baseImg}/${result.posterPath}`}
                                           className="images"/>
                                    <div className="bg-dark">
                                        <div className="p-2 m-1 text-white">
                                            <div className="movieOverview">
                                                <Card.Text className="text-left">
                                                    {result.overview}
                                                </Card.Text>
                                            </div>
                                            <div className="movieDate">
                                                <Card.Text className="text-left">
                                                    release: {result.releaseDate}
                                                </Card.Text>
                                            </div>
                                            <div className="movieRate">
                                                <Card.Text className="text-left">
                                                    rate: {result.voteAverage}
                                                </Card.Text>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default Movies
