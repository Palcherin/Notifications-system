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

function App() {
  console.log('page render')
  return (
    
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={ <Account /> } />
          <Route path='/home' element={ <Home/> } />
          <Route path='/notification' element={ <Notification /> } />
          <Route path='/location' element={ <Location /> } />
          <Route path='/chatroom' element={ <Chatroom /> } />
          <Route path='/wellfare' element={ <Wellfare /> } />
          <Route path="/contact" element={<Contact/> }/>
          
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
