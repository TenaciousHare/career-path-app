import React, { useState } from 'react';
import Form from 'components/organisms/Form/Form';
import { Wrapper } from './Root.styles';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import Preferences from 'components/organisms/Preferences/Preferences';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Home from 'components/organisms/Home/Home';
import Contact from 'components/organisms/Contact/Contact';

const initialFormState = {
  id: '',
  firstName: '',
  lastName: '',
  phone: '',
  industry: '',
  confirmation: false,
};

const Root = () => {
  const [formValues, setFormValues] = useState(initialFormState);
  const [preferences, setPreferences] = useState([]);

  const handleInputChange = (e) => {
    if (e.target.name === 'confirmation') {
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.checked,
      });
    } else {
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleAddPreference = (e) => {
    e.preventDefault();
    const newPreference = {
      id: uuidv4(),
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      phone: formValues.phone,
      industry: formValues.industry,
      confirmation: formValues.confirmation,
    };

    setPreferences([newPreference, ...preferences]);
    setFormValues(initialFormState);
    console.log(preferences);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Wrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/add-preference"
                element={<Form formValues={formValues} handleInputChange={handleInputChange} handleAddPreference={handleAddPreference} />}
              />
              <Route path="/show-preferences" element={<Preferences preferences={preferences} />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
