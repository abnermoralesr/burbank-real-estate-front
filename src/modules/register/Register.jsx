import { useState } from 'react';
import baseUrl from '../../../../api/core/baseUrl';
import './register.scss';
import axios from "axios";

function Register() {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const username = formData.get("username");
        const email = formData.get("email");
        const password = formData.get("password");
        const type = parseInt(formData.get("type"));
        const branchId = formData.get("branch");
        
        try {
            const res = await axios.post(baseUrl + "auth/register", {
                username,
                email,
                password,
                type,
                branchId
            });

            console.log(res.data);
            setSuccess(res.data.message);
        } catch (error) {
            console.log(error);
            setError(error.response.data.message);
        }
    };

    return (
        <div className="register">
            <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <h1>Crear Usuario</h1>
                    <input name="username" type="text" placeholder="Usuario" />
                    <input name="email" type="text" placeholder="E-mail" />
                    <input name="password" type="password" placeholder="Password" />
                    <select name="type" id="type" placeholder="Tipo de Usuario">
                        <option value="">Tipo de Usuario</option>
                        <option value="0">Admin</option>
                        <option value="1">Manager</option>
                        <option value="2">Usuario General</option>
                    </select>
                    <select name="branch" id="branch" placeholder="Tipo de Usuario">
                        <option value="">Sucursal</option>
                        <option value="1">Matriz</option>
                    </select>
                    <button >Crear</button>
                    {error && <span className='error'>{error}</span>}
                    {success && <span className='success'>{success}</span>}
                </form>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    );
}

export default Register;