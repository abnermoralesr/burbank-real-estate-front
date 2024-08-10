import './profileUpdate.scss';
import { useContext, useState } from 'react';
import { AuthContext } from '#context/AuthContext';
import { useNavigate } from 'react-router-dom';
import apiRequest from '#services/apiRequest';
import UploadImage from '#components/uploadImage/uploadImage';

function ProfileUpdate() {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const { updateUser, currentUser } = useContext(AuthContext);
    const [avatar, setAvatar] = useState([]);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);

        formProps.avatar = avatar[0];

        try {
            const res = await apiRequest.put(`user/${currentUser.id}`, formProps);

            if (res.data.id === currentUser.id) {
                updateUser(res.data);
            }

            setSuccess("Perfil actualizado");
            navigate("/perfil")
        } catch (error) {
            console.log(error);
            setError(error.response.data.message);
        }
    }

    return (
        <div className="profileUpdate">
            <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <h1>Actualizar Perfil</h1>
                    <div className="item">
                        <label htmlFor="username">Usuario</label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            defaultValue={currentUser.username}
                        />
                    </div>
                    <div className="item">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            defaultValue={currentUser.email}
                        />
                    </div>
                    <div className="item">
                        <label htmlFor="password">Password</label>
                        <input id="password" name="password" type="password" />
                    </div>
                    <button>Actualizar</button>
                    {error && <span className='error'>{error}</span>}
                    {success && <span className='success'>{success}</span>}
                </form>
            </div>
            <div className="sideContainer">
                <img src={avatar[0] || currentUser.avatar || "/noavatar.jpeg"} alt="" className="avatar" />
                <UploadImage bare={true} setState={setAvatar}></UploadImage>
            </div>
        </div>
    );
}

export default ProfileUpdate;