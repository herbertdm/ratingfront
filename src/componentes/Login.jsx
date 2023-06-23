import '../estilos/Login.css';

export function Login(){
    return(
        <div className="fondo">
            <div className="login">
                <h2>Iniciar Sesión</h2>
                <form>
                    <input type="username" placeholder="Login"></input>
                    <input type="password" placeholder="Password"></input><br />
                    <label><input type="checkbox"></input> Recuerdame</label>
                    <label className="cambio-color"><a>¿Olvidaste tu contraseña?</a></label><br />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}