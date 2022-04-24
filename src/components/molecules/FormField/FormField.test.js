import React from 'react';
import FormField from 'components/molecules/FormField/FormField';
import { renderWithProviders } from 'helpers/renderWIthProviders';
describe('Input With Button', () => {
  it('Renders the component', () => {
    renderWithProviders(<FormField type="text" name="lastName" id="lastName" label="Last name" />);
  });
});
