import React, { useEffect, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const PreferencesContext = React.createContext({
  preferences: [],
  handleAddPreference: () => {},
  deletePreference: () => {},
});

const preferencesReducer = (preferences, action) => {
  switch (action.type) {
    case 'ADD PREFERENCE':
      return {
        preferences: [action.data],
        ...preferences,
      };
    case 'DELETE PREFERENCE':
      return {
        preferences: preferences.filter((preference) => preference.id !== action.id),
      };
    default:
      return preferences;
  }
};

const PreferencesProvider = ({ children }) => {
  const [preferences, dispatch] = useReducer(preferencesReducer, [], () => {
    const localData = localStorage.getItem('preferences');
    return localData ? JSON.parse(localData) : [];
  });

  const handleAddPreference = (data) => {
    const newPreference = {
      id: uuidv4(),
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      path: data.path,
      reason: data.reason,
      confirmation: data.confirmation,
    };
    dispatch({
      type: 'ADD PREFERENCE',
      data: newPreference,
    });
  };

  useEffect(() => {
    localStorage.setItem('preferences', JSON.stringify(preferences));
  }, [preferences]);

  const deletePreference = (id) => {
    dispatch({
      type: 'DELETE PREFERENCE',
      id,
    });
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
