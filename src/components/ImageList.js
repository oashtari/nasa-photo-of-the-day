import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ImageCard from './ImageCard';
// import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';

export default function ImageList() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        axios
            .get('https://api.nasa.gov/planetary/apod')
            .then(response => {
                console.log(response.data);
                setImages(response.data);
            })
            .catch(error => console.log(error));
    }, []);


    return (
        <div className="image">
            {images.map(image => {
                return <ImageCard image={image} key={image.date} />
            })}

        </div>
    )
}






// export default function PetGrid() {
//     // https://dog.ceo/api/breed/hound/images/random/15
//     // hold data from our api
//     const [petData, setPetData] = useState([]);

//     // to capture our breed
//     const [breed, setBreed] = useState("mix");

//     useEffect(() => {
//         axios
//             .get(`https://dog.ceo/api/breed/${breed}/images/random/15`)
//             .then(data => {
//                 console.log(data);
//                 setPetData(data.data.message);
//             });
//     }, [breed]);

//     return (
//         <div className="container">
//             <button onClick={() => setBreed("mastiff")}>Mastiff</button>
//             <button onClick={() => setBreed("labrador")}>Labrador</button>

//             <div className="entry">
//                 {petData.map(petUrl => {
//                     return <PetCard imgUrl={petUrl} breed={breed} />;
//                 })}
//             </div>
//         </div>
//     );
// }