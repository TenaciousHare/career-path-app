import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.white};
  width: 400px;
  height: 550px;
  border-radius: 16px;
  padding: 40px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.04), 0px 4px 3.25px rgba(0, 0, 0, 0.02);
`;

export const FormWrapper = styled.form`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  width: 320px;
  height: 472px;
  margin: 16px 0;
`;
