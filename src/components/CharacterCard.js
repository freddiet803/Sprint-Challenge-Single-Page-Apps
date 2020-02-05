import React from 'react';
import styled from 'styled-components';

const MyDiv = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  margin: 0 auto;
`;

export default function CharacterCard(props) {
  return (
    <MyDiv>
      <img src={props.charac.image} />
      <h2>{props.charac.name}</h2>
      <h3>{`Gender: ${props.charac.gender}`}</h3>
      <h4>{`Status: ${props.charac.status}`}</h4>
    </MyDiv>
  );
}
