import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavBar = styled.header`
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.muted};
  /* border-bottom: 1px solid ${({ theme }) => theme.colors.text}; */
`;

export const Link = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  font-weight: ${({ theme }) => theme.fontWeights.heading};

  :not(:last-child) {
    margin-right: 24px;
  }

  &.active {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
