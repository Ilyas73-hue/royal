import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function AdminScreen({ component: Component, ...rest }) {
  return (
    <Route
    {...rest}
    render={
      (props) => 
      localStorage.getItem("adminId") ? 
      (<Component {...props} />)
      :
      (<Redirect to="/admin/login" />)
    }
  />
  )
}

export default AdminScreen
