import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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
