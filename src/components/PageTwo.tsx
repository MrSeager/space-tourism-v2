import React, { FC, useState } from 'react';
//Bootstrap
import { Container, Row, Col, Button, Image, ButtonGroup } from 'react-bootstrap';

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

    return (
        <Container fluid className='cs-bg-page-two min-vh-100 px-5 d-flex flex-column justify-content-start'>
            <Container fluid className='cs-top-h px-5 d-flex flex-row justify-content-start align-items-end'>
                <h2 className='h3 text-secondary cs-fw-600 me-3 cs-ls'>01</h2>
                <h2 className='h3 text-white text-uppercase cs-ls cs-fw-300'>Pick your destination</h2>
            </Container>
            <Row className='mx-0'>
                <Col lg={7} xs={12} className='d-flex flex-column justify-content-center align-items-center'>
                    <Image fluid
                        src={`https://raw.githubusercontent.com/MrSeager/space-tourism-v2/refs/heads/main/src/starter-code/` + destinationData[dest].images.webp.replace("./", "")}
                        alt={destinationData[dest].name + ' image'}
                        className='h-75'
                    />
                </Col>
                <Col lg={5} xs={12} className='d-flex flex-column align-items-center justify-content-end gap-3'>
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
                    <Container className='px-0 text-white text-lg-start text-center d-flex flex-column align-items-center justify-content-between'>
                        <h3 className='cs-ff-bellefair w-100 cs-fs text-uppercase'>{destinationData[dest].name}</h3>
                        <p className='fs-5 cs-fw-300 cs-fw-300'>{destinationData[dest].description}</p>
                        <Row className='w-100 border-top pt-3 mt-4 gap-sm-0 gap-3'>
                            <Col sm={6} xs={12}>
                                <h4 className='text-uppercase h6 cs-ls cs-fw-300'>Avg. distance</h4>
                                <h4 className='h2 text-uppercase cs-ff-bellefair cs-fw-300'>{destinationData[dest].distance}</h4>
                            </Col>
                            <Col sm={6} xs={12}>
                                <h4 className='text-uppercase h6 cs-ls cs-fw-300'>Est. travel time</h4>
                                <h4 className='h2 text-uppercase cs-ff-bellefair cs-fw-300'>{destinationData[dest].travel}</h4>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}

export default PageTwo;