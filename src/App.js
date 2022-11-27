import ContactUs from "./pages/contactus/ContactUs";
import AboutUs from "./pages/aboutus/AboutUs.js";
import Home from "./pages/home/Home.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './App.css';
import companyLogo from "/Users/zainab/simplysweet/src/Images/SimplySweetLogo.jpg"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Menu from "./pages/menu/Menu.js";

function App() {
  return (
    <div>
      <Router>
      <Navbar className="top" expand = "lg" bg-abwhite>
      <Container>
        <Navbar.Brand href="/">
          <img className = "simplySweetLogo" src = {companyLogo} alt = " Simply Sweet"  />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className = "dropDown">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/menu">Menu</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
      <Routes>

        <Route exact path = "/" element = {<Home />}/>
        <Route path = "/about" element = {<AboutUs />}/>
        <Route path = "/contact" element = {<ContactUs />}/>
        <Route path = "/menu" element = {<Menu/>}/>
       
       
          

       
        
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
