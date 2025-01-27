import React, { FC, useState, useEffect } from 'react';
//Bootstrap
import { Container, Row, Col, Form, Image } from 'react-bootstrap';
//Spring
import { useSpring, animated } from '@react-spring/web';
import { useSlide, useFadeTransition } from './animation.tsx';

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
    const slideLift = useSlide('-');
    const slideRight = useSlide('+');

    const [itemsImage, setItemsImage] = useState([
        { id: member, src: crewData[member].images.webp, role: crewData[member].role }
    ]);
    
    useEffect(() => {
        setItemsImage([{ id: member, src: crewData[member].images.webp, role: crewData[member].role }]);
    }, [member]);
    
    const transitionsImage = useFadeTransition(itemsImage);
    
    const [itemsText, setItemsText] = useState([{
        id: member,
        role: crewData[member].role,
        name: crewData[member].name,
        bio: crewData[member].bio
    }]);
    
    useEffect(() => {
        setItemsText([{
            id: member,
            role: crewData[member].role,
            name: crewData[member].name,
            bio: crewData[member].bio
        }]);
    }, [member]);

    const transitionsText = useFadeTransition(itemsText);
    
    return (
        <Container fluid className='cs-bg-page-three min-vh-100 px-lg-5 px-0 d-flex flex-column justify-content-between'>
            <animated.div style={slideLift}>
                <Container fluid className='cs-top-h ps-lg-5 ps-4 d-flex flex-row align-items-end justify-content-start'>
                    <h2 className='h3 text-secondary cs-fw-600 me-3 cs-ls'>02</h2>
                    <h2 className='h3 text-white text-uppercase cs-ls cs-fw-300'>Meet your crew</h2>
                </Container>
            </animated.div>
            <Row className='mx-0'>
                <Col lg={6} xs={12} className='ps-lg-5 text-white text-lg-start text-center pt-lg-0 pt-5'>
                    <animated.div style={slideLift} className='h-100 d-flex flex-column justify-content-between gap-3 '>
                        <Container className='h-100 px-0 position-relative'>
                            {transitionsText((style, item) => (
                            <animated.div style={style} key={item.id} className='h-100 d-flex flex-column justify-content-center align-items-center gap-3'>
                                <h3 className='text-white-50 cs-ff-bellefair w-100 h2 text-uppercase cs-fw-300'>{item.role}</h3>
                                <h3 className='cs-ff-bellefair w-100 h1 text-uppercase cs-fw-400'>{item.name}</h3>
                                <p className='cs-four-line-p text-white'>{item.bio}</p>
                            </animated.div>
                            ))}
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
                    </animated.div>
                </Col>
                <Col lg={6} xs={12} className='px-0 '>
                    <animated.div style={slideRight} className='position-relative w-100'>
                        {transitionsImage((style, item) => (
                            <animated.div style={style} key={item.id} className='w-100 d-flex flex-column align-items-center justify-content-center'>
                                <Image fluid 
                                    src={`https://raw.githubusercontent.com/MrSeager/space-tourism-v2/refs/heads/main/src/starter-code/` + item.src.replace("./", "")} 
                                    alt={item.name + ' image'} 
                                    className='cs-h-2' 
                                />
                            </animated.div>
                        ))}
                    </animated.div>
                </Col>
            </Row>
        </Container>
    );
}

export default PageThree;