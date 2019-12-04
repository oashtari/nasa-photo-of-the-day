import React from 'react';

const ExplanationCard = props => {
    return (
        <div className="explanation">
            <p>{props.exp.explanation}</p>
        </div>
    )
}

export default ExplanationCard;