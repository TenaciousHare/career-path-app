import React, { useContext, useState } from 'react';
import { Title } from 'components/atoms/Title/Title';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import { StyledLink } from './Preferences.styles';
import PreferenceItem from 'components/molecules/PreferenceItem/PreferenceItem';
import { PreferencesContext } from 'providers/PreferencesProvider';
import useModal from 'hooks/useModal';
import PreferenceDetails from 'components/molecules/PreferenceDetails/PreferenceDetails';
import Modal from 'components/organisms/Modal/Modal';
const Preferences = () => {
  const { preferences } = useContext(PreferencesContext);
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const [currentPreference, setCurrentPreference] = useState([]);

  const handleOpenPreferencesDetails = (id) => {
    const preferenceDetails = preferences.find((preference) => preference.id === id);
    setCurrentPreference(preferenceDetails);
    handleOpenModal();
  };

  return (
    <ViewWrapper>
      <Title>Preferences</Title>
      {preferences.length > 0 ? (
        preferences.map((preference) => (
          <PreferenceItem key={preference.id} preference={preference} handleOpenPreferencesDetails={handleOpenPreferencesDetails} />
        ))
      ) : (
        <>
          <p>There are currently no career path preferences in the database.</p>
          <StyledLink to="/career-path-app/add-preference">Add new preference</StyledLink>
        </>
      )}

      <Modal isOpen={isOpen} handleClose={handleCloseModal}>
        <PreferenceDetails preference={currentPreference} />
      </Modal>
    </ViewWrapper>
  );
};

export default Preferences;
