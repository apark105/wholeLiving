import React from 'react';
import './assets/css/header.css';

function Header(props){
    
    return (
        <div onClick={props.returnHome} className="landingPageHeader">
            <div>Whole Living</div>
        </div>
    )
}

export default Header;