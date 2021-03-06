import React from 'react';
import PropTypes from 'prop-types';
import { StyledLabel } from 'components/atoms/Label/Label';
import { StyledInput } from 'components/atoms/Input/Input';

const FormField = React.forwardRef(({ type, name, id, label, errors, ...props }, ref) => {
  return (
    <>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput type={type} name={name} id={id} {...props} ref={ref} data-testid={label} />
      <p>{errors[id]?.message}</p>
    </>
  );
});

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FormField;
