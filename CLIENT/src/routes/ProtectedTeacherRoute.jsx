import React, { useEffect } from 'react'
import jwtDecode from "jwt-decode";
import {Navigate, useNavigate,Outlet,useLocation,Redirect,Route} from 'react-router-dom'
export default function ProtectedteacherRoute(props) {
  // fetch token from local storage,,not set yet
  const token = localStorage.getItem("token")

  const navigate = useNavigate()
  // function to return to previous route
  function PresentPage (){
    navigate(-1)
    
  }

  if(!token) return <Navigate  to='/' />

  useEffect(()=>{
    if(token && jwtDecode(token).role==teacher){
      PresentPage()
    }
  },[token && jwtDecode(token).role==teacher])

  const decodedData = jwtDecode(token);


  if (decodedData.role =="teacher") {
    return <Outlet {...props} />;
  }
 else if(decodedData.role =="teacher"){
   PresentPage()
  }


}
