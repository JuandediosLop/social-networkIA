import React from "react";

const FormContainer = ({ children }) => {
    return (
        <div className="forms-container">
            <div className="signin-signup">
                {children}
            </div>
        </div>
    );
}
export default FormContainer;