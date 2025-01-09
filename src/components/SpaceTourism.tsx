import React, { FC } from 'react';
import ReactDOM from 'react-dom/client';
//Components
import './SpaceTourismStyle.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
//Axios
import axios from 'axios';
//Spring
import { useSpring, animated } from '@react-spring/web';

const SpaceTourism: FC = () => {
    return (
        <Container fluid>
            Start
        </Container>
    );
}

export default SpaceTourism;