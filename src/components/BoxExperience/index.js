
import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  width: 95%;
  align-self: ${props => props.position === 'left' ? 'flex-start' : 'flex-end'};
  position: relative;
  border-top: 2px dashed;
  border-right: ${props => props.position === 'left' ? '2px' : 0}  dashed;
  border-left: ${props => props.position !== 'left' ? '2px' : 0}  dashed;
  margin-top: 47px;
  padding-bottom: 47px;
  box-sizing: border-box;
  display: flex;
  justify-content: ${props => props.position === 'left' ? 'flex-start' : 'flex-end'};
  text-align: ${props => props.position !== 'left' ? 'right' : null};
  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 10px 0 10px;
    border-color: #000 transparent transparent transparent;
    bottom: -15px;
    right: ${props => props.position === 'left' ? '-10px' : null};
    left: ${props => props.position !== 'left' ? '-10px' : null};
  }
`;

const BoxHeader = styled.div`
  position: absolute;
  transform: translate(0, -30%);
  background: #fff;
  padding: ${props => props.position === 'left' ? '0 10px 0 0' : '0 0 0 10px'};
`;

const BoxBody = styled.div`
  margin-top: 60px;
  width: 50%;
`;

const BoxTitle = styled.p`
  font-weight: 800;
`;

const BoxDate = styled.p`
  color: #393939;
`;

const BoxExperience = (props) => {
  return(
      <Box position={ props.info.position } >
          <BoxHeader position={ props.info.position }>
            <BoxTitle>{ props.info.name }</BoxTitle>
            <BoxDate>{ props.info.date }</BoxDate>
          </BoxHeader>
          <BoxBody>{ props.info.text }</BoxBody>
      </Box>
  );
}

export default BoxExperience;