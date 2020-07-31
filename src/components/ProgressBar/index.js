import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 24px;
`;

const Bar = styled.div`
  width: 100%;
  height: 15px;
  background: #C8C8C8;
  border-radius: 3px;
  position: relative;
  &::after {
    content: '';
    width: ${props => props.progress};
    height: 100%;
    position: absolute;
    border-radius: 3px;
    background: ${props => props.color};
  }
`;

const ProgressBar = (props) => {
  return(
    <Container>
      <p>{ props.info.name }</p>

      <Bar color={ props.color } progress={ props.info.percent }/>
    </Container>
  );
}

export default ProgressBar;