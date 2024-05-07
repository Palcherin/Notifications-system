import React, { useEffect } from 'react';
import {jwtDecode} from "jwt-decode";
import { useNavigate, Outlet } from 'react-router-dom';

export default function ProtectedTeacherRoute(props) {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login');
    } else {
      const decodedData = jwtDecode(token);
      if (decodedData.role === "teacher") {
        navigate("/notification");
      } else {
        navigate('/home');
      }
    }
  }, [token]);

  return <Outlet {...props} />;
}
