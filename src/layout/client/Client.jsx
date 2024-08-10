import './client.scss'
import Navbar from '../../components/navBar/NavBar';
import {Navigate, Outlet} from "react-router-dom";
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';

function Client() {
  return (
    <div className="client">
      <div className="custom-navbar-container">
        <Navbar/>
      </div>
      <div className="content">
        <Outlet/>
      </div>
    </div>
  )
}

function RequireAuth() {
  const { currentUser } = useContext(AuthContext);

  return !currentUser ?
    (
      <Navigate to="/login" replace={true} />
    ) : (
      <div className="client">
      <div className="custom-navbar">
        <Navbar/>
      </div>
      <div className="content">
        <Outlet/>
      </div>
      </div>
    )
}

export {Client, RequireAuth};