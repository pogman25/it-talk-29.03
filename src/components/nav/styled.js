import styled from 'styled-components';
import { Link } from 'gatsby';

export const LinkStyled = styled(Link)`
  text-decoration: none;

  &.${({ activeClassName }) => activeClassName} {
    text-decoration: underline;
  }
`;
