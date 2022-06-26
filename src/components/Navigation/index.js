import React from 'react';





function Navigation(props){

    return(
<div className="navigation-container">
  <div> <a href={''} onClick={()=> props.setCurrentPage('home')}> Home</a></div>

  <div> <a href={''}> Upcoming  </a></div>

  <div> <a href={'#meet-the-comics'}> Meet the Comics </a> </div>
  <div> <a href={''} onClick={()=> props.setCurrentPage('about')}> About </a> </div>
  <div> <a href={''} onClick={()=> props.setCurrentPage('contact')}> Contact/Submissions </a> </div>
  

</div>
    );
}


export default Navigation;