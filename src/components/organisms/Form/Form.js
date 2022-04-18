import React from 'react';
import { FormWrapper } from './Form.styles';
import { Title } from 'components/atoms/Title/Title';
import { Line } from 'components/atoms/Line/Line';
import { InputsWrapper } from 'components/atoms/Input/Input';
import { SubmitButton } from 'components/atoms/Button/Button';
import { formFieldsData } from 'data/formFieldsData';
import FormField from 'components/molecules/FormField/FormField';

const Form = () => {
  return (
    <FormWrapper>
      <Title>Career path form</Title>
      <Line />
      <InputsWrapper>
        {formFieldsData.map(({ id, type, label, isSelect, isCheckbox }) => (
          <FormField key={id} type={type} name={id} id={id} label={label} isSelect={isSelect} isCheckbox={isCheckbox} />
        ))}
        <SubmitButton>Submit</SubmitButton>
      </InputsWrapper>
    </FormWrapper>
  );
};

export default Form;
