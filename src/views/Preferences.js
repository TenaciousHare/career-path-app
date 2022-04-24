import React, { useContext } from 'react';
import { Title } from 'components/atoms/Title/Title';
import { Wrapper, StyledLink } from './Preferences.styles';
import PreferenceItem from 'components/molecules/PreferenceItem/PreferenceItem';
import { PreferencesContext } from 'providers/PreferencesProvider';

const Preferences = () => {
  const { preferences } = useContext(PreferencesContext);

  return (
    <Wrapper>
      <Title>Preferences</Title>
      {preferences.length > 0 ? (
        preferences.map((preference) => <PreferenceItem key={preference.id} preference={preference} />)
      ) : (
        <>
          <p>There are currently no career path preferences in the database.</p>
          <StyledLink to="/career-path-app/add-preference">Add new preference</StyledLink>
        </>
      )}
    </Wrapper>
  );
};

export default Preferences;
