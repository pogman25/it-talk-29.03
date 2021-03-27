import styled from 'styled-components';
import { Link } from 'gatsby';

export const HeaderStyled = styled.header`
  background-color: rebeccapurple;
  margin-bottom: 1.45rem;
`;

export const HeaderInnerContainerStyled = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;

export const HeaderTitlteStyled = styled.h1`
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LinkStyled = styled(Link)`
  color: #fff;
  margin-right: 16px;
`;
