import React, { useEffect } from 'react';
import { useNavigate, Route } from 'react-router-dom';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      // Redirect to the login page if the token is not present
      navigate('/login');
    }
  }, [navigate]);

  return <Route {...rest} element={localStorage.getItem('token') ? <Component /> : null} />;
};

export default PrivateRoute;
