import React from 'react';
import { Title } from 'components/atoms/Title/Title';
import { Wrapper, Text } from './PreferenceDetails.styles';

const PreferenceDetails = ({ preference: { firstName, lastName, phone, path, reason } }) => {
  return (
    <Wrapper>
      <Title>
        {firstName} {lastName}
      </Title>
      {phone ? (
        <Text>
          <span>Phone number:</span> {phone}
        </Text>
      ) : null}
      <Text>
        <span>Choosen career path:</span> {path}
      </Text>
      {reason ? (
        <Text>
          <span>Reason:</span> {reason}
        </Text>
      ) : null}
    </Wrapper>
  );
};

export default PreferenceDetails;
