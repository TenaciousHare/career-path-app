import styled from 'styled-components';
import { ReactComponent as Logo } from 'assets/logo.svg';

export const Banner = styled.div`
  width: 300px;
  height: 100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const StyledLogo = styled(Logo)`
  padding: 5px;
  width: 75px;
  height: 75px;
`;

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.r};
  text-align: justify;
`;
