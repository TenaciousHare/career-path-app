import React from 'react';
import { Wrapper, FormWrapper } from './Form.styles';
import { Title } from 'components/atoms/Title/Title';
import { Line } from 'components/atoms/Line/Line';
import { SubmitButton } from 'components/atoms/Button/Button';
import { formFieldsData } from 'data/formFieldsData';
import FormField from 'components/molecules/FormField/FormField';

const Form = ({ handleAddPreference, handleInputChange, formValues }) => {
  return (
    <Wrapper>
      <Title>Add preference</Title>
      <Line />
      <FormWrapper onSubmit={handleAddPreference}>
        {formFieldsData.map(({ id, type, label, isSelect, isCheckbox }) => (
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

export default Form;
