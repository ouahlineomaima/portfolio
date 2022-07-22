import { useEffect } from 'react';
import { useState } from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/icons8-github.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () =>{
            if(window.scrollY > 50){
            setScrolled(true)
            }else{
            setScrolled(false)
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => {window.removeEventListener("scroll", onScroll);}
        
    }, {})

    const onUpdateActiveLink = (value) =>{
        setActiveLink(value);
    }
    return ( 
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#home"> <img src = {logo} alt="Logo"></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#Skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#Projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    <Nav.Link href="#Resume" className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('resume')}>Resume</Nav.Link>
                </Nav>
                <span className='navbar-text'>
                    <div className="social-icon">
                        <a href="#"><img src= {navIcon1} alt="" /></a>
                        <a href="#"><img src= {navIcon2} alt="" /></a>
                    </div>
                    <button className='vvd' onClick={() => { console.log('connect')}}> <span>Let's Connect</span> </button>
                </span>
                </Navbar.Collapse>
            </Container>
    </Navbar>
     );
}
 
//export default NavBar;