import React from 'react';
import PropTypes from 'prop-types';
import { StyledLabel } from 'components/atoms/Label/Label';
import { StyledInput } from 'components/atoms/Input/Input';

const TextAreaField = React.forwardRef(({ name, id, label, errors, ...props }, ref) => {
  return (
    <>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput as="textarea" name={name} id={id} {...props} ref={ref} data-testid={label} />
      <p>{errors[id]?.message}</p>
    </>
  );
});

TextAreaField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default TextAreaField;
