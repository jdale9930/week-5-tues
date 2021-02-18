import React from 'react';
import './GifDisplay.css';

const GifDisplay = (props) => {

    return(
        <div className = "container2">
            <div className = "gifDiv">{props.title}</div>
            <img className = "gif" src = {props.src}></img>
        </div>
    )
}

export default GifDisplay
