import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavWrapper = styled.nav`
  position: relative;
  margin: 35px auto;
  width: 400px;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.04), 0px 4px 3.25px rgba(0, 0, 0, 0.02);
`;

export const LinkWrapper = styled.ul`
  display: flex;
  width: 350px;
`;

export const Indicator = styled.div`
  position: absolute;
  top: -50%;
  width: 70px;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.orange};
  border-radius: 50%;
  border: 6px solid ${({ theme }) => theme.colors.grey};
  transition: 0.5s;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -22px;
    width: 20px;
    height: 20px;
    background-color: transparent;
    border-top-right-radius: 20px;
    box-shadow: 0px -10px 0 0 ${({ theme }) => theme.colors.grey};
  }
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -22px;
    width: 20px;
    height: 20px;
    background-color: transparent;
    border-top-left-radius: 20px;
    box-shadow: 0px -10px 0 0 ${({ theme }) => theme.colors.grey};
  }
`;

export const StyledLink = styled(NavLink)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  z-index: 1;
  text-align: center;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSize.m};
  text-decoration: none;
  & .icon {
    position: relative;
    display: block;
    line-height: 75px;
    font-size: ${({ theme }) => theme.fontSize.ll};
    text-align: center;
    transition: 0.5s;
    color: ${({ theme }) => theme.colors.black80};
  }
  &.active .icon {
    transform: translateY(-37px);
    color: ${({ theme }) => theme.colors.white};
  }
  & .text {
    position: absolute;
    font-size: ${({ theme }) => theme.fontSize.s};
    color: ${({ theme }) => theme.colors.black80};
    letter-spacing: 0.5px;
    transition: 0.5s;
    opacity: 0;
    transform: translateY(24px);
  }
  &.active .text {
    opacity: 1;
    transform: translateY(16px);
  }
  &:nth-child(1).active ~ ${Indicator} {
    transform: translateX(calc(70px * 0));
  }
  &:nth-child(2).active ~ ${Indicator} {
    transform: translateX(calc(70px * 1));
  }
  &:nth-child(3).active ~ ${Indicator} {
    transform: translateX(calc(70px * 2));
  }
  &:nth-child(4).active ~ ${Indicator} {
    transform: translateX(calc(70px * 3));
  }
`;
