import React from 'react';
import PropTypes from 'prop-types';
import { StyledLabel } from 'components/atoms/Label/Label';
import { StyledInput } from 'components/atoms/Input/Input';
import { CheckboxWrapper, StyledCheckbox } from 'components/atoms/Checkbox/Checkbox';
import { selectOptions } from 'data/selectOptions';
const FormField = ({ type, name, id, label, isSelect, isCheckbox }) => {
  return (
    <>
      {isSelect === true ? (
        <>
          <StyledLabel htmlFor={id}>{label}</StyledLabel>
          <StyledInput as="select" name={name} id={id}>
            {selectOptions.map(({ text, value }) => (
              <option key={text} value={value}>
                {text}
              </option>
            ))}
          </StyledInput>
        </>
      ) : isCheckbox ? (
        <CheckboxWrapper>
          <StyledCheckbox type={type} name={name} id={id} />
          <StyledLabel htmlFor={id}>{label}</StyledLabel>
        </CheckboxWrapper>
      ) : (
        <>
          <StyledLabel htmlFor={id}>{label}</StyledLabel>
          <StyledInput type={type} name={name} id={id} />
        </>
      )}
    </>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  isSelect: PropTypes.bool,
  isCheckbox: PropTypes.bool,
};

export default FormField;
