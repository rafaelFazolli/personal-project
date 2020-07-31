import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa'

const Description = styled.section`
  width: 100%;
`;

const SocialContainer = styled.div`
  display: flex;
  max-width: 60%;
  justify-content: space-around;
  margin: 100px auto 0;
`;

const ProfileDescription = () => {
  return(
    <Description>
      <p>Meu nome é...</p>
      <h1>Rafael Fazolli</h1>
      <p>Eu sou um desenvolvedor front-end, tenho 29 anos e sou residente de Americana/SP, amo aprender e desenvolver aplicações web.</p>

      <SocialContainer>
        <a href="https://www.facebook.com/rafael.fazolli" target="_blank" rel="noopener noreferrer"><FaFacebookF size="20"/></a>
        <a href="https://www.instagram.com/rafazolli/" target="_blank" rel="noopener noreferrer"><FaInstagram size="20"/></a>
        <a href="https://www.linkedin.com/in/rafaelfazolli/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size="20"/></a>
        <a href="https://github.com/rafaelFazolli" target="_blank" rel="noopener noreferrer"><FaGithub size="20"/></a>
      </SocialContainer>
    </Description>
  );
}

export default ProfileDescription;