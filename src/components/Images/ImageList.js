import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ImageCard from './ImageCard';
import {Container, Row, Col} from 'reactstrap';
import styled from 'styled-components';

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

    const ImageDiv = styled.div`
        border: 3px dashed #29a329;
    `;

    return (
        <Container>
            <ImageDiv>
                <ImageCard nasa={images} key={images.date} />
            </ImageDiv>

        </Container>
    )
}
