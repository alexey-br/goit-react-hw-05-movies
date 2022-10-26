import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavBar = styled.header`
  padding: 32px;
  background-color: ${({ theme }) => theme.colors.muted};
`;

export const Link = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes[4]}px;
  font-weight: ${({ theme }) => theme.fontWeights.heading};

  :not(:last-child) {
    margin-right: 24px;
  }

  &.active {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
