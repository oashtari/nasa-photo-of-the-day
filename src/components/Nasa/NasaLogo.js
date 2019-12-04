import React, { useEffect, useState } from 'react';
import NasaLogoCard from './NasaLogoCard';
import {Container, Row, Col} from 'reactstrap';
import styled from 'styled-components';

export default function NasaLogo() {

    // useEffect(() => {
    //     axios
    //         .get(`https://api.nasa.gov/planetary/apod?api_key=48RpYPlWRmLEBJfjcnQyl6VbZ7VRpJRYvbGaQwOU&date=${date}`)
    //         .then(response => {
    //             console.log(response.data);
    //             setImages(response.data);
    //         })
    //         .catch(error => console.log(error));
    // }, []);

    const NasaDiv = styled.div`
        border: 1px solid black;
        width: 300px;
        height: 300px;
    `;

    return (
        // <Container>
            <NasaDiv>
                <NasaLogoCard />
            </NasaDiv>
        // </Container>
    )
}