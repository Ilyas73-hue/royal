import React, { useState } from 'react';
import "./AdminLogin.css";
import axios from "axios";


function AdminLogin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
     const data = async(e) => {
       e.preventDefault();
  
       const post = await axios.post(`http://localhost:1000/api/admin/signin`, {
          email, password
       })
       
       if(post.status === 201){
        localStorage.setItem("token",post.data.data);
        localStorage.setItem("adminId",post.data.admin._id);
          alert(post.data.message)
          window.location.href="/admin/product/post"
       }else{
          alert(post.message)
       }
  
      console.log(post.data.data);
      console.log(post.data.admin._id)
  
       return post;
  
     }

  return (
    <div id="Admin-login">
       <div id="Admin-login-1">
              <h6 id="Admin-login-1-h6-1">Admin Login</h6>
            <form onSubmit={data} id="Admin-login-form-1">
            <input id="Admin-login-form-input-2" value={email} onChange={(e) => setEmail(e.target.value)}  type="email" placeholder='Enter Email' />
            <input id="Admin-login-form-input-3" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter Password' />
            <button id="Admin-login-form-1-button" type="submit">
                Submit
            </button>
            <p>(or)</p>
            <p> Don't Register? <a href="/register">Register</a> </p>
            </form>
       </div> 
    </div>
  )
}

export default AdminLogin;

