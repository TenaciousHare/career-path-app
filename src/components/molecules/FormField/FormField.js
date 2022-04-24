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
          <StyledInput as="select" name={name} id={id} onChange={onChange} value={value} data-testid={label}>
            {selectOptions.map(({ text, value }) => (
              <option key={text} value={value}>
                {text}
              </option>
            ))}
          </StyledInput>
          {value === 'industry-4' ? (
            <>
              <StyledLabel htmlFor="reason">Reason for choosing this career path</StyledLabel>
              <StyledInput as="textarea" name="reason" id="reason" onChange={onChange} data-testid="Reason for choosing this career path" />
            </>
          ) : null}
        </>
      ) : isCheckbox ? (
        <CheckboxWrapper>
          <StyledCheckbox type={type} name={name} id={id} onChange={onChange} value={value} checked={checked} data-testid={label} />
          <StyledLabel htmlFor={id}>{label}</StyledLabel>
        </CheckboxWrapper>
      ) : (
        <>
          <StyledLabel htmlFor={id}>{label}</StyledLabel>
          <StyledInput type={type} name={name} id={id} onChange={onChange} value={value} data-testid={label} />
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
