import styled from 'styled-components';

export const Line = styled.div`
  align-self: center;
  width: 320px;
  height: 0px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  margin: 16px 0;
`;
