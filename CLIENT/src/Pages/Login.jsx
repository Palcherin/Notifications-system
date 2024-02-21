import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/login', { username, password });

      const data = response.data;
      console.log('Token:', data.token);
      // Set the token in the request headers
    axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;

      // Handle success, e.g., redirect to another page
      navigate('/chatroom')

    
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-200">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">User Login</h2>
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
        <button onClick={handleLogin} className="bg-pink-900 w-full text-white py-2 px-4 rounded">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
