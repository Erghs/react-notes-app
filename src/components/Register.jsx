import "../style/Login.css"
import { useState } from "react";
import { Link, } from 'react-router-dom';
import Login from "./Login";
const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);



    function handleFormSubmit(e) {
        e.preventDefault();

        if (!email || !password) {
            setFlag(true);
        } else {
            setFlag(false);
            localStorage.setItem("pemail", JSON.stringify(email));
            localStorage.setItem("ppassword",JSON.stringify(password));
            console.log("Saved in Local Storage");

            setLogin(!login);
        }
    }
 


    return (
        <>
            {" "}
            {login ? (
                <div className="container">
                    <div className="screen">
                        <div className="screen__content">
                            <form className="login">
                                <h1>Регистрация</h1>
                                <div className="login__field">
                                    <input className="login__input"
                                        placeholder="Почта"
                                        type="email"
                                        id="username"
                                        autoComplete="off"
                                        required
                                        onChange={(event) => setEmail(event.target.value)} />
                                </div>
                                <div className="login__field">
                                    <input className="login__input"
                                        placeholder="Пароль"
                                        type="password"
                                        id="password"
                                        autoComplete="off"
                                        required
                                        onChange={(event) => setPassword(event.target.value)}
                                    />
                                </div>
                                <Link className="link" to="/">
                                    <button type="submit" className="button login__submit" onClick={handleFormSubmit}>
                                        <span className="button__text">Зарегистрироваться</span>
                                    </button>
                                </Link>
                                <div className="link__text">
                                    <Link to="/">
                                        <span className="link__text">Вход</span>
                                    </Link>
                                </div>
 
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
                <Login />
            )}
        </>
    )
}

export default Register;