import React from 'react';

const TitleCard = props => {
    return (
        <div className="title">
            <h3>{props.title.title}</h3>
            <p>{props.title.explanation}</p>
        </div>
    )
}

export default TitleCard;