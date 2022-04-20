import React, { useContext } from 'react';
import { Wrapper, FullName, StyledInfo, DataWrapper, StyledDeleteButton } from './PreferenceItem.styles';
import { PreferencesContext } from 'providers/PreferencesProvider';

const PreferenceItem = ({ preference: { id, firstName, lastName, industry, phone } }) => {
  const { deletePreference } = useContext(PreferencesContext);
  return (
    <Wrapper>
      <DataWrapper>
        <FullName>
          {firstName} {lastName}
        </FullName>
        <StyledInfo>
          <p>Phone: {phone}</p>
          <p>Path: {industry}</p>
        </StyledInfo>
      </DataWrapper>
      <StyledDeleteButton onClick={() => deletePreference(id)}>
        <span className="icon">
          <i className="fa-solid fa-x" />
        </span>
      </StyledDeleteButton>
    </Wrapper>
  );
};

export default PreferenceItem;
