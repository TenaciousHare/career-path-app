import React from 'react';
import { Wrapper, FullName, Phone, StyledInfo, Industry } from './PreferenceItem.styles';

const PreferenceItem = ({ preference: { firstName, lastName, industry, phone } }) => {
  return (
    <Wrapper>
      <StyledInfo>
        <FullName>
          {firstName} {lastName}
        </FullName>
        <Phone>{phone}</Phone>
      </StyledInfo>
      <Industry>{industry}</Industry>
    </Wrapper>
  );
};

export default PreferenceItem;
