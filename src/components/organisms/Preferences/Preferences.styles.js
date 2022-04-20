import styled from 'styled-components';

export const Wrapper = styled.nav`
  width: 400px;
  height: auto;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.04), 0px 4px 3.25px rgba(0, 0, 0, 0.02);
`;
