import React from 'react';

import { LinkStyled } from './styled';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <LinkStyled to="/" activeClassName="active">
            Main
          </LinkStyled>
        </li>
        <li>
          <LinkStyled to="/page-2/" activeClassName="active">
            Go to page 2
          </LinkStyled>
        </li>
        <li>
          <LinkStyled to="/using-typescript/" activeClassName="active">
            Go to "Using TypeScript"
          </LinkStyled>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
