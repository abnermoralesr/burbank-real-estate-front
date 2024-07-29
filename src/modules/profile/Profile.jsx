import './profile.scss';
import { userData } from '../../lib/dummy'
import UserPropertyList from '../../components/userPropertyList/UserPropertyList';
import Chat from '../../components/chat/Chat';

function Profile() {
  return (
    <div className='profile'>
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>Informacion Usuario</h1>
            <button>Actualizar Perfil</button>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img src={userData.img} alt=''/>
            </span>
            <span>
              Usuario:
              <b>{userData.name}</b>
            </span>
            <span>
              E-mail:
              <b>{userData.email}</b>
            </span>
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
}

export default Profile