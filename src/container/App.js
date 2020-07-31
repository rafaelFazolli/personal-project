import React from 'react';
import './App.css';
import styled from 'styled-components'

import Header from '../features/Header';
import Skill from '../features/Skills';
import Experience from '../features/Experience';
import Line from '../components/Line';

const Container = styled.section`
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
  overflow: hidden;
`;

function App() {
  return (
    <Container>
      <Header />
      <Line />
      <Skill />
      <Line />
      <Experience />
      <Line />
    </Container>
  );
}

export default App;
