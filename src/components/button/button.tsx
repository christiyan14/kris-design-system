import { FC, MouseEvent } from "react";
import "./Button.scss";

interface ButtonProps {
  label: string;
  type?: "primary" | "secondary";
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<ButtonProps> = ({ label, type = "primary", onClick }) => {
  const buttonClass =
    type === "primary" ? "button-primary" : "button-secondary";

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      type="button"
      title="Click me"
    >
      {label}
    </button>
  );
};

export default Button;
