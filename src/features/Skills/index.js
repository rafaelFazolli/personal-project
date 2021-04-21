import React from 'react';
import styled from 'styled-components';

import BoxSkills from '../../components/BoxSkills';

const Container = styled.section`
  width: 100%;
  box-sizing: border-box;
  padding: 47px;
  display: flex;
  justify-content: space-between;
`;

const languages = {
  title: 'LINGUAGENS',
  itens: [
    { name: 'HTML', percent: '90%'}, 
    { name: 'CSS/SCSS', percent: '85%'}, 
    { name: 'JAVASCRIPT', percent: '70%'}, 
    { name: 'JAVA', percent: '10%'}
  ],
  color: '#00FF6F'
}

const frameworks = {
  title: 'TOOLS & FRAMEWORKS',
  itens: [
    { name: 'ANGULAR', percent: '70%'}, 
    { name: 'REACT.JS', percent: '45%'}, 
    { name: 'VUE.JS', percent: '10%'}, 
    { name: 'JQUERY', percent: '80%'}
  ],
  color: '#CE00FF'
}

const Skill = () => {
  return(
    <Container>
      <BoxSkills skills={ languages } />
      <BoxSkills skills={ frameworks } />
    </Container>
  );
}

export default Skill;