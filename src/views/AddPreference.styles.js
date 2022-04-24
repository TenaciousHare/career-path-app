import styled from 'styled-components';
import { StyledLabel } from 'components/atoms/Label/Label';
import { StyledInput } from 'components/atoms/Input/Input';

export const Wrapper = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.white};
  width: 400px;
  height: auto;
  border-radius: 16px;
  padding: 30px 40px 20px 40px;
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
  height: auto;
  margin: 4px 0;
`;

export const FullNameWrapper = styled.div`
  display: grid;
  grid-template-areas:
    'fNLabel lNLabel'
    'fNInput lNInput';
  ${StyledInput} {
    width: 155px;
    &:nth-child(1) {
      grid-area: fNInput;
    }
    &:nth-child(2) {
      grid-area: lNInput;
    }
  }
  ${StyledLabel} {
    margin-left: 6px;
    &:nth-child(2) {
      grid-area: fNLabel;
    }
    &:nth-child(1) {
      grid-area: lNLabel;
    }
  }
`;
