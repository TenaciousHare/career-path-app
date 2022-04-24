import styled from 'styled-components';
import { Title } from 'components/atoms/Title/Title';
import { NavLink } from 'react-router-dom';

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
  p {
    text-align: justify;
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-decoration: none;
  align-items: center;
  padding: 8px;
  width: 320px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.orange};
  border-radius: 6px;
  border: none;
  margin: 8px 0;
  color: white;
  font-size: ${({ theme }) => theme.fontSize.l};
`;
