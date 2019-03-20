import React from 'react';

function KeyMarker(text){
    // console.log('what is this', text)
    return (
        <div style={{
            color: 'white', 
            background: 'grey',
            padding: '15px 10px',
            display: 'inline-flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '100%',
            transform: 'translate(-50%, -50%)'
          }}>
            {text.text}
          </div>
    )
}

export default KeyMarker;