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
        <Container fluid className='cs-bg-page-three min-vh-100 px-sm-5'>
            <Row className='min-vh-100 mx-lg-5 mx-0 py-lg-0 py-5'>
                <Col lg={6} xs={12} className='d-flex flex-column justify-content-between gap-3'>
                    <Container className='h-25 px-0 d-flex flex-row align-items-end justify-content-lg-start justify-content-center mt-lg-5 mt-0'>
                        <h2 className='h3 text-secondary cs-fw-600 me-3 cs-ls'>02</h2>
                        <h2 className='h3 text-white text-uppercase cs-ls cs-fw-300'>Meet your crew</h2>
                    </Container>
                    <Container className='px-0 d-flex flex-column gap-3'>
                        <h3 className='text-white-50 cs-ff-bellefair w-100 h2 text-uppercase cs-fw-300'>{crewData[member].role}</h3>
                        <h3 className='text-white cs-ff-bellefair w-100 h1 text-uppercase cs-fw-400'>{crewData[member].name}</h3>
                        <p className='text-white w-100 text-white'>{crewData[member].bio}</p>
                    </Container>
                    <Form className='mb-3'>
                        <Form.Check
                            inline
                            name="group1"
                            type='radio'
                            checked={member === 0} 
                            onChange={() => setMember(0)}
                        />
                        <Form.Check
                            inline
                            name="group1"
                            type='radio'
                            checked={member === 1} 
                            onChange={() => setMember(1)}
                        />
                        <Form.Check
                            inline
                            name="group1"
                            type='radio'
                            checked={member === 2} 
                            onChange={() => setMember(2)}
                        />
                        <Form.Check
                            inline
                            name="group1"
                            type='radio'
                            checked={member === 3} 
                            onChange={() => setMember(3)}
                        />
                    </Form>
                </Col>
                <Col lg={6} xs={12} className='d-flex flex-column justify-content-end align-items-center gap-3'>
                    <Image fluid 
                        src={`https://raw.githubusercontent.com/MrSeager/space-tourism-v2/refs/heads/main/src/starter-code/` + crewData[member].images.webp.replace("./", "")} 
                        alt={crewData[member].name + ' image'} 
                        className='h-75' 
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default PageThree;