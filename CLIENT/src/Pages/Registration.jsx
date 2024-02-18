import React, { useState } from 'react';
import axios from 'axios';

const Registration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/register', { username, password, role });

      const data = response.data;
      console.log('Token:', data.token);

      // Handle success, e.g., redirect to another page
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-500">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">User Registration</h2>
        <label className="block mb-4">
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded mt-1"
          />
        </label>
        <label className="block mb-4">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded mt-1"
          />
        </label>
        <label className="block mb-4">
          Role:
          <select value={role} onChange={(e) => setRole(e.target.value)} className="w-full p-2 border rounded mt-1">
            <option value="teacher">Teacher</option>
            <option value="parent">Parent</option>
          </select>
        </label>
        <button onClick={handleRegister} className="bg-pink-900 text-white py-2 px-4 rounded">
          Register
        </button>
      </div>
    </div>
  );
};

export default Registration;
