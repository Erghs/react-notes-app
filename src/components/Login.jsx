import {  useState } from 'react';
import "../style/Login.css"
import { Alert } from "react-bootstrap";
import {Link} from 'react-router-dom';
import Note from './Note';

const Login = () => {
    const [emaillog, setEmaillog] = useState(" ");
    const [passwordlog, setPasswordlog] = useState(" ");

    const [flag, setFlag] = useState(false);

    const [home, setHome] = useState(true);

    function handleLogin(e) {
        e.preventDefault();
        let pass = localStorage.getItem("ppassword").replace(/"/g, "");
        let mail = localStorage.getItem("pemail").replace(/"/g, "");
        if (!emaillog || !passwordlog) {
            setFlag(true);
            console.log("EMPTY");
        } else if (passwordlog !== pass || emaillog !== mail) {
            setFlag(true);
        } else {
            setHome(!home);
            setFlag(false);
        }
    }


    return (
        <>
        {" "}
            {home ? (
                <div className="container">
                    <div className="screen">
                        <div className="screen__content">
                            <form className="login" onSubmit={handleLogin}>
                                <h1>Вход</h1>
                                <div className="login__field">
                                    <input className="login__input"
                                        type='text'
                                        placeholder="Логин"
                                        id="username"
                                        required
                                        onChange={(event) => setEmaillog(event.target.value)}
                                    />
                                </div>
                                <div className="login__field">
                                    <input className="login__input"
                                        type='password'
                                        placeholder="Пароль"
                                        id="password"
                                        required
                                        onChange={(event) => setPasswordlog(event.target.value)}
                                    />
                                </div>
                                <button type="submit" className="button login__submit" >
                                    <span className="button__text">Войти</span>
                                </button>
                                <div className="link__text">
                                    <Link to="/registration">
                                        <span className="link__text"> Регистрация</span>
                                    </Link>
                                </div>
                                {flag && (
                                    <Alert color="primary" variant="warning">
                                        Неправильный логин или пароль
                                    </Alert>
                                )}
                            </form>


                        </div >
                        <div className="screen__background">
                            <span className="screen__background__shape screen__background__shape4"></span>
                            <span className="screen__background__shape screen__background__shape3"></span>
                            <span className="screen__background__shape screen__background__shape2"></span>
                            <span className="screen__background__shape screen__background__shape1"></span>
                        </div>
                    </div >
                </div >
            ) : (
                <Note />
            )}
        </>



    )
}

export default Login;