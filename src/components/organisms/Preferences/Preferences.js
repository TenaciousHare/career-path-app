import React from 'react';
import { Title } from 'components/atoms/Title/Title';
import { Wrapper } from './Preferences.styles';

const Preferences = ({ preferences }) => {
  return (
    <Wrapper>
      <ul>
        {preferences.length > 0 ? (
          preferences.map(({ id, firstName, lastName, phone, industry }) => (
            <li key={id}>
              <p>
                User{' '}
                <span>
                  {firstName} {lastName}
                </span>
              </p>
              <p>
                Phone number: <span>{phone}</span>
              </p>
              <p>
                Industry: <span>{industry}</span>
              </p>
            </li>
          ))
        ) : (
          <Title>There are currently no career path preferences in the database</Title>
        )}
      </ul>
    </Wrapper>
  );
};

export default Preferences;
