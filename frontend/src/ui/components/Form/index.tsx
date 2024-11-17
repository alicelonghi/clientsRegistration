import React from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface FormProps {
  defaultValues: any;
  onSubmit: SubmitHandler<any>;
  validationSchema?: yup.AnyObjectSchema;
  children: React.ReactNode;
}

const Form = ({
  defaultValues,
  onSubmit,
  validationSchema,
  children,
}: FormProps) => {
  const methods = useForm<FormProps>({
    defaultValues,
    resolver: validationSchema ? yupResolver(validationSchema) : undefined,
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
        <button
          type="submit"
          style={{
            marginTop: "16px",
            padding: "8px 12px",
            fontSize: "16px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Enviar
        </button>
      </form>
    </FormProvider>
  );
};

export default Form;
