import React from "react";

const ContentPanels = ({titulo, descripcion, clasesBtn, idBtn, titleBtn, Click }) => {
    return (
        <div className="content">
            <h3>{titulo}</h3>
            <p>{descripcion}</p>
            <button onClick={Click} className={clasesBtn} id={idBtn}>{titleBtn}</button>
        </div>
    );
}
export default ContentPanels;