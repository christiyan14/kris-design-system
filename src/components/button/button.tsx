import { FC, MouseEvent } from "react";
import "./Button.scss";

interface ButtonProps {
  label: string;
  type?: "submit" | "button";
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<ButtonProps> = ({ label, type = "button", onClick }) => {
  return (
    <button
      className="button-primary"
      onClick={onClick}
      type={type}
      title="Click me"
    >
      {label}
    </button>
  );
};

export default Button;
