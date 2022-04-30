import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { Wrapper } from './Root.styles';
import AddPreference from 'views/AddPreference';
import Preferences from 'views/Preferences';
import Home from 'views/Home';
import Contact from 'views/Contact';
import PreferencesProvider from 'providers/PreferencesProvider';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <PreferencesProvider>
            <Wrapper>
              <Routes>
                <Route path="/" element={<Navigate replace to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/add-preference" element={<AddPreference />} />
                <Route path="/show-preferences" element={<Preferences />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Wrapper>
          </PreferencesProvider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
