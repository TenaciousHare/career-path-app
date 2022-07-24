import React from 'react';
import PropTypes from 'prop-types';
import { StyledLabel } from 'components/atoms/Label/Label';
import { StyledInput } from 'components/atoms/Input/Input';
import { selectOptions } from 'data/selectOptions';

const SelectField = React.forwardRef(({ name, id, label, errors, ...props }, ref) => {
  return (
    <>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput as="select" name={name} id={id} data-testid={label} {...props} ref={ref}>
        {selectOptions.map(({ text, value }) => (
          <option key={text} value={value}>
            {text}
          </option>
        ))}
      </StyledInput>
      <p>{errors[id]?.message}</p>
    </>
  );
});

SelectField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default SelectField;
