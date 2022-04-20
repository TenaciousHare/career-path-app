import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const PreferencesContext = React.createContext({
  preferences: [],
  handleAddPreference: () => {},
  deletePreference: () => {},
});

const PreferencesProvider = ({ children }) => {
  const [preferences, setPreferences] = useState([]);

  const handleAddPreference = (values) => {
    const newPreference = {
      id: uuidv4(),
      firstName: values.firstName,
      lastName: values.lastName,
      phone: values.phone,
      industry: values.industry,
      confirmation: values.confirmation,
    };
    setPreferences([newPreference, ...preferences]);
  };

  const deletePreference = (id) => {
    const filteredPreferences = preferences.filter((preference) => preference.id !== id);
    setPreferences(filteredPreferences);
  };

  return (
    <PreferencesContext.Provider
      value={{
        preferences,
        handleAddPreference,
        deletePreference,
      }}
    >
      {children}
    </PreferencesContext.Provider>
  );
};

export default PreferencesProvider;
