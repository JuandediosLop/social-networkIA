import React from "react";

const FormSignUp = () => {
    return (
        <form className="sign-up-form">
            <img src="./assets/Logo.png" alt="Logo UVG" sizes="100px"/>
            <h2 className="title">Registro</h2>
            <div className="input-field">
                <i className="fas fa-user" aria-hidden="true"></i>
                <input type="text" placeholder="Nombre"/>
            </div>
            <div className="input-field">
                <i className="fas fa-user" aria-hidden="true"></i>
                <input type="text" placeholder="Apellido"/>
            </div>
            <div className="input-field">
                <i className="fas fa-user" aria-hidden="true"></i>
                <input type="text" placeholder="Correo UVG"/>
            </div>
            <div className="input-field">
                <i className="fas fa-lock" aria-hidden="true"></i>
                <input type="password" placeholder="Contraseña"/>
            </div>
            <div className="input-field">
                <i className="fas fa-lock" aria-hidden="true"></i>
                <input type="password" placeholder="Confirmar Contraseña"/>
            </div>
            <button className="btn solid">Registrar</button>
        </form>
        );
}

export default FormSignUp;