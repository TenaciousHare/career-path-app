import styled from 'styled-components';
import { Title } from 'components/atoms/Title/Title';

export const Wrapper = styled.ul`
  width: 400px;
  max-height: 600px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.04), 0px 4px 3.25px rgba(0, 0, 0, 0.02);
  overflow-y: auto;
  overflow-x: hidden;
  ${Title} {
    align-self: flex-start;
    text-align: justify;
  }
`;
