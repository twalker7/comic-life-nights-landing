import React from 'react';
import Navigation from '../Navigation'


function Header(props){

    return(
        <header className="headerDiv">
            <img id="header-logo" src={require(`../../assets/comic-life-nights-logo.png`)}/>

             <Navigation setCurrentPage = {props.setCurrentPage} />
        </header>
    );
}


export default Header;