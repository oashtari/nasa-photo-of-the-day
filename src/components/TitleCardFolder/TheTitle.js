import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TitleCard from './TitleCard';


export default function TheTitleCard() {
    const [title, setTitle] = useState([]);
    const [date, setDate] = useState(`2016-09-29`);

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=48RpYPlWRmLEBJfjcnQyl6VbZ7VRpJRYvbGaQwOU&date=${date}`)
            .then(response => {
                // console.log(response.data);
                setTitle(response.data);
            })
            .catch(error => console.log(error));
    }, []);


    return (
        <div className="title">
            {/* {images.map(image => { */}
            {/* return  */}
            <TitleCard title={title} key={title.date} />
            {/* })} */}

        </div>
    )
}
