import styled from 'styled-components';

export const Wrapper = styled.li`
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style: none;
  background-color: ${({ theme }) => theme.colors.orange};
  width: 350px;
  height: 75px;
  padding: 12px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.lightGrey};
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.04), 0px 4px 3.25px rgba(0, 0, 0, 0.02);
`;

export const FullName = styled.h3`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.ll};
  margin: 5px;
`;

export const Phone = styled.p`
  margin: 0 0 0 15px;
  font-size: ${({ theme }) => theme.fontSize.m};
`;

export const Industry = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  text-align: center;
  padding: 8px;
`;

export const StyledInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 75%;
  height: 100%;
  border-right: 1px solid ${({ theme }) => theme.colors.lightGrey};
`;
