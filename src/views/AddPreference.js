import React, { useState, useContext } from 'react';
import { Wrapper, FormWrapper, FullNameWrapper } from './AddPreference.styles';
import { Title } from 'components/atoms/Title/Title';
import { Line } from 'components/atoms/Line/Line';
import { SubmitButton } from 'components/atoms/SubmitButton/SubmitButton';
import FormField from 'components/molecules/FormField/FormField';
import { PreferencesContext } from 'providers/PreferencesProvider';

const initialFormState = {
  id: '',
  firstName: '',
  lastName: '',
  phone: '',
  industry: '',
  reason: '',
  confirmation: false,
};

const AddPreference = () => {
  const [formValues, setFormValues] = useState(initialFormState);
  const { handleAddPreference } = useContext(PreferencesContext);

  const handleInputChange = (e) => {
    if (e.target.name === 'confirmation') {
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.checked,
      });
    } else {
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmitPreference = (e) => {
    e.preventDefault();
    handleAddPreference(formValues);
    console.log(formValues);
    setFormValues(initialFormState);
  };

  return (
    <Wrapper>
      <Title>Add preference</Title>
      <Line />

      <FormWrapper onSubmit={handleSubmitPreference}>
        <FullNameWrapper>
          <FormField type="text" name="lastName" id="lastName" label="Last name" value={formValues['lastName']} onChange={handleInputChange} />
          <FormField type="text" name="firstName" id="firstName" label="First name" value={formValues['firstName']} onChange={handleInputChange} />
        </FullNameWrapper>
        <FormField type="tel" name="phone" id="phone" label="Phone" value={formValues['phone']} onChange={handleInputChange} />
        <FormField name="industry" id="industry" label="Industry" value={formValues['industry']} onChange={handleInputChange} isSelect />
        <FormField
          name="confirmation"
          type="checkbox"
          id="confirmation"
          label="I agree to the Terms and Conditions"
          value={formValues['confirmation']}
          onChange={handleInputChange}
          isCheckbox
        />
        <SubmitButton>Submit</SubmitButton>
      </FormWrapper>
    </Wrapper>
  );
};

export default AddPreference;
