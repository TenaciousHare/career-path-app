import styled from 'styled-components';
import { Title } from '../Title/Title';

export const ViewWrapper = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.white};
  width: 400px;
  height: auto;
  border-radius: 16px;
  padding: 30px 40px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.04), 0px 4px 3.25px rgba(0, 0, 0, 0.02);

  ${Title} {
    align-self: ${({ inContact }) => (inContact ? 'center' : 'inherit')};
  }

  p {
    text-align: justify;
  }
`;
