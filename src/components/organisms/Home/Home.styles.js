import styled from 'styled-components';
import { ReactComponent as Logo } from 'assets/logo.svg';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  width: 400px;
  height: 300px;
  padding: 40px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.04), 0px 4px 3.25px rgba(0, 0, 0, 0.02);
`;

export const Banner = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const StyledLogo = styled(Logo)`
  margin-right: 10px;
  width: 50px;
  height: 50px;
  fill: ${({ theme }) => theme.colors.orange};
`;

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.r};
  text-align: justify;
`;
