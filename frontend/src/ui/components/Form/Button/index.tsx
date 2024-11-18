import { ButtonHTMLAttributes } from "react";
import { FieldValues } from "react-hook-form";

interface ButtonProps {
  handleClick: () => void;
  label: string;
}

const Button = ({ handleClick, label, ...buttonProps }: ButtonProps) => {
  return (
    <button
      {...buttonProps}
      onClick={() => handleClick()}
      style={{
        padding: "8px 12px",
        fontSize: "16px",
        backgroundColor: "#007BFF",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
};

export default Button;
