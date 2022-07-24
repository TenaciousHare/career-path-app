import React, { useContext } from 'react';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import { FormWrapper } from './AddPreference.styles';
import { Title } from 'components/atoms/Title/Title';
import { SubmitButton } from 'components/atoms/SubmitButton/SubmitButton';
import FormField from 'components/molecules/FormField/FormField';
import SelectField from 'components/molecules/SelectField/SelectField';
import TextAreaField from 'components/molecules/TextAreaField/TextAreaField';
import CheckboxField from 'components/molecules/CheckboxField/CheckboxField';
import { PreferencesContext } from 'providers/PreferencesProvider';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AddPreferenceSchema } from 'validationSchemas/AddPreferenceSchema';
import { yupResolver } from '@hookform/resolvers/yup';

const initialFormState = {
  id: '',
  firstName: '',
  lastName: '',
  phone: '',
  path: '',
  reason: '',
  confirmation: false,
};

const AddPreference = () => {
  const { handleAddPreference } = useContext(PreferencesContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: initialFormState, resolver: yupResolver(AddPreferenceSchema) });

  const onSubmit = (data) => {
    handleAddPreference(data);
    reset({ ...initialFormState });
    return navigate('/show-preferences');
  };

  return (
    <ViewWrapper>
      <Title>Add preference</Title>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <FormField type="text" name="firstName" id="firstName" label="First name" errors={errors} {...register('firstName')} />

        <FormField type="text" name="lastName" id="lastName" label="Last name" errors={errors} {...register('lastName')} />

        <FormField type="tel" name="phone" id="phone" label="Phone" errors={errors} {...register('phone')} />

        <SelectField name="path" id="path" label="Career path" errors={errors} {...register('path')} />
        {watch('path') === 'Career path 4' ? (
          <>
            <TextAreaField name="reason" id="reason" label="Reason for choosing this career path" errors={errors} {...register('reason')} />
          </>
        ) : null}

        <CheckboxField
          name="confirmation"
          type="checkbox"
          id="confirmation"
          label="I agree to the Terms and Conditions"
          errors={errors}
          {...register('confirmation')}
        />

        <SubmitButton type="submit">Submit</SubmitButton>
      </FormWrapper>
    </ViewWrapper>
  );
};

export default AddPreference;
