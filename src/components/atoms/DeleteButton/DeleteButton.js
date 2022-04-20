import styled from 'styled-components';

export const DeleteButton = styled.button`
  width: 35px;
  height: 35px;
  border: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;
