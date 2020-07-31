import React from 'react';
import styled from 'styled-components';

import ProfilePicture from '../../components/ProfilePicture';
import ProfileDescription from '../../components/ProfileDescription'

const HeaderContainer = styled.section`
  display: grid;
  grid-template-columns: 50% 50%;
  margin: 100px 0 90px;
`;

const Header = () => {
  return(
    <HeaderContainer>
      <ProfilePicture/>
      <ProfileDescription/>
    </HeaderContainer>
  );
}

export default Header;