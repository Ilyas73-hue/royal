import React, { useState } from 'react';
import "./Register.css";
import axios from "axios";

function Register() {

  const url = "https://royal-backend-1.onrender.com";

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

   const data = async(e) => {
     e.preventDefault();

     const post = await axios.post(url+`/api/signup`, {
        username, email, password
     })
     .then((data) => console.log(data))
     .catch((error) => console.log(error))

     if(post.status === 201){
        alert("Register Successfully")
        window.location.href="/login"
     }else{
        alert(post.message)
     }

     return post;

   }

  return (
    <div id="register">
      <h6 id="register-h6-1">Welcome, <span id="register-h6-1-span">Royal Mysore Dosa</span></h6>
       <div id="register-1">
              <h6 id="register-1-h6-1">Register</h6>
            <form onSubmit={data} id="register-form-1">
            <input  id="register-form-input-1" value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder='Enter Username' required/>
            <input id="register-form-input-2" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter Email' required/>
            <input id="register-form-input-3" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter Password' required/>
            <button id="register-form-1-button" type="submit">
                Submit
            </button>
            <p>(or)</p>
            <p id="register-form-1-p-1"> Already Register? <a id="register-form-1-p-1-a-href" href="/login">Login</a> </p>
            </form>
       </div> 
    </div>
  )
}

export default Register;
