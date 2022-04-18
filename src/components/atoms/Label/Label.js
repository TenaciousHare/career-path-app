import styled from 'styled-components';

export const StyledLabel = styled.label`
  align-self: flex-start;
  width: auto;
  height: 13px;
  font-weight: ${({ theme }) => theme.fontWeight.r};
  font-size: ${({ theme }) => theme.fontSize.s};
  line-height: 13px;
  margin: 4px 0;
  color: ${({ theme }) => theme.colors.black80};
`;
