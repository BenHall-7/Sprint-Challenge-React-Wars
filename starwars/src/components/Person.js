import React from "react";
import styled from "styled-components";

export default function Person(props) {
    let P = styled.div`
        background: #FFFFFFC0;
    `;

    let Name = styled.h1`

    `;

    return (
        <P>
            <Name>{props.data.name}</Name>
        </P>
    )
}