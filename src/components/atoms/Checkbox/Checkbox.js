import styled from 'styled-components';

export const CheckboxWrapper = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 8px;
  margin: 8px 0;
`;

export const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  background-color: #da4b26;
`;
