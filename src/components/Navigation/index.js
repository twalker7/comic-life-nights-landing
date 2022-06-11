import React from 'react';

import { NavDropdown, Container, Navbar, Nav, Row, Col} from 'react-bootstrap';





function Navigation(){

    return(

  <Nav className="nav-holder">
 

  

<Nav.Link >Home</Nav.Link>


<Nav.Link > Upcoming</Nav.Link> 


<Nav.Link > Contact </Nav.Link>



</Nav>


    );
}


export default Navigation;