import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ImageCard from './ImageCard';

export default function ImageList() {
    const [images, setImages] = useState([]);
    const [date, setDate] = useState(`2016-09-29`);

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=48RpYPlWRmLEBJfjcnQyl6VbZ7VRpJRYvbGaQwOU&date=${date}`)
            .then(response => {
                console.log(response.data);
                setImages(response.data);
            })
            .catch(error => console.log(error));
    }, []);


    return (
        <div className="image">
            {/* {images.map(image => { */}
            {/* return  */}
            <ImageCard nasa={images} key={images.date} />
            {/* })} */}

        </div>
    )
}