import React, { useState } from 'react';

interface LoginExperienceConnectorRenderProps {
  onSubmitLoginForm: (arg0: { username: string, password: string }) => void;
  isLoginFormDisabled: boolean;
  didLoginFail: boolean;
}

interface LoginExperienceConnectorProps {
  children: (arg0: LoginExperienceConnectorRenderProps) => React.ReactElement;
}

export default function LoginExperienceConnector({ children }: LoginExperienceConnectorProps) {
  const [isLoginSubmitting, submitIsLoginSubmitting] = useState(false);
  const [didLoginFail, setDidLoginFail] = useState(false);

  async function handleSubmitLoginForm({ username, password }: { username: string, password: string }) {
    submitIsLoginSubmitting(true);
    setDidLoginFail(false);
    const response = await fetch('/api/authn/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      submitIsLoginSubmitting(false);
      window.location.href= '/workspace/';
      return;
    }

    submitIsLoginSubmitting(false);
    setDidLoginFail(true);
  }

  return children({
    onSubmitLoginForm: handleSubmitLoginForm,
    isLoginFormDisabled: isLoginSubmitting,
    didLoginFail
  })
}
