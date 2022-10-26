import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MenuList = styled.ul`
  display: flex;
  gap: 32px;
  margin: 10px 0;
`;

export const MenuLink = styled(NavLink)`
  color: inherit;
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  font-weight: ${({ theme }) => theme.fontWeights.heading};
  text-decoration: none;

  &.active {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
