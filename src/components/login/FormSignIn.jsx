import React, {useRef, useContext} from "react";
import {loginCall} from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import CircularProgress from '@mui/material/CircularProgress';

const FormSignIn = () => {
    const email = useRef();
    const password = useRef();
    const { isFetching, dispatch} = useContext(AuthContext);

    const enviarForm =(e) => {
        e.preventDefault();
        loginCall({email:email.current.value, password: password.current.value}, dispatch);
    }


    return (
        <form className="sign-in-form" onSubmit={enviarForm}>
            <img src="./assets/Logo.png" alt="Logo UVG" sizes="100px"/>
            <h2 className="title">Inicia Sesión</h2>
            <div className="input-field">
                <i className="fas fa-user" aria-hidden="true"></i>
                <input type="email" placeholder="Correo UVG" ref={email} required/>
            </div>
            <div className="input-field">
                <i className="fas fa-lock" aria-hidden="true"></i>
                <input type="password" placeholder="Contraseña" ref={password} required minLength={8}/>
            </div>
            <button type="submit" className="btn solid" disabled={isFetching}>{isFetching ? <CircularProgress color="inherit" size={30} /> : "Iniciar Sesión" }</button>
        </form>
    );
}

export default FormSignIn;