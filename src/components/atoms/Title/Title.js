import styled from 'styled-components';
export const Title = styled.h2`
  font-weight: ${({ theme }) => theme.fontWeight.sb};
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.black};
  margin: 8px 0;
`;
