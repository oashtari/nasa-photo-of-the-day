import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TitleCard from './TitleCard';
import {Container, Row} from 'reactstrap';
import styled from 'styled-components';


export default function TheTitleCard() {
    const [title, setTitle] = useState([]);
    const [date, setDate] = useState(`2016-09-29`);

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=48RpYPlWRmLEBJfjcnQyl6VbZ7VRpJRYvbGaQwOU&date=${date}`)
            .then(response => {
                setTitle(response.data);
            })
            .catch(error => console.log(error));
    }, []);

    const TextDiv = styled.div`
        width: 80%;
        margin: auto;
        color: #003d99;
        text-align: center;
    `;

    return (
        <Container>
            <TextDiv>
                <TitleCard title={title} key={title.date} />
            </TextDiv>
        </Container>
    )
}
