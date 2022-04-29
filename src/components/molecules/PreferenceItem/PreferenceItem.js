import React, { useContext } from 'react';
import { Wrapper, BtnWrapper, FullName, StyledDeleteButton } from './PreferenceItem.styles';
import { PreferencesContext } from 'providers/PreferencesProvider';

const PreferenceItem = ({ preference: { id, firstName, lastName }, handleOpenPreferencesDetails }) => {
  const { deletePreference } = useContext(PreferencesContext);
  return (
    <Wrapper>
      <FullName>
        <p>
          {firstName} {lastName}
        </p>
      </FullName>
      <BtnWrapper>
        <StyledDeleteButton onClick={() => handleOpenPreferencesDetails(id)}>
          <span className="icon">
            <i className="fa-solid fa-eye" />
          </span>
        </StyledDeleteButton>
        <StyledDeleteButton onClick={() => deletePreference(id)}>
          <span className="icon">
            <i className="fa-solid fa-x" />
          </span>
        </StyledDeleteButton>
      </BtnWrapper>
    </Wrapper>
  );
};

export default PreferenceItem;
