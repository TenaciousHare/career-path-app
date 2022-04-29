import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import PreferencesProvider from 'providers/PreferencesProvider';
import { BrowserRouter as Router } from 'react-router-dom';

export const renderWithProviders = (children) => {
  return render(
    <Router>
      <ThemeProvider theme={theme}>
        <PreferencesProvider>{children}</PreferencesProvider>
      </ThemeProvider>
    </Router>
  );
};
