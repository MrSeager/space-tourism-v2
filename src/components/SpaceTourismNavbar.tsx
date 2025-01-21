import React, { FC } from 'react';
//Bootstrap
import { Container, Navbar, Nav, Offcanvas, Image, NavLink } from 'react-bootstrap';
//Images
import LogoImg from '../starter-code/assets/shared/logo.svg';
import BurgerImg from '../starter-code/assets/shared/icon-hamburger.svg';
//Spring
import { useSpring, animated } from '@react-spring/web';
//Links
import { Link } from 'react-router-dom';

const SpaceTourismNavbar: FC = () => {
    return (
        <Navbar expand='sm' fixed='top' className='ps-3 py-4 pe-0'>
            <Container fluid className='pe-sm-0'>
                <Navbar.Brand className='cs-w cs-line'>
                    <Image fluid src={LogoImg} alt='logo image' />
                </Navbar.Brand>
                <Navbar.Toggle className='border-0 shadow-none'>
                    <Image src={BurgerImg} alt='burger' />
                </Navbar.Toggle>
                <Navbar.Offcanvas
                    placement="end" 
                    className=' py-0 h-100'>
                    <Offcanvas.Header closeButton className=''>
                        Menu
                    </Offcanvas.Header>
                    <Offcanvas.Body className='h-100 cs-bg-blured'>
                        <Nav className='justify-content-around w-100 mx-lg-5'>
                            <Link to='/' className='cs-link cs-ls cs-trasition text-decoration-none text-white text-uppercase cs-fw-300 py-sm-4'><span className='cs-fw-600 cs-nav-numb'>00</span> Home</Link>
                            <Link to='/destination' className='cs-link cs-ls cs-trasition text-decoration-none text-white text-uppercase cs-fw-300 py-sm-4'><span className='cs-fw-600 cs-nav-numb'>01</span> Destination</Link>
                            <Link to='/crew' className='cs-link cs-ls cs-trasition text-decoration-none text-white text-uppercase cs-fw-300 py-sm-4'><span className='cs-fw-600 cs-nav-numb'>02</span> Crew</Link>
                            <Link to='/technology' className='cs-link cs-ls cs-trasition text-decoration-none text-white text-uppercase cs-fw-300 py-sm-4'><span className='cs-fw-600 cs-nav-numb'>03</span> Technology</Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default SpaceTourismNavbar;