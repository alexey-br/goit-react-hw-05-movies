import styled from 'styled-components';

export const MovieTitle = styled.p`
  margin-bottom: 10px;
  font-size: ${({ theme }) => theme.fontSizes[4]}px;
  font-weight: ${({ theme }) => theme.fontWeights.heading};
`;

export const InfoTag = styled.p`
  margin-bottom: 10px;
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  font-weight: ${({ theme }) => theme.fontWeights.heading};
`;
