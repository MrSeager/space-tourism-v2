import React, { FC, useState, useEffect } from 'react';
//Bootstrap
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
//Spring
import { useSpring, animated } from '@react-spring/web';
import { useSlide, useFadeTransition } from './animation.tsx';

interface TechnologyProps {
    name: string;
    images: {
        portrait: string;
        landscape: string;
    };
    description: string;
}

interface PageFourProps {
    technologyData: TechnologyProps[];
}

const PageFour: FC<PageFourProps> = ({ technologyData }) => {
    const [tech, setTech] = useState(0);
    const slideLift = useSlide('-');
    const slideRight = useSlide('+');

    const [itemsImage, setItemsImage] = useState([
        { id: tech, src: technologyData[tech].images.portrait, name: technologyData[tech].name }
    ]);
    
    useEffect(() => {
        setItemsImage([{ id: tech, src: technologyData[tech].images.portrait, name: technologyData[tech].name }]);
    }, [tech]);
    
    const transitionsImage = useFadeTransition(itemsImage);
    
    const [itemsText, setItemsText] = useState([{
        id: tech,
        name: technologyData[tech].name,
        description: technologyData[tech].description
    }]);
    
    useEffect(() => {
        setItemsText([{
            id: tech,
            name: technologyData[tech].name,
            description: technologyData[tech].description
        }]);
    }, [tech]);
    
    const transitionsText = useFadeTransition(itemsText);

    return (
        <Container fluid className='cs-bg-page-four min-vh-100 d-flex flex-column justify-content-start ps-lg-5 px-0 gap-lg-0 gap-5'>
            <animated.div style={slideLift}>
                <Container fluid className='cs-top-h ps-lg-5 ps-4 d-flex flex-row justify-content-start align-items-end'>
                    <h2 className='h3 text-secondary cs-fw-600 me-3 cs-ls'>03</h2>
                    <h2 className='h3 text-white text-uppercase cs-ls cs-fw-300'>Space launch 101</h2>
                </Container>
            </animated.div>
            <Row className='mx-0 gap-lg-0 gap-4 my-auto'>
                <Col lg={{ span: 9, order: 1}} xs={{ span: 12, order: 2}} className='px-0 d-flex flex-column justify-content-center'>
                    <animated.div style={slideLift}>
                        <Row className='w-100 mx-0 px-0 gap-lg-0 gap-4'>
                            <Col lg={2} xs={12} className='px-0 d-flex flex-lg-column flex-row gap-4 align-items-center justify-content-center'>
                                <Button className='cs-ff-bellefair cs-trasition px-4 fs-1 rounded rounded-circle cs-btn-3' onClick={() => setTech(0)}>1</Button>
                                <Button className='cs-ff-bellefair cs-trasition px-4 fs-1 rounded rounded-circle cs-btn-3' onClick={() => setTech(1)}>2</Button>
                                <Button className='cs-ff-bellefair cs-trasition px-4 fs-1 rounded rounded-circle cs-btn-3' onClick={() => setTech(2)}>3</Button>
                            </Col>
                            <Col lg={10} xs={12} className='position-relative overflow-hidden px-0 text-white text-lg-start text-center'>
                                {transitionsText((style, item) => (
                                    <animated.div style={style} key={item.id} className='d-flex flex-column justify-content-center gap-3'>
                                        <h3 className='h4 text-uppercase cs-fw-300 cs-ls'>The terminology...</h3>
                                        <h3 className='display-4 cs-ff-bellefair text-uppercase cs-fw-300'>{item.name}</h3>
                                        <p className='cs-four-nine-line-p cs-fw-300 cs-ls me-lg-5 pe-lg-5'>{item.description}</p>
                                    </animated.div>
                                ))}
                            </Col>
                        </Row>
                    </animated.div>
                </Col>
                <Col lg={{ span: 3, order: 2 }} xs={{ span: 12, order: 1}} className='px-0 d-flex flex-column align-items-lg-end align-items-center justify-content-center'>
                    <animated.div style={slideRight} className='position-relative w-100 overflow-hidden'>
                        {transitionsImage((style, item) => (
                            <animated.div style={style} key={item.id} className='w-100'>
                                <Image fluid 
                                    src={'https://raw.githubusercontent.com/MrSeager/space-tourism-v2/refs/heads/main/src/starter-code/' + item.src.replace("./", "")} 
                                    alt={item.name + ' image'} 
                                    className={`w-100 cs-img-${tech}`}
                                />
                            </animated.div>
                        ))}
                    </animated.div>
                </Col>
            </Row>
        </Container>
    );
}

export default PageFour;