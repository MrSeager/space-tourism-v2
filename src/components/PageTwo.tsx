import React, { FC, useState, useEffect } from 'react';
//Bootstrap
import { Container, Row, Col, Button, Image, ButtonGroup } from 'react-bootstrap';
//Spring
import { useTransition, animated } from '@react-spring/web';
import { useSlide, useFadeTransition } from './animation.tsx';

interface DestinationsProps { 
    name: string; 
    images: { 
        png: string; 
        webp: string; 
    }; 
    description: string; 
    distance: string; 
    travel: string; 
}

interface PageTwoProps {
    destinationData: DestinationsProps[];
}

const PageTwo: FC<PageTwoProps> = ({ destinationData }) => {
    const [dest, setDest] = useState(0);
    const slideLift = useSlide('-');
    const slideRight = useSlide('+');

    const [itemsImage, setItemsImage] = useState([
        { id: dest, src: destinationData[dest].images.webp, name: destinationData[dest].name }
    ]);
    
    useEffect(() => {
        setItemsImage([{ id: dest, src: destinationData[dest].images.webp, name: destinationData[dest].name }]);
    }, [dest]);
    
    const transitionsImage = useFadeTransition(itemsImage);
    
    const [itemsText, setItemsText] = useState([{
        id: dest,
        name: destinationData[dest].name,
        description: destinationData[dest].description,
        distance: destinationData[dest].distance,
        travel: destinationData[dest].travel
    }]);
    
    useEffect(() => {
        setItemsText([{
          id: dest,
          name: destinationData[dest].name,
          description: destinationData[dest].description,
          distance: destinationData[dest].distance,
          travel: destinationData[dest].travel
        }]);
    }, [dest]);
    
    const transitionsText = useFadeTransition(itemsText);

    return (
        <Container fluid className='cs-bg-page-two min-vh-100 px-lg-5 px-0 d-flex flex-column justify-content-start'>
            <animated.div style={slideLift}>
                <Container fluid className='cs-top-h ps-lg-5 ps-4 d-flex flex-row justify-content-start align-items-end'>
                    <h2 className='h3 text-secondary cs-fw-600 me-3 cs-ls'>01</h2>
                    <h2 className='h3 text-white text-uppercase cs-ls cs-fw-300'>Pick your destination</h2>
                </Container>
            </animated.div>
            <Row className='mx-0 my-auto h-100'>
                <Col lg={7} xs={12} className='cs-min-h d-flex flex-column align-items-center justify-content-center'>
                    <animated.div style={slideLift} className='w-50 position-relative overflow-hidden'>
                    {transitionsImage((style, item) => (
                        <animated.div style={style} key={item.id} className='w-100 d-flex flex-column align-items-center justify-content-center'>
                            <Image fluid
                                src={`https://raw.githubusercontent.com/MrSeager/space-tourism-v2/refs/heads/main/src/starter-code/` + item.src.replace("./", "")}
                                alt={item.name + ' image'}
                                className='spin'
                            />
                        </animated.div>
                    ))}
                    </animated.div>
                </Col>
                <Col lg={5} xs={12} >
                    <animated.div style={slideRight} className='d-flex flex-column align-items-center justify-content-end gap-3'>
                        <ButtonGroup className='align-self-lg-start gap-3'>
                            {destinationData.map((destination, index) => (
                                <Button 
                                    key={index} 
                                    onClick={() => setDest(index)}
                                    className='rounded-0 cs-fw-300 text-uppercase cs-ls bg-transparent px-0 cs-btn-2'> 
                                    {destination.name}
                                </Button>
                            ))}
                        </ButtonGroup>
                        <Container className='position-relative px-0 text-white text-lg-start text-center d-flex flex-column align-items-lg-start align-items-center justify-content-between'>
                        {transitionsText((style, item) => (
                            <animated.div style={style} key={item.id}>
                                <h3 className='cs-ff-bellefair px-0 cs-fs text-uppercase'>{item.name}</h3>
                                <p className='cs-four-five-line-p fs-5 cs-fw-300'>{item.description}</p>
                                <Row className='w-100 border-top pt-3 mt-4 gap-sm-0 gap-3'>
                                    <Col sm={6} xs={12}>
                                    <h4 className='text-uppercase h6 cs-ls cs-fw-300'>Avg. distance</h4>
                                    <h4 className='h2 text-uppercase cs-ff-bellefair cs-fw-300'>{item.distance}</h4>
                                    </Col>
                                    <Col sm={6} xs={12}>
                                    <h4 className='text-uppercase h6 cs-ls cs-fw-300'>Est. travel time</h4>
                                    <h4 className='h2 text-uppercase cs-ff-bellefair cs-fw-300'>{item.travel}</h4>
                                    </Col>
                                </Row>
                            </animated.div>
                        ))}
                        </Container>
                    </animated.div>
                </Col>
            </Row>
        </Container>
    );
}

export default PageTwo;