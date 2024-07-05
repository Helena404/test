import React, { useState } from 'react';
import SignUpForm from './components/SignUpForm';
import EncodeToken from './components/EncodeToken';
import SetStatus from './components/SetStatus';
import Roles from './components/Roles';

const App = () => {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');

  const handleSignUp = (email, token) => {
    setEmail(email);
    setToken(token);
  };

  return (
    <div>
      <h1>API Interaction</h1>
      <SignUpForm onSignUp={handleSignUp} />
      {token && <EncodeToken email={email} token={token} />}
      {token && <SetStatus token={token} />}
      <Roles />
    </div>
  );
};

export default App;
