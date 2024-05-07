import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Registration = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
   
    try {
      const response = await axios.post('http://localhost:3000/api/register', { username, password,role});
      const data = response.data;
      console.log('Token:', data.token);
      localStorage.setItem("token", data.token);
      navigate('/login'); 
    } catch (error) {
      console.error('Registration failed:', error);
    }
  
  };

  return (
    <div className='pl-[30%] w-full bg-slate-50'>
      
      <form onSubmit={handleRegister} className="min-h-screen flex items-center justify-center bg-slate-50 nw-full ">
        <div className="bg-white p-8 rounded shadow-2xl w-96">
          <h2 className="text-2xl font-bold mb-4">User Registration</h2>
          <label className="block mb-4">
            Username:
           
            <input
              type="text"
              name='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border rounded mt-1"
              
            />
             
          </label>
          <label className="block mb-4">
            Password:
         
            <input
            name='passowrd'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded mt-1"
              
            />
          </label>
          {/* <label className="block mb-4">
            Confirm Password:
            {errors.confirmPassword && <small>{errors.confirmPassword}</small>}
            <input
            name='passowrd'
              type="confirmpassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded mt-1"
              onBlur={handleBlur}
              onSubmit={handleSubmit}
            />
          </label> */}
          <label className="block mb-4">
            Role:
            <select value={role} onChange={(e) => setRole(e.target.value)} className="w-full p-2 border rounded mt-1">
              <option value="teacher">Teacher</option>
              <option value="parent">Parent</option>
            </select>
          </label>
          <button type='submit' className="bg-pink-900 w-full hover:bg-pink-600 text-white py-2 px-4 rounded">
            Register
          </button>
          <div className='flex justify-between mt-3'>
            <h1>Have an account?</h1>
            <button onClick={() => navigate('/login')} className='text-blue-700 underline'>Login</button>
          </div>
        </div>
      </form>
      
    </div>
  );
};

export default Registration;
