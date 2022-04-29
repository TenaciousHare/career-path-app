import styled from 'styled-components';

export const ContactsWrapper = styled.div`
  width: 75%;
  height: 40px;
  display: flex;
  align-self: center;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 40px;
  margin: 5px 0;
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
