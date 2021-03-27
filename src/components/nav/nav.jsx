import React from 'react';

import {
  NavLinksStyled,
  ListOfLinksStyled,
  LinkItemStyled,
  LinkStyled,
} from './styled';

const Nav = () => {
  return (
    <NavLinksStyled>
      <ListOfLinksStyled>
        <LinkItemStyled>
          <LinkStyled to="/" activeClassName="active">
            Main
          </LinkStyled>
        </LinkItemStyled>
        <LinkItemStyled>
          <LinkStyled to="/swapi/" activeClassName="active">
            Test SWAPI
          </LinkStyled>
        </LinkItemStyled>
        <LinkItemStyled>
          <LinkStyled to="/hoc/" activeClassName="active">
            Test HOC
          </LinkStyled>
        </LinkItemStyled>
      </ListOfLinksStyled>
    </NavLinksStyled>
  );
};

export default Nav;
