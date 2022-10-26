import { Field } from 'formik';
import styled from 'styled-components';

export const Input = styled(Field)`
  margin-right: 8px;
  padding: 8px;
  border-radius: 4px;
  color: inherit;
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray};
  outline: none;

  transition: all 250ms;

  :focus {
    border-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.secondary};
  }
`;
