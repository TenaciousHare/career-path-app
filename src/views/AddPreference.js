import React, { useState, useContext } from 'react';
import { Wrapper, FormWrapper } from './AddPreference.styles';
import { Title } from 'components/atoms/Title/Title';
import { Line } from 'components/atoms/Line/Line';
import { SubmitButton } from 'components/atoms/SubmitButton/SubmitButton';
import { formData } from 'data/formData';
import FormField from 'components/molecules/FormField/FormField';
import { PreferencesContext } from 'providers/PreferencesProvider';

const initialFormState = {
  id: '',
  firstName: '',
  lastName: '',
  phone: '',
  industry: '',
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
    setFormValues(initialFormState);
  };

  return (
    <Wrapper>
      <Title>Add preference</Title>
      <Line />
      <FormWrapper onSubmit={handleSubmitPreference}>
        {formData.map(({ id, type, label, isSelect, isCheckbox }) => (
          <FormField
            key={id}
            type={type}
            name={id}
            id={id}
            label={label}
            isSelect={isSelect}
            isCheckbox={isCheckbox}
            value={formValues[id]}
            onChange={handleInputChange}
            checked={formValues[id]}
          />
        ))}
        <SubmitButton>Submit</SubmitButton>
      </FormWrapper>
    </Wrapper>
  );
};

export default AddPreference;
