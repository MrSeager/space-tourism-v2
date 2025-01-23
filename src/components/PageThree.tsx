import React, { FC, useState } from 'react';
//Bootstrap
import { Container, Row, Col, Form, Image } from 'react-bootstrap';

interface CrewProps { 
    name: string; 
    images: { 
        png: string; 
        webp: string; 
    }; 
    role: string; 
    bio: string;
}

interface PageThreeProps {
    crewData: CrewProps[];
}

const PageThree: FC<PageThreeProps> = ({ crewData }) => {
    const [member, setMember] = useState(0);
    
    return (
        <Container fluid className='cs-bg-page-three min-vh-100 px-lg-5 px-0 d-flex flex-column justify-content-between'>
            <Container fluid className='cs-top-h ps-lg-5 ps-4 d-flex flex-row align-items-end justify-content-start'>
                <h2 className='h3 text-secondary cs-fw-600 me-3 cs-ls'>02</h2>
                <h2 className='h3 text-white text-uppercase cs-ls cs-fw-300'>Meet your crew</h2>
            </Container>
            <Row className='mx-0'>
                <Col lg={6} xs={12} className='ps-lg-5 text-white text-lg-start text-center d-flex flex-column justify-content-end gap-3 pt-lg-0 pt-5'>
                    <Container className='h-100 my-auto px-0 d-flex flex-column justify-content-center align-items-center gap-3'>
                        <h3 className='text-white-50 cs-ff-bellefair w-100 h2 text-uppercase cs-fw-300'>{crewData[member].role}</h3>
                        <h3 className='cs-ff-bellefair w-100 h1 text-uppercase cs-fw-400'>{crewData[member].name}</h3>
                        <p className='cs-four-line-p w-100 text-white'>{crewData[member].bio}</p>
                    </Container>
                    <Form className='mb-5 d-flex flex-row justify-content-lg-start justify-content-center gap-3'>
                        <Form.Check
                            name="group1"
                            type='radio'
                            checked={member === 0} 
                            onChange={() => setMember(0)}
                            className='cs-radio'
                        />
                        <Form.Check
                            name="group1"
                            type='radio'
                            checked={member === 1} 
                            onChange={() => setMember(1)}
                            className='cs-radio'
                        />
                        <Form.Check
                            name="group1"
                            type='radio'
                            checked={member === 2} 
                            onChange={() => setMember(2)}
                            className='cs-radio'
                        />
                        <Form.Check
                            name="group1"
                            type='radio'
                            checked={member === 3} 
                            onChange={() => setMember(3)}
                            className='cs-radio'
                        />
                    </Form>
                </Col>
                <Col lg={6} xs={12} className='px-0 d-flex flex-column justify-content-end align-items-center'>
                    <Image fluid 
                        src={`https://raw.githubusercontent.com/MrSeager/space-tourism-v2/refs/heads/main/src/starter-code/` + crewData[member].images.webp.replace("./", "")} 
                        alt={crewData[member].name + ' image'} 
                        className='cs-h-2' 
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default PageThree;