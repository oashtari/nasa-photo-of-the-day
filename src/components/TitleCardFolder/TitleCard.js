import React from 'react';

const TitleCard = props => {
    return (
        <div className="title">
            <h3>{props.title.title}</h3>
        </div>
    )
}

export default TitleCard;