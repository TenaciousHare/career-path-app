import styled from 'styled-components';

export const SubmitButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
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
