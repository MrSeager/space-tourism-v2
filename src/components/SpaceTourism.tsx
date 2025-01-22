import React, { FC, useState, useEffect } from 'react';
//Components
import './SpaceTourismStyle.css';
import PageOne from './PageOne.tsx';
import PageTwo from './PageTwo.tsx';
import PageThree from './PageThree.tsx';
import PageFour from './PageFour.tsx';
import SpaceTourismNavbar from './SpaceTourismNavbar.tsx';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
//Axios
import axios from 'axios';
//Spring
import { useSpring, animated } from '@react-spring/web';
//Images
import LogoImg from '../starter-code/assets/shared/logo.svg';
//Links
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

interface DestinationsProp { 
    name: string; 
    images: { 
        png: string; 
        webp: string; 
    }; 
    description: string; 
    distance: string; 
    travel: string; 
}

interface CrewProps {
    name: string; 
    images: { 
        png: string; 
        webp: string; 
    };
    role: string;
    bio: string;
}

interface TechnologyProps {
    name: string;
    images: {
        portrait: string;
        landscape: string;
    };
    description: string;
}

interface SpaceTourismDataProps { 
    destinations: DestinationsProp[];
    crew: CrewProps[];
    technology: TechnologyProps[];
}

const SpaceTourism: FC = () => {
    const [spaceTourismData, setSpaceTourismData] = useState<SpaceTourismDataProps | null>(null);
    const [loading, setLoading] = useState<boolean>(true); 
    
    useEffect(() => { 
        axios.get('https://raw.githubusercontent.com/MrSeager/space-tourism-v2/refs/heads/main/src/data.json') 
            .then((response) => { 
                setSpaceTourismData(response.data); 
                setLoading(false); 
            }) 
            .catch((error) => { 
                console.error('Error fetching the data:', error); 
                setLoading(false); 
            }); 
    }, []); 
        
    if (loading) { 
        return <Container fluid>Loading...</Container>; 
    };

    if (!spaceTourismData) { 
        return <Container fluid>Error loading data</Container>; 
    }

    return (
        <Router basename="/space-tourism-v2">
            <Container fluid className='vh-lg-100 p-0 overflow-hidden'>
                <SpaceTourismNavbar />
                    <Routes>
                        <Route path='/' element={<PageOne />} /> 
                        <Route path='/destination' element={
                            <PageTwo 
                                destinationData={spaceTourismData.destinations}
                            />} 
                        />
                        <Route path='/crew' element={
                            <PageThree 
                                crewData={spaceTourismData.crew}
                            />} 
                        />
                        <Route path='/technology' element={
                            <PageFour 
                                technologyData={spaceTourismData.technology}
                            />} 
                        />
                    </Routes>
            </Container>
        </Router>
    );
}

export default SpaceTourism;