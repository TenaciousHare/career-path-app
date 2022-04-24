import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  width: 300px;
  height: 300px;
  padding: 40px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.04), 0px 4px 3.25px rgba(0, 0, 0, 0.02);
`;

export const ContactsWrapper = styled.div`
  width: 75%;
  height: 40px;
  align-self: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
  &:hover {
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.orange};
    & .icon,
    .text {
      color: ${({ theme }) => theme.colors.white};
    }
  }
  & .icon {
    font-size: ${({ theme }) => theme.fontSize.ll};
    margin: 5px 15px;
  }

  & .text {
    font-size: ${({ theme }) => theme.fontSize.l};
    margin: 5px 15px;
  }
`;

export const StyledExternalLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black80};
`;
