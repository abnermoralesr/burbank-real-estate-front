import './register.scss';

function Register() {
    return (
        <div className="register">
            <div className="formContainer">
                <form>
                    <h1>Crear Usuario</h1>
                    <input name="username" type="text" placeholder="Usuario" />
                    <input name="email" type="text" placeholder="E-mail" />
                    <input name="password" type="password" placeholder="Password" />
                    <button >Crear</button>
                </form>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    );
}

export default Register;