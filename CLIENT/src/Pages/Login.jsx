import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
 const navigate=useNavigate()
 

 const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post('http://localhost:3000/api/login', { username, password });
    // Rest of the code remains unchanged
    navigate('/home')
  } catch (error) {
    console.error('Login failed:', error);
    setError('Login failed. Please check your credentials.');
  }
};


  return (
    <form onSubmit={handleLogin} className="min-h-screen flex items-center justify-center bg-slate-50 w-full ">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">User Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>} {/* Display error message if exists */}
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
        <button type="submit" className="bg-pink-900 w-full hover:bg-pink-600 text-white py-2 px-4 rounded">
          Login
        </button>
        <div className='flex justify-between mt-5'>
          <h1>Don't have an account?</h1>
          <a href='/registration' className='underline text-blue-800 bg-slate-300 p-2'>Sign-Up</a>
        </div>
      </div>
    </form>
  );
};

export default Login;
