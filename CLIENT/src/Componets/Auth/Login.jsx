// import React, { useState } from 'react'
// import { FaLock, FaMailBulk, FaUser } from 'react-icons/fa'
// import './Login.css'
// import database from '../../config/firebase';
// import {createUserWithEmailAndPassword} from 'firebase/auth'

// const  Login = () => {
//     const [action, setAction]= useState("Sign-Up");
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
  
//     const handleSubmit = (e, type) => {
//       e.preventDefault();
//       const email = e.target.email.value;
//       const password = e.target.password.value;
//       if (type == "signup") {
//         createUserWithEmailAndPassword(database, email, password)
//           .then((data) => {
//             console.log(data, "authData");
//             history("/home");
//           })
//           .catch((err) => {
//             alert(err.code);
//             setLogin(true);
//           });
//       } else {
//         signInWithEmailAndPassword(database, email, password)
//           .then((data) => {
//             console.log(data, "authData");
//             history("/home");
//           })
//           .catch((err) => {
//             alert(err.code);
//           });
//       }
//     };
//     const handleReset = ()=>{
//       history("/reset");
//     }
//   return (
//     <form onSubmit={(e) => handleSubmit(e, Login ? "signin" : "signup")}>
//     <div className='login-page'>
//       <div className='content'>
//         <h6>Create an Account Or Login in to access all the services</h6>
//         <header>
//             <div className='title'>{action}</div>
//             <div className='underline'></div>
//         </header>
//         <div className="inputs">
//             {action=== "Login"?<div></div> :
//             <div className='input'>
//             <FaUser className='icon'/>
//             <input type='text' placeholder='Name...'/>
//         </div>
//             }
        
//         <div className='input'>
//             <FaMailBulk className='icon'/>
//             <input type='email' placeholder='Email Id...' onChange={(e) => setEmail(e.target.value)}/>
//         </div>
//         <div className='input'>
//             <FaLock className='icon'/>
//             <input type='password' placeholder='password...' onChange={(e) => setPassword(e.target.value)}/>
//         </div>
//         {action==="Sign-Up"? <div></div>:  <div className='forgot-password'>Forgot password? <span> <a>click here</a> </span></div>}
       
//         <div className='submitsection'>
//             <div className={action==="Login"?"submit-btn inactive": "submit-btn"} onClick={()=>{handleSubmit}}  >Sign-Up</div>
//             {/* <div className={action==="Sign-Up"?"submit-btn inactive": "submit-btn"} onClick={()=>{setAction("Login"), {handleAuthentication}}} >Login</div> */}
//         </div>
//         </div>
//       </div>
//     </div>
//     </form>
//   );
// };
  

// export default Login
import React, { useState } from "react";
import database from '../../config/firebase';
import './Login.css'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function RegisterAndLogin() {
  const [login, setLogin] = useState(false);

  const history = useNavigate();

  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (type == "signup") {
      createUserWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/home");
        })
        .catch((err) => {
          alert(err.code);
          setLogin(true);
        });
    } else {
      signInWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/home");
        })
        .catch((err) => {
          alert(err.code);
        });
    }
  };

  const handleReset = ()=>{
    history("/reset");
  }
  return (
    <div className="bg-blue-700 pl-[30%] ">
      {/* Registration and login Screen */}
      <div className="row">
        <div
          className={login == false ? "activeColor" : "pointer"}
          onClick={() => setLogin(false)}
        >
          SignUp
        </div>
        <div
          className={login == true ? "activeColor" : "pointer"}
          onClick={() => setLogin(true)}
        >
          SignIn
        </div>
      </div>
      <h1>{login ? "SignIn" : "SignUp"}</h1>
      <form onSubmit={(e) => handleSubmit(e, login ? "signin" : "signup")}>
        <input name="email" placeholder="Email" />
        <br />
        <input name="password" type="text" placeholder="Password" className="bg-red-400"/>
        <br />
        <p onClick={handleReset}>Forgot Password?</p>
        <br />
        <button className="bg-red-400">{login ? "SignIn" : "SignUp"}</button>
      </form>
    </div>
  );
}
export default RegisterAndLogin;
