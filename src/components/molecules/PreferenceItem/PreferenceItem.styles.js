import styled from 'styled-components';
import { DeleteButton } from 'components/atoms/DeleteButton/DeleteButton';

export const Wrapper = styled.li`
  align-self: center;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  background-color: ${({ theme }) => theme.colors.orange};
  width: 100%;
  height: 70px;
  padding: 5px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.lightGrey};
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.04), 0px 4px 3.25px rgba(0, 0, 0, 0.02);
`;

export const BtnWrapper = styled.div`
  display: flex;
`;

export const FullName = styled.h3`
  width: 100%;
  margin: 2px 10px;
  padding: 0;
  font-size: ${({ theme }) => theme.fontSize.l};
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
