import { useFormContext } from "react-hook-form";

const InputField: React.FC<{ name: string; label: string; type?: string }> = ({
  name,
  label,
  type = "text",
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div style={{ marginBottom: "16px" }}>
      <label>
        {label}
        <input
          {...register(name)}
          type={type}
          style={{
            display: "block",
            width: "100%",
            padding: "8px",
            marginTop: "4px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </label>
      {errors[name] && (
        <span style={{ color: "red", fontSize: "12px" }}>
          {errors[name]?.message as string}
        </span>
      )}
    </div>
  );
};

export default InputField;
