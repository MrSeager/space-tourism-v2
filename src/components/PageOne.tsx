import React, { FC } from 'react';
//Bootstrap
import { Container, Row, Col } from 'react-bootstrap';
//Links
import { Link } from 'react-router-dom';
//Spring
import { useSpring, animated } from '@react-spring/web';
import { useSlide } from './animation.tsx';

const PageOne: FC = () => {
    const slideLift = useSlide('-');
    const slideRight = useSlide('+');

    return (
        <Container fluid className='cs-bg-page-one min-vh-100 px-sm-5 px-0'>
            <Row className='min-vh-100 pb-5 mx-sm-5 pt-lg-0 pt-5'>
                <Col lg={5} xs={12} className='d-flex flex-column align-items-lg-start align-items-center justify-content-end text-lg-start text-center gap-2 my-lg-0 my-5 pt-lg-0 pt-5'>
                    <animated.div style={slideLift}>
                        <h1 className='h2 cs-ls text-white text-uppercase cs-ff-barlow-condensed cs-fw-300'>So, you want to travel to</h1>
                        <h2 className='cs-fs-150 text-white text-uppercase cs-ff-bellefair'>Space</h2>
                        <p className='text-white cs-fw-300 fs-5 mb-5'>Let’s face it; if you want to go to space, you might as well genuinely go to 
                        outer space and not hover kind of on the edge of it. Well sit back, and relax 
                        because we’ll give you a truly out of this world experience!</p>
                    </animated.div>
                </Col>
                <Col lg={7} xs={12} className='d-flex flex-column align-items-lg-end align-items-center justify-content-end'>
                    <animated.div style={slideRight}>
                        <Link to='/destination' className='cs-trasition cs-btn-4 text-decoration-none mb-5 me-lg-5 me-0 fs-2 cs-btn bg-white border border-2 border-white text-dark rounded-circle text-uppercase cs-fw-300 cs-ff-bellefair d-flex flex-column align-items-center justify-content-center'>Explore</Link>
                    </animated.div>
                </Col>
            </Row>
        </Container>
    );
}

export default PageOne;