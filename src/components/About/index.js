import React from 'react';


function About(){
    return(
        <div className="page-component">
           <h1 className="section-title"> About Comic Life Nights  </h1> 
           <p className="about-summary"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
           <img className="about-photo" src={require('../../assets/comic-life-nights-live-shot.jpeg')}/>
        
        </div>
    );
}


export default About; 