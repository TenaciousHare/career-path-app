import React from 'react';
import PropTypes from 'prop-types';
import { StyledLabel } from 'components/atoms/Label/Label';
import { CheckboxWrapper, StyledCheckbox } from 'components/atoms/Checkbox/Checkbox';

const CheckboxField = React.forwardRef(({ type, name, id, label, errors, ...props }, ref) => {
  return (
    <>
      <CheckboxWrapper>
        <StyledCheckbox type={type} name={name} id={id} {...props} ref={ref} data-testid={label} />
        <StyledLabel htmlFor={id}>{label}</StyledLabel>
      </CheckboxWrapper>
      <p>{errors[id]?.message}</p>
    </>
  );
});

CheckboxField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default CheckboxField;
