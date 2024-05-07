import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home.jsx';
import { Notification } from './Pages/Notification.jsx';
import Location from './Pages/Location.jsx';
import { Chatroom } from './Pages/Chatroom.jsx';
import { Sidebar } from './Componets/Sidebar.jsx';
import { Wellfare } from './Pages/Wellfare.jsx';
import { Footer } from './Componets/Footer.jsx';
import { Contact } from "./Pages/Contact.jsx";
import Navbar from "./Componets/Navbar/Navbar.jsx";
import Account from "./Pages/Account.jsx";
import Registration from "./Pages/Registration.jsx";
import RegisterAndLogin from "./Componets/Auth/Login.jsx";
import Login from "./Pages/Login.jsx";
import ProtectedTeacherRoute from "./routes/ProtectedTeacherRoute.jsx";
import PrivateRoute from './routes/PrivateRoute.jsx';
import Commute from "./Componets/Commute.jsx";


function App() {
  console.log('page render');
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route
            path="/notification"
            element={<ProtectedTeacherRoute><Notification /></ProtectedTeacherRoute>}
          /> */}
          <Route element={<ProtectedTeacherRoute/> }>
          <Route path="/notification" element={<Notification/> }/>
          </Route>
         
          <Route
            path="/location"
            element={<Location />}
          />
          <Route
            path="/chatroom"
            element={<Chatroom />}
          />
          <Route path="/commute" element={<Commute /> }/>
          <Route
            path="/wellfare"
            element={<Wellfare />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="/registration"
            element={<Registration />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
          path='/'
          element={ <Registration/>}
          />
          
          <Route
            path="/home"
            element={<Home />}
          />
      
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
