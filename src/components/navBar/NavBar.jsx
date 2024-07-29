import { useState } from "react";
import { userData } from '../../lib/dummy'
import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
    const [open, setOpen] = useState(false);
    const user = false;

    return(        
        <nav id="navbar">
            <div className="left">
                <a href="/" className="logo">
                    <img src="/logo.png" alt="Burbank Real Estate" />
                    <span>Burbank Real Estate</span>
                </a>
                <a href="/">Home</a>
                <a href="/">Quienes Somos</a>
                <a href="/">Contacto</a>
                <a href="/">Agentes</a>
            </div>
            <div className="right">
                {user ? (
                    <div className="user">
                        <img src={userData.img} alt="" />
                        <span>{userData.name}</span>
                        <Link className="profile" to="/profile">
                            <div className="notification">3</div>
                            Perfil
                        </Link>
                    </div>
                ) : (
                    <>
                        <a href="/" className="sign">Login</a>
                    </>
                )}
                <div className="menuIcon">
                    <img src="/menu.png" alt="menu"onClick={()=>setOpen(prev => !prev)} />
                </div>
                <div className={open ? "menu active" : "menu"}>
                    <a href="/">Home</a>
                    <a href="/">Quienes Somos</a>
                    <a href="/">Contacto</a>
                    <a href="/">Agentes</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;