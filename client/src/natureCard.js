import React from 'react';


export default function NatureCards(props) {
    console.log('did this get hit too?')
    console.log(props.photo.src.landscape);
    return (
    <React.Fragment>
            <div className="card col-6 col-sm-4 col-md-3">
                <img src={props.photo.src.landscape} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">{props.photo.photographer}</p>
                </div>
            </div>
    </React.Fragment>
    )
}