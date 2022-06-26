import React from 'react'


function Contact(){
    return(
        <div>
            <a className="email-link" href="mailto:thomasnwalker@yahoo.com"> Submit Content  </a>
          
           <a className="instagram-link" href=""> <img className ="instagram-logo" src={require("../../assets/instagram-logo.jpg")} /> Instagram  </a>
          <h2> Submission Section Coming Soon </h2> 
        </div>
    );
}

export default Contact;