import React from "react";

const FormSignIn = () => {
    return (
        <form className="sign-in-form">
            <img src="./img/Logo.png" alt="Logo UVG" sizes="100px"/>
            <h2 className="title">Inicia Sesión</h2>
            <div className="input-field">
                <i className="fas fa-user" aria-hidden="true"></i>
                <input type="text" placeholder="Correo UVG"/>
            </div>
            <div className="input-field">
                <i className="fas fa-lock" aria-hidden="true"></i>
                <input type="password" placeholder="Contraseña"/>
            </div>
            <button className="btn solid">Iniciar Sesión</button>
        </form>
    );
}

export default FormSignIn;