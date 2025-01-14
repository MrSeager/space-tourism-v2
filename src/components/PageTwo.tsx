import React, { FC, useState } from 'react';
//Bootstrap
import { Container, Row, Col, Button, Image, ButtonGroup } from 'react-bootstrap';

interface DestinationsProp { 
    name: string; 
    image: { 
        png: string; 
        webp: string; 
    }; 
    description: string; 
    distance: string; 
    travel: string; 
}

interface PageTwoProps {
    destinationData: DestinationsProp[];
}

const PageTwo: FC<PageTwoProps> = ({ destinationData }) => {
    const [dest, setDest] = useState(0);

    return (
        <Container fluid className='cs-bg-page-two min-vh-100 px-sm-5'>
            <Row className='min-vh-100 mx-lg-5 mx-0'>
                <Col lg={8} xs={12} className='d-flex flex-column justify-content-center align-items-center gap-5'>
                    <Container className='d-flex flex-row'>
                        <h2 className='h3 text-secondary cs-fw-600 me-3 cs-ls'>01</h2>
                        <h2 className='h3 text-white text-uppercase cs-ls cs-fw-300'>Pick your destination</h2>
                    </Container>
                    <Image fluid
                        src={`https://raw.githubusercontent.com/MrSeager/space-tourism-v2/refs/heads/main/src/starter-code/assets/destination/image-${destinationData[dest].name.toLowerCase()}.webp`}
                        alt={destinationData[dest].name + ' image'}
                        className='h-50'
                    />
                </Col>
                <Col lg={4} xs={12} className='d-flex flex-column align-items-center justify-content-center gap-3'>
                    <ButtonGroup className='align-self-start'>
                        {destinationData.map((destination, index) => (
                            <Button 
                                key={index} 
                                onClick={() => setDest(index)}
                                className='text-uppercase cs-ls'> 
                                {destination.name}
                            </Button>
                        ))}
                    </ButtonGroup>
                    <Container>
                        <h3>{destinationData[dest].name}</h3>
                        <p>{destinationData[dest].description}</p>
                        <Row>
                            <Col xs={6}>
                                <h4>Avg. distance</h4>
                                <h4>{destinationData[dest].distance}</h4>
                            </Col>
                            <Col xs={6}>
                                <h4>Est. travel time</h4>
                                <h4>{destinationData[dest].travel}</h4>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}

export default PageTwo;