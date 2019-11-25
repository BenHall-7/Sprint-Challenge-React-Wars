import React from "react";
import styled from "styled-components";

export default function Person(props) {
    let P = styled.div`
        background: #FFFFFFC0;
        margin: 20px 0;
        padding: 5px 10px;
    `;

    let Name = styled.h1`text-align: center;`;

    return (
        <P>
            <Name>{props.data.name}</Name>
            <hr/>
            <p>Birth year: {props.data.birth_year}</p>
            <p>Gender: {props.data.gender}</p>
            <p>Hair color: {props.data.hair_color}</p>
        </P>
    )
}