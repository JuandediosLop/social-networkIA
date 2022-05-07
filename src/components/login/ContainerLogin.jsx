import {useState} from "react";
import FormContainer from "./FormsContainer";
import FormSignIn from "./FormSignIn";
import FormSignUp from "./FormSignUp";
import PanelContainer from "./PanelContainer";

const ContainerLogin = () => {
    const [activePanel, setActivePanel] = useState("");
    
    const signUp = () => {
        setActivePanel("sign-up-mode");
    }
    
    const signIn = () => {
        setActivePanel("");
    }
    return (
        <div className={"container " + activePanel}>
            <FormContainer>
                <FormSignIn />
                <FormSignUp />
            </FormContainer>
            <PanelContainer funcion1={signUp} funcion2={signIn} />
        </div>
    )
}
export default ContainerLogin;