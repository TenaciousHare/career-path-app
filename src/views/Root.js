import React from 'react';
import FormField from 'components/molecules/FormField/FormField';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';

const Wrapper = styled.div`
  background-color: #d7dedd;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
function Root() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <FormField />
      </Wrapper>
    </ThemeProvider>
  );
}

export default Root;
