import React from 'react';
import Rafael from '../../images/rafael.jpg'
import styled from 'styled-components';

const Image = styled.img`
  border-radius: 100%;
  width: 50%;
  margin: 0 auto;
`;

const ProfilePicture = () => {
  return(
    <Image src={ Rafael } alt="Foto de Rafael Rodrigo Fazolli"/>
  );
}

export default ProfilePicture;