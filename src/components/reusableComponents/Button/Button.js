import styled from 'styled-components';

export const Button = styled.button`
  padding: 8px 16px;
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  display: inline-block;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.background};
  font-weight: ${({ theme }) => theme.fontWeights.heading};
  cursor: pointer;

  transition: transform 200ms;

  :active {
    transform: translateY(2px);
  }
`;
