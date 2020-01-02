import React from 'react';

import LoginForm from '../components/LoginForm';

interface LoginExperienceProps {
  onSubmitLoginForm: (arg0: { username: string, password: string }) => void;
  isLoginFormDisabled: boolean;
  didLoginFail: boolean;
}

export default function LoginExperience({ onSubmitLoginForm, isLoginFormDisabled, didLoginFail }: LoginExperienceProps) {
  return (
    <>
      <LoginForm onSubmit={onSubmitLoginForm} isDisabled={isLoginFormDisabled} />
      {didLoginFail ? 'Nope, try again' : null}
    </>
  );
}
