import { Alert } from "@mui/material";
import axios from "axios";
import React, { useRef } from "react";


const FormSignUp = () => {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const confirmPassword = useRef();
    const [isFetching, setIsFetching] = React.useState(false);
    const [error, setError] = React.useState(null);
    const enviarForm = async (e) => {
        e.preventDefault();
        if(confirmPassword.current.value !== password.current.value){
            confirmPassword.current.setCustomValidity("Las contraseñas no coinciden");
        }else{
            const user = {
                username: username.current.value, 
                email: email.current.value, 
                password: password.current.value
            };

            try{
                await axios.post("/auth/register", user);
                
                setIsFetching(true);
                setTimeout(() => {
                    window.location.replace('');
                } , 2000);
            }catch(error){
                setError(true)
                console.log(error);
                setTimeout(() => {
                    setError(false);
                } , 2000);
            }
        }
    }

    return (
        <form className="sign-up-form" onSubmit={enviarForm}>
            <img src="./assets/Logo.png" alt="Logo UVG" sizes="100px"/>
            <h2 className="title">Registro</h2>
            <div className="input-field">
                <i className="fas fa-user" aria-hidden="true"></i>
                <input type="text" placeholder="Username" required ref={username}/>
            </div>
            <div className="input-field">
                <i className="fas fa-user" aria-hidden="true"></i>
                <input type="email" placeholder="Correo" required ref={email}/>
            </div>
            <div className="input-field">
                <i className="fas fa-lock" aria-hidden="true"></i>
                <input type="password" placeholder="Contraseña" required ref={password} minLength="8"/>
            </div>
            <div className="input-field">
                <i className="fas fa-lock" aria-hidden="true"></i>
                <input type="password" placeholder="Confirmar Contraseña" required ref={confirmPassword} minLength="8"/>
            </div>
            <button className="btn solid" type="submit">Registrar</button>
            {isFetching ? <Alert severity="success">Se a registrado Correctamente</Alert> : null}
            {error ? <Alert severity="error">Hubo un error al registrar!</Alert> : null}
        </form>
        );
}

export default FormSignUp;