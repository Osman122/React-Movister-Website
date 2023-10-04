import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';





function Header() {
 
  
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container className="rounded">
        <NavLink className="navbar-brand" to="/MainPage">MainPage</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav ">
          
          <Nav>
            <NavLink className="nav-link" to="/Details">Details</NavLink>
            <NavLink className="nav-link" to="/MainPage">MainPage</NavLink>
            <NavLink className="nav-link " to="/Search">Search</NavLink>
             
          </Nav>
        </Navbar.Collapse>
       
      </Container>
    </Navbar>
  );
}

export default Header;