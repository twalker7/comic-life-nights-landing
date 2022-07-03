import React from 'react';





function Navigation(props){

    return(
<div className="navigation-container">
  <div> <a className="nav-element" href={()=>false} onClick={()=> props.setCurrentPage('home')}> Home</a></div>

  <div> <a className="nav-element" href={()=>false} onClick={()=> props.setCurrentPage('upcoming')}> Upcoming  </a></div>

  <div> <a className="nav-element" href={()=>false} onClick={()=> props.setCurrentPage('comics')}> Meet the Comics </a> </div>
  <div> <a className="nav-element" href={()=>false} onClick={()=> props.setCurrentPage('about')}> About </a> </div>
  <div> <a className="nav-element" href={()=>false} onClick={()=> props.setCurrentPage('contact')} > Contact/Submissions </a> </div>
  

</div>
    );
}


export default Navigation;