
import "./styles.css"
import {type ButtonProps} from "./types";

function Button({type="button", name = "Send", onClick = () =>{}, children}: ButtonProps) {
    return (
    <button className = "button_component" onClick={onClick} type={type} >
        {/* {children ? "" : buttonName} */}
        {!children && name}
        {children}
    </button>

    );
}

export default Button;
