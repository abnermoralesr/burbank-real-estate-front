import './client.scss'
import Navbar from '../../components/navBar/NavBar';
import {Outlet} from "react-router-dom";

function Client() {
  return (
    <div className="client">
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="content">
        <Outlet/>
      </div>
    </div>
  )
}

export default Client;