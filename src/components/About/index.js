import React from 'react';


function About(){
    return(
        <div className="page-component">
           <h1 className="section-title"> About </h1> 
           <img src={require('../../assets/comic-life-nights-live-shot.jpeg')}/>
        </div>
    );
}


export default About; 