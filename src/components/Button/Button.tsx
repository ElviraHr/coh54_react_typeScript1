import { ButtonComponent } from "./styles";
import { type ButtonProps } from "./types";

function Button({
  type = "button",
  name = "Send",
  onClick = () => {},
  children,
  isRed = false,
  disabled = false,
}: ButtonProps) {
  return (
    <ButtonComponent disabled={disabled} $isRed={isRed} onClick={onClick} type={type}>
      {/* {children ? "" : buttonName} */}
      {!children && name}
      {children}
    </ButtonComponent>
  );
}

export default Button;
