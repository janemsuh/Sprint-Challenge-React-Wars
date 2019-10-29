import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    width: 25%;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 1%;
    border: 1px dashed black;
    margin: 2%;
`;

const Name = styled.h1`
    color: red;
    text-shadow: 1px 1px 5px #fff;
`;

const Stat = styled.p`
    color: black;
    font-weight: bold;
    padding: 1%;
    border-top: 1px dashed black;
    margin: 5%;
`;

const Character = (props) => {
    return (
        <Div>
            <Name>{props.character.name}</Name>
            <Stat>Gender: {props.character.gender}</Stat>
            <Stat>Height: {props.character.height}</Stat>
            <Stat>Mass: {props.character.mass}kg</Stat>
            <Stat>Birth Year: {props.character.birth_year}</Stat>
            <Stat>Home: {props.character.homeworld}</Stat>
        </Div>
    );
};

export default Character;