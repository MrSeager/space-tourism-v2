import React, { FC } from 'react';
//Bootstrap
import { Container, Row, Col, Button } from 'react-bootstrap';

const PageOne: FC = () => {
    return (
        <Container fluid className='cs-bg-page-one min-vh-100 px-sm-5'>
            <Row className='min-vh-100 pb-5 mx-sm-5 pt-lg-0 pt-5'>
                <Col lg={5} xs={12} className='d-flex flex-column align-items-strat justify-content-end text-lg-start text-center gap-2 my-lg-0 my-5 pt-lg-0 pt-5'>
                    <h1 className='h2 text-white text-uppercase cs-ff-barlow-condensed cs-fw-300'>So, you want to travel to</h1>
                    <h2 className='cs-fs-150 text-white text-uppercase cs-ff-bellefair'>Space</h2>
                    <p className='text-white cs-fw-300 fs-5 mb-5'>Let’s face it; if you want to go to space, you might as well genuinely go to 
                    outer space and not hover kind of on the edge of it. Well sit back, and relax 
                    because we’ll give you a truly out of this world experience!</p>
                </Col>
                <Col lg={7} xs={12} className='d-flex flex-column align-items-lg-end align-items-center justify-content-end'>
                    <Button className='mb-5 me-lg-5 me-0 fs-2 cs-btn bg-white border-white text-dark rounded-circle text-uppercase cs-fw-300 cs-ff-bellefair'>Explore</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default PageOne;