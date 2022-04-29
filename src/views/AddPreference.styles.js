import styled from 'styled-components';

export const FormWrapper = styled.form`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  width: 320px;
  height: auto;
  margin: 4px 0;
  p {
    align-self: flex-start;
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: ${({ theme }) => theme.fontWeight.sb};
    color: ${({ theme }) => theme.colors.error};
  }
`;
