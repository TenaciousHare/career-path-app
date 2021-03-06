import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-rows: 120px 1fr;
  background-color: ${({ theme }) => theme.colors.grey};
`;
