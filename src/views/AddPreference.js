import React, { useContext } from 'react';
import { Wrapper, FormWrapper } from './AddPreference.styles';
import { Title } from 'components/atoms/Title/Title';
import { Line } from 'components/atoms/Line/Line';
import { SubmitButton } from 'components/atoms/SubmitButton/SubmitButton';
import FormField from 'components/molecules/FormField/FormField';
import { PreferencesContext } from 'providers/PreferencesProvider';
import { useForm } from 'react-hook-form';

const initialFormState = {
  id: '',
  firstName: '',
  lastName: '',
  phone: '',
  industry: '',
  reason: '',
  confirmation: false,
};

const AddPreference = () => {
  const { handleAddPreference } = useContext(PreferencesContext);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: initialFormState });

  const onSubmit = (data) => {
    handleAddPreference(data);
    console.log(data);
    reset({ ...initialFormState });
  };

  return (
    <Wrapper>
      <Title>Add preference</Title>
      <Line />
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <FormField type="text" name="firstName" id="firstName" label="First name" {...register('firstName', { required: true, minLength: 3 })} />
        {errors.firstName?.type === 'required' && <p>First name is required</p>}
        {errors.firstName?.type === 'minLength' && <p>First name should contain at least 3 characters </p>}
        <FormField type="text" name="lastName" id="lastName" label="Last name" {...register('lastName', { required: true, minLength: 3 })} />
        {errors.lastName?.type === 'required' && <p>Last name is required</p>}
        {errors.lastName?.type === 'minLength' && <p>Last name should contain at least 3 characters </p>}
        <FormField type="tel" name="phone" id="phone" label="Phone" {...register('phone')} />
        <FormField name="industry" id="industry" label="Industry" {...register('industry', { required: true })} isSelect />
        {errors.industry?.type === 'required' && <p>Choosing industry is required</p>}
        {watch('industry') === 'industry-4' ? (
          <FormField name="reason" id="reason" label="Reason for choosing this career path" {...register('reason', { required: true })} isTextArea />
        ) : null}
        {errors.reason?.type === 'required' && <p>Describing the rationale for this decision is required!</p>}
        <FormField
          name="confirmation"
          type="checkbox"
          id="confirmation"
          label="I agree to the Terms and Conditions"
          {...register('confirmation', { required: true })}
          isCheckbox
        />
        {errors.confirmation?.type === 'required' && <p>You must accept the Terms and Conditions</p>}
        <SubmitButton type="submit">Submit</SubmitButton>
      </FormWrapper>
    </Wrapper>
  );
};

export default AddPreference;
