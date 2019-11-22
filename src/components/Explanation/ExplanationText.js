import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ExplanationCard from './ExplanationCard';
import {Container, Row} from 'reactstrap';
import styled from 'styled-components';


export default function ExplanationText() {
    const [exp, setExp] = useState([]);
    const [date, setDate] = useState(`2016-09-29`);

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=48RpYPlWRmLEBJfjcnQyl6VbZ7VRpJRYvbGaQwOU&date=${date}`)
            .then(response => {
                console.log(response.data);
                setExp(response.data);
            })
            .catch(error => console.log(error));
    }, []);

    const ExpDiv = styled.div`
        width: 80%;
        margin: auto;
        color: #b30000;
        text-align: center;
    `;

    return (
        <Container>
            <ExpDiv>
                <ExplanationCard exp={exp} key={exp.date} />
            </ExpDiv>

        </Container>
    )
}
