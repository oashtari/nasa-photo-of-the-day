import React from 'react';

const ImageCard = props => {
    return (
        <div className="images">
            <div className="imageByDate" alt="image from ${props.date}" src={props.hdurl}>
                <h3>{props.title}</h3>
                <p>{props.explanation}</p>
                <p>{props.date}</p>
            </div>
        </div>
    )
}

export default ImageCard;


// import React from "react";

// const PetCard = props => {
//     return (
//         <div className="dog-card " key="">
//             <img className="dog-image" alt="random dog" src={props.imgUrl} />
//             <h2>{props.breed}</h2>
//         </div>
//     );
// };
// export default PetCard;