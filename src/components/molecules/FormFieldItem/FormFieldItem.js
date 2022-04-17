import React from 'react';
import { StyledLabel } from 'components/atoms/Label/Label';
import { StyledInput } from 'components/atoms/Input/Input';

const FormFieldItem = ({ type, name, id, htmlFor, text, isSelect }) => {
  return (
    <>
      <StyledLabel htmlFor={htmlFor}>{text}</StyledLabel>
      <StyledInput type={type} name={name} id={id} />
    </>
  );
};

export default FormFieldItem;
