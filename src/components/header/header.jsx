import * as React from 'react';
import PropTypes from 'prop-types';

import { HeaderInnerContainerStyled, HeaderStyled, HeaderTitlteStyled, LinkStyled } from './styled';

const Header = ({ siteTitle }) => (
  <HeaderStyled>
    <HeaderInnerContainerStyled>
      <HeaderTitlteStyled>
        <LinkStyled to="/">{siteTitle}</LinkStyled>
      </HeaderTitlteStyled>
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
