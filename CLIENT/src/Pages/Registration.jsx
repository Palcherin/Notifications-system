import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom'

const Registration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate= useNavigate()

  const handleRegister = async () => {
    console.log('clicked')
    
    try {
      console.log("start posting")
      const response = await axios.post('http://localhost:3000/api/register', { username, password, role });

      const data = response.data;
      console.log('Token:', data.token);
      localStorage.setItem("token",data.token)
    

      // Handle success, 
      navigate('/login')
      
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-200">
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
        <button onClick={handleRegister} className="bg-pink-900 w-full text-white py-2 px-4 rounded">
          Register
        </button>
      </div>
    </div>
  );
};

export default Registration;
