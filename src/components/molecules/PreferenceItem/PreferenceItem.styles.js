import styled from 'styled-components';
import { DeleteButton } from 'components/atoms/DeleteButton/DeleteButton';

export const Wrapper = styled.li`
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  background-color: ${({ theme }) => theme.colors.orange};
  width: 350px;
  height: 70px;
  padding: 5px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.lightGrey};
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.04), 0px 4px 3.25px rgba(0, 0, 0, 0.02);
`;

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  width: 80%;
`;

export const FullName = styled.h3`
  margin: 2px 0 2px 10px;
  padding: 0;
  font-size: ${({ theme }) => theme.fontSize.ll};
`;

export const StyledInfo = styled.div`
  margin-left: 4px;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  p {
    display: block;
    margin: 0;
    padding: 0 10px 0 10px;
    font-size: ${({ theme }) => theme.fontSize.s};
  }
  p:nth-child(1) {
    border-right: 1px solid ${({ theme }) => theme.colors.lightGrey};
  }
`;

export const StyledDeleteButton = styled(DeleteButton)`
  padding: 5px;
  margin: 5px 4px;
  transition: 0.2s linear;
  cursor: pointer;
  & .icon {
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.colors.black80};
  }
  &:hover {
    & .icon {
      font-size: ${({ theme }) => theme.fontSize.ll};
      color: ${({ theme }) => theme.colors.orange};
    }
  }
`;
