import React from "react";
import {BrowserRouter ,Routes, Route} from 'react-router-dom'
import {Home } from './Pages/Home.jsx'
import {Notification} from './Pages/Notification.jsx'
import { Location } from './Pages/Location.jsx';
import { Chatroom } from './Pages/Chatroom.jsx';
import {Sidebar} from './Componets/Sidebar.jsx';
import { Wellfare } from './Pages/Wellfare.jsx';
import { Footer } from './Componets/Footer.jsx';
import { Contact } from "./Pages/Contact.jsx";
import Navbar from "./Componets/Navbar/Navbar.jsx";
import Account from "./Pages/Account.jsx";
import Registration from "./Pages/Registration.jsx";
import Login from "./Pages/Login.jsx";
import PrivateRoutes from "./routes/PrivateRoute.jsx";

function App() {
  console.log('page render')
  return (
    
    <div className="App">
       
      <BrowserRouter>
        <Routes>
        <Route path='/' element={ <Home /> } />
        <Route  element={PrivateRoutes}>
        
          <Route path='/account' element={ <Account/> } />
          <Route path='/notification' element={ <Notification /> } />
          <Route path='/location' element={ <Location /> } />
          <Route path='/chatroom' element={ <Chatroom /> } />
          <Route path='wellfare' element={ <Wellfare /> } />
          <Route path="contact" element={<Contact/> }/> 
          </Route>
        
          
          <Route  path="/registration" element={<Registration />}/>
          <Route path="/login" element={<Login />}/>
          
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
    
  );
}
export default App;
