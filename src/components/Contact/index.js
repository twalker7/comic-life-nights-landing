import React from 'react'


function Contact(){
    return(
        <div className="page-component">

            <h1 className="section-title"> Contact Us </h1>
           <div className="link-container">
           <a className="email-link" href="mailto:delise1881@gmail.com" target="https://instagram.com/comiclifenights?igshid=YmMyMTA2M2Y="> Submit Content  </a>
           <a className="instagram-link" href="https://instagram.com/comiclifenights?igshid=YmMyMTA2M2Y=
"> <img className ="instagram-logo" src={require("../../assets/instagram-logo.jpg")} /> </a>

            </div> 

          
        </div>
    );
}

export default Contact;