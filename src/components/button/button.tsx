import { FC, MouseEvent } from "react";
import "./button.scss";

interface ButtonProps {
  label: string;
  type?: "primary" | "secondary";
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<ButtonProps> = ({ label, type = "primary", onClick }) => {
  const buttonClass =
    type === "primary" ? "button-primary" : "button-secondary";

  return (
    <button className={buttonClass} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
