import {Card, Col, Container, Image, Row} from "react-bootstrap"

const TvShows = ({tvShows}) => {
    const baseImg = process.env.REACT_APP_IMG_URL
    return (
        <div>
            <Container>
                <br/>
                <h1 className="text-white">TV SHOWS</h1>
                <br/>
                <Row>
                    {tvShows.map((result, index) => {
                        return (
                            <Col md={3} className="movieWrapper" id="tvshows" key={index}>
                                <Card className="movieImage">
                                    <div className="movieTitle">
                                        <Card.Title>{result.name}</Card.Title>
                                    </div>
                                    <Image src={`${baseImg}/${result.poster_path}`}
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
                                                    release: {result.first_air_date}
                                                </Card.Text>
                                            </div>
                                            <div className="movieRate">
                                                <Card.Text className="text-left">
                                                    rate: {result.vote_average}
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

export default TvShows
