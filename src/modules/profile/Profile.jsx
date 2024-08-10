import './profile.scss';
import { userData } from '#lib/dummy'
import UserPropertyList from '#components/userPropertyList/UserPropertyList';
import Chat from '#components/chat/Chat';
import apiRequest from '#services/apiRequest';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '#context/AuthContext';

function Profile() {
  const { updateUser, currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await apiRequest.post("auth/logout");
      updateUser(null);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    currentUser && (
      <div className='profile'>
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>Informacion Usuario</h1>
              <Link to="/perfil/actualizar">
                <button>Actualizar Perfil</button>
              </Link>
          </div>
          <div className="info">
            <span>
              Avatar:
                <img src={currentUser.avatar || "/noavatar.jpeg"} alt='' />
                
            </span>
            <span>
              Usuario:
              <b>{currentUser.username}</b>
            </span>
            <span>
              E-mail:
              <b>{currentUser.email}</b>
            </span>
            <button  onClick={handleLogout}>Salir</button>
          </div>
          <div className="title">
            <h1>Mis Propiedades</h1>
            <button>Crear Nueva Propiedad</button>
          </div>
          <UserPropertyList/>
          <div className="title">
            <h1>Propiedades Favoritas</h1>
          </div>
          <UserPropertyList/>
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat/>
        </div>
      </div>
    </div>
  )
)
}

export default Profile