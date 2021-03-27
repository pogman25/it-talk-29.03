import styled from 'styled-components';
import { Link } from 'gatsby';

export const NavLinksStyled = styled.nav`
  max-width: 960px;
  margin: 0 auto;
`;

export const ListOfLinksStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 24px;
  margin: 0 0 24px;
`;

export const LinkItemStyled = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;

  &.${({ activeClassName }) => activeClassName} {
    text-decoration: underline;
  }
`;
