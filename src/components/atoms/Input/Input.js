import styled from 'styled-components';

export const InputsWrapper = styled.form`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  width: 320px;
  height: 472px;
  margin: 16px 0;
`;
export const StyledInput = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  width: 320px;
  height: 40px;
  border-radius: 6px;
  margin: 0px 4px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border: none;
  outline: none;
  // text-inside
  font-weight: ${({ theme }) => theme.fontWeight.m};
  font-size: ${({ theme }) => theme.fontSize.m};
  line-height: 18px;

  border-right: 16px solid transparent;
`;
