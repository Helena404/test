import React from 'react';

const EncodeToken = ({ email, token }) => {
  return (
    <div>
      <h3>Encoded Token</h3>
      <p>Email: {email}</p>
      <p>Token: {token}</p>
    </div>
  );
};

export default EncodeToken;
