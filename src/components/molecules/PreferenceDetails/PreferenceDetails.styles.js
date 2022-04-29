import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  text-align: justify;
  span {
    font-weight: ${({ theme }) => theme.fontWeight.sb};
  }
`;
