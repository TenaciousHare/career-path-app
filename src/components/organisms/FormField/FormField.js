import React from 'react';
import { FormWrapper } from './FormField.styles';
import { Title } from 'components/atoms/Title/Title';
import { Line } from 'components/atoms/Line/Line';
import { InputsWrapper, StyledInput } from 'components/atoms/Input/Input';
import { CheckboxWrapper } from 'components/atoms/Checkbox/Checkbox';
import { StyledLabel } from 'components/atoms/Label/Label';
import { SubmitButton } from 'components/atoms/Button/Button';

import { inputsData } from 'data/inputsData';

import FormFieldItem from 'components/molecules/FormFieldItem/FormFieldItem';

const FormField = (props) => {
  return (
    <FormWrapper>
      <Title>Career path form</Title>
      <Line />
      <InputsWrapper>
        {/* {inputsData.map((inputData) => (
          <FormFieldItem key={inputData.id} inputData={inputData} />
        ))} */}
        <FormFieldItem htmlFor="firstName" type="text" name="firstName" id="firstName" text="First name" />
        <FormFieldItem htmlFor="lastName" type="text" name="lastName" id="lastName" text="Last name" />
        <FormFieldItem htmlFor="phone" type="tel" name="phone" id="phone" text="Phone number" />

        <StyledLabel htmlFor="industry-select">Industry</StyledLabel>
        <StyledInput as="select" name="industry" id="industry-select">
          <option value="">Choose industry</option>
          <option value="industry-1">Industry 1</option>
          <option value="industry-2">Industry 2</option>
          <option value="industry-3">Industry 3</option>
          <option value="industry-4">Industry 4</option>
        </StyledInput>

        <CheckboxWrapper>
          <input type="checkbox" name="confirmation" id="confirmation" />
          <StyledLabel htmlFor="confirmation">I agree to the Terms and Conditions</StyledLabel>
        </CheckboxWrapper>

        <SubmitButton>Submit</SubmitButton>
      </InputsWrapper>
    </FormWrapper>
  );
};

export default FormField;
