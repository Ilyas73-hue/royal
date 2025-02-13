import React, { useState } from 'react';
import "./AdminRegister.css";
import axios from "axios";

function AdminRegister() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const url = "https://royal-backend-1.onrender.com";
  
     const data = async(e) => {
       e.preventDefault();
  
       const post = await axios.post(url+`/api/admin/signup`, {
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
            <p id="Admin-register-1-p-a-href"> Already Register? <a id="Admin-register-1-p-a-href-1" href="/admin/login">Login</a> </p>
            </form>
       </div> 
    </div>
  )
}

export default AdminRegister
