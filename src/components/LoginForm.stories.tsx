import React from 'react';

import LoginForm from './LoginForm';

export default { title: 'LoginForm' };

function onSubmit(fields: any) {
  console.log(fields);
}

export const base = () => {
  return <LoginForm onSubmit={onSubmit} isDisabled={false} />
}
