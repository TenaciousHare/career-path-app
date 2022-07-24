import * as yup from 'yup';

export const AddPreferenceSchema = yup
  .object({
    firstName: yup.string().required('First name is a required field').min(3, 'First name should contain at least 3 characters'),
    lastName: yup.string().required('Last name is a required field').min(3, 'Last name should contain at least 3 characters'),
    path: yup.string().required('Please select a path'),
    reason: yup.string().required('Please justify this decision'),
    confirmation: yup.bool().default(false).oneOf([true], 'You must accept the terms and conditions'),
  })
  .required();
