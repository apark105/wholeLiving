import React from 'react';
import './assets/css/marker.css';


function KeyMarker(props){
    // console.log('what is this', text)
    // console.log(props.$hover);
    return (
        <div className="imgMarker">
            <img src={props.text} alt={props.alt}/>
          </div>
    )
}

export default KeyMarker;