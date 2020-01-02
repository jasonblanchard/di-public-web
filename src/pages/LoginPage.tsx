import React from 'react';

import LoginExperience from '../experiences/LoginExperience';
import LoginExperienceConnector from '../experiences/LoginExperienceConnector';

export default function LoginPage() {
  return (
    <div role="main">
      <LoginExperienceConnector>
        {(props) => {
          return <LoginExperience {...props} />
        }}
      </LoginExperienceConnector>
    </div>
  )
}
