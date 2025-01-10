import React, { useState } from 'react';
import "./AdminRegister.css";
import axios from "axios";

function AdminRegister() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
     const data = async(e) => {
       e.preventDefault();
  
       const post = await axios.post(`http://localhost:1000/api/admin/signup`, {
          username, email, password
       })
      
  
       if(post.status === 201){
          alert(post.data.message)
          window.location.href="/admin/login"
       }else{
          alert(post.message)
       }
  
       return post;
  
     }
  

  return (
    <div id="Admin-register">
       <div id="Admin-register-1">
              <h6 id="Admin-register-1-h6-1">Admin-register</h6>
            <form onSubmit={data} id="Admin-register-form-1">
            <input  id="Admin-register-form-input-1" value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder='Enter Username' required/>
            <input id="Admin-register-form-input-2" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter Email' required/>
            <input id="Admin-register-form-input-3" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter Password' required/>
            <button id="Admin-register-form-1-button" type="submit">
                Submit
            </button>
            <p>(or)</p>
            <p> Already Register? <a href="/login">Login</a> </p>
            </form>
       </div> 
    </div>
  )
}

export default AdminRegister
