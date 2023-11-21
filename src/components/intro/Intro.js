import {Col, Container, Row} from "react-bootstrap"
import React from "react";

const Intro = () => {
    return (
        <div className="intro">
            <Container className="text-center d-flex justify-content-center align-items-center">
                <Row>
                    <Col>
                        <div className="titleOne">WELCOME MOVIE LOVERS</div>
                        <div className="titleTwo">MILLIONS OF MOVIES AND TV SHOWS. EXPLORE NOW</div>
                        {/*<div className="introButton mt-4 text-center">*/}
                        {/*<Button variant="dark">Lihat Semua List</Button>*/}
                        {/*</div>*/}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Intro
