import React, { useState } from 'react';
import "./Login.css";
import axios from "axios";


function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

   const data = async(e) => {
     e.preventDefault();

     const post = await axios.post(`http://localhost:1000/api/signin`, {
        email, password
     })
     
     if(post.status === 201){
        alert("Login Successfully");
         localStorage.setItem('usertoken', post.data.data);
         localStorage.setItem('userId', post.data.user._id);
        window.location.href="/"
     }else{
        alert(post.message)
     }



     return post;

   }


  return (
    <div id="Login">
       <div id="Login-1">
              <h6 id="Login-1-h6-1">Login</h6>
            <form onSubmit={data} id="Login-form-1">
            <input id="Login-form-input-2" value={email} onChange={(e) => setEmail(e.target.value)}  type="email" placeholder='Enter Email' />
            <input id="Login-form-input-3" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter Password' />
            <button id="Login-form-1-button" type="submit">
                Submit
            </button>
            <p>(or)</p>
            <p> Don't Register? <a href="/register">Register</a> </p>
            </form>
       </div> 
    </div>
  )
}

export default Login;
