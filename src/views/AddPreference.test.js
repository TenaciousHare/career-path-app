import React from 'react';
import AddPreference from './AddPreference';
import Preferences from './Preferences';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('Adding preferences', () => {
  it('Fill the form and add new preference with justification for industry-4', () => {
    renderWithProviders(
      <>
        <AddPreference />
        <Preferences />
      </>
    );

    fireEvent.change(screen.getByTestId('First name'), { target: { value: 'Paweł' } });
    fireEvent.change(screen.getByTestId('Last name'), { target: { value: 'Zajączkowski' } });
    fireEvent.change(screen.getByTestId('Phone'), { target: { value: '515-377-445' } });
    fireEvent.change(screen.getByTestId('Industry'), { target: { value: 'industry-4' } });
    fireEvent.change(screen.getByTestId('Reason for choosing this career path'), { target: { value: 'I love this kind of job!' } });
    fireEvent.change(screen.getByTestId('I agree to the Terms and Conditions'), { target: { value: true } });
    fireEvent.click(screen.getByText('Submit'));
    screen.getByText(/Paweł/);
  });
});

/* ToDo 
1. Kiedy dodasz modal do Show Preference to sprawdź testem czy pokazuje uzasadnienie! */
