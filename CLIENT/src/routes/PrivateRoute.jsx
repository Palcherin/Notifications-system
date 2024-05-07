import React, { useEffect } from 'react';
import { useNavigate, Route, Outlet } from 'react-router-dom';
import { Home } from '../Pages/Home';

const PrivateRoute = ({ element: Component, ...rest }, props) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      // Redirect to the login page if the token is not present
      navigate('/login');
    }
  }, [navigate]);

  return <Route {...rest} element={localStorage.getItem('token') ? <Component {...props} /> : null} />;
};

export default PrivateRoute;
