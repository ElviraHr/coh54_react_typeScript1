import styled from "@emotion/styled";

interface ButtonComponentProps {
  $isRed: boolean;
  disabled: boolean;
}

const generateButtonColor = (isRed: boolean, disabled: boolean | undefined) => {
  if (disabled) {
    return "#acacff";
  } else if (isRed) {
    return "#fc3333ff";
  } else return "#1f27f5";
};

const generateButtonColorHover = (isRed: boolean, disabled: boolean | undefined) => {
  if (disabled) {
    return "#1f27f5";
  } else if (isRed) {
    return "#ff6868ff";
  } else return "rgb(97, 102, 255)";
};

export const ButtonComponent = styled.button<ButtonComponentProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  border-radius: 4px;
  padding: 0;
  height: 70px;
  width: 100%;
  background-color: generateButton(isRed, disabled);
  color: white;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${({ $isRed }) =>
      $isRed ? "#ff6868ff" : "rgb(97, 102, 255)"};
  }
`;
