import React from 'react';

const ImageCard = props => {
    return (
        <div className="images">
            <div className="imageByDate" alt="image from ${props.date}" src={props.nasa.hdurl}>
                <h3>{props.nasa.title}</h3>
                <p>{props.nasa.explanation}</p>
                <p>{props.nasa.date}</p>
                <img src={props.nasa.hdurl} />
            </div>
        </div>
    )
}

export default ImageCard;
