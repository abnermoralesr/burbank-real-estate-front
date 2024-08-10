import { useContext, useState } from 'react';
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from '#services/apiRequest';
import { AuthContext } from '#context/AuthContext';

function Login() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { updateUser } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData(e.target);
        const username = formData.get("username");
        const password = formData.get("password");
        
        try {
          const res = await apiRequest.post("auth/login", {
            email: username,
            username,
            password
          });

          updateUser(res.data);
          navigate("/");
        } catch (error) {
          console.log(error);
          setError(error.response.data.message);
        } finally {
          setIsLoading(false);
        }
  };
  
  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Iniciar Sesión</h1>
          <input name="username" type="text" placeholder="Usuario" />
          <input name="password" type="password" placeholder="Contraseña" />
          <button disabled={ isLoading}>Login</button>
          <img src="/loader.svg" alt="logo" className={"loader " + (isLoading ? "visible" : "hidden")} />
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

export default Login;