import React from "react";
import { useFormContext } from "react-hook-form";

interface InputFieldProps {
  label: string;
  children?: React.ReactNode;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  children,
  ...props
}) => {
  return (
    <div
      style={{ marginBottom: "16px", display: "flex", alignItems: "center" }}
    >
      <div className="w-full">
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <input
          {...props}
          className="block w-full p-2 mt-1 border border-gray-300 rounded"
        />
      </div>

      {children && (
        <div
          style={{ marginLeft: "8px", display: "flex", alignItems: "center" }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default InputField;
