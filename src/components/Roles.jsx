import React, { useEffect, useState } from 'react';

const Roles = () => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    fetch('/api/get-roles')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setRoles(data.roles))
      .catch(error => console.error('Error fetching roles:', error));
  }, []);

  return (
    <div>
      <h2>Roles</h2>
      <ul>
        {roles.map((role, index) => (
          <li key={index}>{role}</li>
        ))}
      </ul>
    </div>
  );
};

export default Roles;
