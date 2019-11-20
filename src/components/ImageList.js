import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ImageCard from './ImageCard';

export default function ImageList() {
    const [images, setImages] = useSate([]);
    const didUpdate = () => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
            .then(response => {
                console.log(response)
            })
            .catch(error => console.log(error))
    }
}

useEffect(didUpdate, []);

return (
    <div className="image">
        {images.map(image => {
            return <ImageCard image={image} key={image.id} />
        })}

    </div>
)