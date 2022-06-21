import React from 'react';
import Navigation from '../Navigation'


function Header(props){

    return(
        <header>
            <img id="header-logo" src={require(`../../assets/comic-life-nights-logo.png`)}/>

        </header>
    );
}


export default Header;