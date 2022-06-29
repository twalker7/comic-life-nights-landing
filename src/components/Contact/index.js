import React from 'react'
import {Row, Col, Button} from 'react-bootstrap';

function Contact(){
    return(
        <div className="page-component">

            <h1 className="section-title"> Contact Us </h1>
         <Row> 
             <Col/>
          
           <div className="link-container">
         
                 <a id="email-link" href="mailto:delise1881@gmail.com" target="https://instagram.com/comiclifenights?igshid=YmMyMTA2M2Y="> Email Us Content  </a>
         <Col />
         
           <a className="instagram-link" href="https://instagram.com/comiclifenights?igshid=YmMyMTA2M2Y="> <img className ="instagram-logo" src={require("../../assets/instagram-logo2.png")} /> </a>
        
            </div> 
           
            <Col/>
            </Row>
          
        </div>
    );
}

export default Contact;