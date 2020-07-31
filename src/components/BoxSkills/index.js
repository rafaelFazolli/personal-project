import React from 'react';
import styled from 'styled-components';

import ProgressBar from '../ProgressBar';

const Box = styled.div`
  width: 48%;
`;

const BoxSkills = (props) => {
  return(
    <Box>
      <h2>{ props.skills.title }</h2>

      {
        props.skills.itens.map((item, index) =>  <ProgressBar key={ index } info={ item } color={ props.skills.color } />)
      }

    </Box>
  );
}

export default BoxSkills;