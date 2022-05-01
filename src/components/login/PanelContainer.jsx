import React from "react";
import ContentPanels from "./ContentPanels";


const PanelContainer = ({funcion1, funcion2 }) => {


    return (
        <div className="panels-container">
            <div className="panel left-panel">
                <ContentPanels titulo="¿Nuevo Aqui?" descripcion="Para utiizar nuestros servicios es necesario ser estudiante de UVG, se verificara por medio del correo electronico y autenticación" clasesBtn="btn transparent" idBtn="sing-up-btn" titleBtn="Registrarse" Click={funcion1} />
                <img src="./img/SocialMedia_Isometric.svg" alt="Img" className="image" />
            </div>
            <div className="panel right-panel">
                <ContentPanels titulo="¿Ya tienes cuenta?" descripcion="Si ya tienes una cuenta por favor cliquea en el boton para inciar sesión y acceder a tu cuenta" clasesBtn="btn transparent" idBtn="sing-in-btn" titleBtn="Iniciar Sesión" Click={funcion2} />
                <img src="./img/FullInbox_Isometric.svg" alt="Img" className="image" />
            </div>
        </div>
    );
}  
export default PanelContainer;