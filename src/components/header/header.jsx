import * as React from 'react';
import PropTypes from 'prop-types';

import {
  HeaderInnerContainerStyled,
  HeaderStyled,
  HeaderTitlteStyled,
  LinkStyled,
} from './styled';
import AuthWrapper from '../AuthWrapper';

const Header = ({ siteTitle }) => (
  <HeaderStyled>
    <HeaderInnerContainerStyled>
      <HeaderTitlteStyled>
        <LinkStyled to="/">{siteTitle}</LinkStyled>
      </HeaderTitlteStyled>
      <AuthWrapper>
        {({ openModal }) => <button onClick={openModal}>Log In</button>}
      </AuthWrapper>
    </HeaderInnerContainerStyled>
  </HeaderStyled>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
