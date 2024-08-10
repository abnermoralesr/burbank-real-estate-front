import { useContext, useState } from "react";
import { userData } from '../../lib/dummy'
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
    const [open, setOpen] = useState(false);
    const { currentUser } = useContext(AuthContext);

    return(        
        <nav id="custom-navbar">
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
                {currentUser ? (
                    <div className="user">
                        <img src={currentUser.avatar || "/noavatar.jpeg"} alt="" />
                        <span>{currentUser.username}</span>
                        <Link className="profile" to="/perfil">
                            <div className="notification">3</div>
                            Perfil
                        </Link>
                    </div>
                ) : (
                    <>
                        <Link to="/login" className="sign">Login</Link>
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