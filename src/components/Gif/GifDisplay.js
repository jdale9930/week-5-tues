import React from 'react';
import './GifDisplay.css';

const GifDisplay = (props) => {

    return(
            <img className = "gif" src = {props.src}></img>
    )
}

export default GifDisplay
