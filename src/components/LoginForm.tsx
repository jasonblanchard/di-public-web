import React from 'react';
import { useForm, useField } from 'react-final-form-hooks'
import styled from '@emotion/styled';

import noop from '../utils/noop';

const Label = styled.label`
  margin-right: 10px;
`;

interface FormValues {
  username: string;
  password: string;
}

interface LoginForm {
  onSubmit: (values: FormValues) => void;
  isDisabled: boolean;
}

interface FormValidation {
  username?: string;
  password?: string;
}

function validate({ username, password }: FormValues) {
  const result: FormValidation = {};

  if (!username) result.username = 'Cannot be empty';
  if (!password) result.password = 'Cannot be empty';

  return result;
}

export default function LoginForm({ onSubmit, isDisabled }: LoginForm) {
  const { form, pristine, handleSubmit, dirty, invalid } = useForm({
    onSubmit: onSubmit || noop,
    validate
  });

  const usernameField = useField('username', form);
  const passwordField = useField('password', form);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Label htmlFor="username">Username:</Label>
        <input
          id="username"
          name={usernameField.input.name}
          value={usernameField.input.value}
          onBlur={usernameField.input.onBlur}
          onFocus={usernameField.input.onFocus}
          onChange={usernameField.input.onChange}
        />
      </div>
      <div>
        <Label htmlFor="password">Password:</Label>
        <input
          type="password"
          id="password"
          name={passwordField.input.name}
          value={passwordField.input.value}
          onBlur={passwordField.input.onBlur}
          onFocus={passwordField.input.onFocus}
          onChange={passwordField.input.onChange}
        />
      </div>
      <button type="submit" disabled={isDisabled || !dirty || pristine || invalid}>login</button>
    </form>
  )
}
