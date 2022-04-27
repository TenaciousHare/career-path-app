import React from 'react';
import PropTypes from 'prop-types';
import { StyledLabel } from 'components/atoms/Label/Label';
import { StyledInput } from 'components/atoms/Input/Input';
import { CheckboxWrapper, StyledCheckbox } from 'components/atoms/Checkbox/Checkbox';
import { selectOptions } from 'data/selectOptions';

const FormField = React.forwardRef(({ type, name, id, label, isSelect, isCheckbox, isTextArea, ...props }, ref) => {
  return (
    <>
      {isSelect ? (
        <>
          <StyledLabel htmlFor={id}>{label}</StyledLabel>
          <StyledInput as="select" name={name} id={id} data-testid={label} {...props} ref={ref}>
            {selectOptions.map(({ text, value }) => (
              <option key={text} value={value}>
                {text}
              </option>
            ))}
          </StyledInput>
        </>
      ) : isTextArea ? (
        <>
          <StyledLabel htmlFor={id}>{label}</StyledLabel>
          <StyledInput as="textarea" name={name} id={id} {...props} ref={ref} data-testid={label} />
        </>
      ) : isCheckbox ? (
        <CheckboxWrapper>
          <StyledCheckbox type={type} name={name} id={id} {...props} ref={ref} data-testid={label} />
          <StyledLabel htmlFor={id}>{label}</StyledLabel>
        </CheckboxWrapper>
      ) : (
        <>
          <StyledLabel htmlFor={id}>{label}</StyledLabel>
          <StyledInput type={type} name={name} id={id} {...props} ref={ref} data-testid={label} />
        </>
      )}
    </>
  );
});

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  isSelect: PropTypes.bool,
  isCheckbox: PropTypes.bool,
  isTextArea: PropTypes.bool,
};

export default FormField;
