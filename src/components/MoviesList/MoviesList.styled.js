import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ListItem = styled.li`
  :not(:last-child) {
    margin-bottom: 6px;
  }
`;

export const MovieLink = styled(Link)`
  color: inherit;

  transition: color, 250ms;

  :hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
