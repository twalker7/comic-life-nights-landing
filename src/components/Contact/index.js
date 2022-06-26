import React from 'react'


function Contact(){
    return(
        <div>
           <div className="link-container">
           <a className="email-link" href="mailto:thomasnwalker@yahoo.com"> Submit Content  </a>
           <a className="instagram-link" href=""> <img className ="instagram-logo" src={require("../../assets/instagram-logo.jpg")} /> Instagram  </a>

            </div> <br/> 

          
        </div>
    );
}

export default Contact;