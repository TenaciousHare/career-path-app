import React from 'react';
import PropTypes from 'prop-types';
import { StyledLabel } from 'components/atoms/Label/Label';
import { StyledInput } from 'components/atoms/Input/Input';
import { CheckboxWrapper, StyledCheckbox } from 'components/atoms/Checkbox/Checkbox';
import { selectOptions } from 'data/selectOptions';
const FormField = ({ type, name, id, label, isSelect, isCheckbox, value, checked, onChange }) => {
  return (
    <>
      {isSelect === true ? (
        <>
          <StyledLabel htmlFor={id}>{label}</StyledLabel>
          <StyledInput as="select" name={name} id={id} onChange={onChange} value={value}>
            {selectOptions.map(({ text, value }) => (
              <option key={text} value={value}>
                {text}
              </option>
            ))}
          </StyledInput>
        </>
      ) : isCheckbox ? (
        <CheckboxWrapper>
          <StyledCheckbox type={type} name={name} id={id} onChange={onChange} value={value} checked={checked} />
          <StyledLabel htmlFor={id}>{label}</StyledLabel>
        </CheckboxWrapper>
      ) : (
        <>
          <StyledLabel htmlFor={id}>{label}</StyledLabel>
          <StyledInput type={type} name={name} id={id} onChange={onChange} value={value} />
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
