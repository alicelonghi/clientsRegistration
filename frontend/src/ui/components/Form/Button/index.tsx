import {
  FieldValues,
  UseFormHandleSubmit,
  SubmitHandler,
} from "react-hook-form";

interface ButtonProps extends FieldValues {
  handleSubmit: UseFormHandleSubmit<any>;
  onSubmit: SubmitHandler<any>;
}

const Button = ({
  handleSubmit,
  onSubmit,
  children,
  ...buttonProps
}: ButtonProps) => {
  return (
    <button
      {...buttonProps}
      onClick={handleSubmit(onSubmit)}
      style={{
        padding: "8px 12px",
        fontSize: "16px",
        backgroundColor: "#007BFF",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        ...buttonProps.style,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
