import styled from 'styled-components';
import { StyledLabel } from 'components/atoms/Label/Label';

export const CheckboxWrapper = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  margin-top: 8px;

  ${StyledLabel} {
    font-weight: ${({ theme }) => theme.fontWeight.sb};
    cursor: pointer;
  }
`;

export const StyledCheckbox = styled.input`
  accent-color: ${({ theme }) => theme.colors.orange};
  width: 16px;
  height: 16px;
  margin-right: 12px;
  cursor: pointer;
`;
