import React from 'react';
import styled from 'styled-components';
import BoxExperience from '../../components/BoxExperience'

const Container = styled.section`
  width: 100%;
  box-sizing: border-box;
  padding: 47px;
  display: flex;
  flex-direction: column;
`;

const experience = [{
  name: 'PrecisouAchou',
  date: '06.2015',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in augue id massa auctor consequat. Integer gravida, velit vel dapibus fringilla, nisi felis    cursus   massa, a iaculis nulla turpis ut dui.',
  position: 'left'
}, {
  name: 'RETINA WEB',
  date: '06.2015',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in augue id massa auctor consequat. Integer gravida, velit vel dapibus fringilla, nisi felis    cursus   massa, a iaculis nulla turpis ut dui.',
  position: 'right'
}, {
  name: 'B2s DIGITAL',
  date: '06.2015',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in augue id massa auctor consequat. Integer gravida, velit vel dapibus fringilla, nisi felis    cursus   massa, a iaculis nulla turpis ut dui.',
  position: 'left'
}, {
  name: 'DEXTRA',
  date: '06.2015',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in augue id massa auctor consequat. Integer gravida, velit vel dapibus fringilla, nisi felis    cursus   massa, a iaculis nulla turpis ut dui.',
  position: 'right'
}
]

const Experience = () => {
  return(
    <Container>
      <h2>EXPERIÊNCIA</h2>
      {
        experience.map((item, index) =>  <BoxExperience key={ index } info={ item } />)
      }
    </Container>
  );
}

export default Experience;