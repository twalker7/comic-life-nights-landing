import React from 'react';

import { NavDropdown, Container, Navbar, Nav, Row, Col} from 'react-bootstrap';





function Navigation(props){

    return(
<div className="navigation-container">
  <div> <a href={''}> Home</a></div>

  <div> <a href={''}> Upcoming  </a></div>

  <div> <a href={'#meet-the-comics'}> Meet the Comics </a> </div>
  <div> <a href={''}> About </a> </div>
  <div> <a href={''}> Contact/Submissions </a> </div>



  

</div>
    );
}


export default Navigation;