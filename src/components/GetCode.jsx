import React, { useState } from 'react';

const GetCode = ({ onCodeReceived }) => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/get-code?email=${email}`);
      let code = await response.text();
      code = code.replace(/"/g, ''); // Убираем кавычки
      setCode(code);
      onCodeReceived(email, code);
    } catch (error) {
      console.error('Error fetching code:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={handleChange} required />
        <button type="submit">Get Code</button>
      </form>
      {code && <p>Code: {code}</p>}
    </div>
  );
};

export default GetCode;
