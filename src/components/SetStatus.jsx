import React from 'react';

const SetStatus = ({ token }) => {
  const setStatus = async (jsonObject) => {
    try {
      const response = await fetch('/api/set-status', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jsonObject)
      });
      const result = await response.json();
      console.log('Set status response:', result);
      return result;
    } catch (error) {
      console.error('Error setting status:', error);
      throw error;
    }
  };

  const handleSetStatus = async () => {
    const statusJson = {
      token: token,
      status: "increased"
    };
    await setStatus(statusJson);
  };

  if (!token) {
    return null;
  }

  return (
    <div>
      <button onClick={handleSetStatus}>Set Status</button>
    </div>
  );
};

export default SetStatus;
