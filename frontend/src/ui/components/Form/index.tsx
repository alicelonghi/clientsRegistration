import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "./Button";
import {
  createClient,
  deleteAllClients,
  fetchClients,
  fetchGeolocationByAddress,
} from "../../../api/delivery";
import { Client } from "../../../types/client";

interface Address {
  street: string;
  number: number;
  neighborhood: string;
  complement: string;
  city: string;
  state: string;
  country: string;
}

export interface ClientFormData {
  name: string;
  weight: number;
  address: Address;
}

const FormComponent: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm<ClientFormData>({
    defaultValues: {
      name: "",
      weight: undefined,
      address: {
        street: "",
        number: undefined,
        neighborhood: "",
        complement: "",
        city: "",
        state: "",
        country: "",
      },
    },
  });

  const onSubmit: SubmitHandler<ClientFormData> = async (
    data: ClientFormData
  ) => {
    try {
      const response = await createClient(data);
      if (response) fetchClients();
      alert("Dados enviados com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      alert("Erro ao enviar os dados. Tente novamente.");
    }
  };

  const hideAddress = watch("name") && watch("weight");

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full mx-auto p-4 bg-white shadow-md rounded-lg space-y-4"
      >
        {/* Nome */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Nome
          </label>
          <input
            id="name"
            {...register("name", { required: "O nome é obrigatório" })}
            className={`mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        {/* Peso */}
        <div>
          <label
            htmlFor="weight"
            className="block text-sm font-medium text-gray-700"
          >
            Peso (kg)
          </label>
          <input
            id="weight"
            type="number"
            {...register("weight", {
              required: "O peso é obrigatório",
              min: { value: 1, message: "O peso deve ser maior que 0" },
            })}
            className={`mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
              errors.weight ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.weight && (
            <p className="mt-1 text-sm text-red-600">{errors.weight.message}</p>
          )}
        </div>

        {/* Endereço */}
        <fieldset className="space-y-4 pb-2" disabled={!hideAddress}>
          <legend className="text-lg font-medium text-gray-800">
            Endereço
          </legend>
          <div className="flex gap-x-4">
            <div className="w-full">
              <label
                htmlFor="street"
                className="block text-sm font-medium text-gray-700"
              >
                Rua
              </label>
              <input
                id="street"
                {...register("address.street", {
                  required: "A rua é obrigatória",
                })}
                className={`mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                  errors.address?.street ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.address?.street && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.address.street.message}
                </p>
              )}
            </div>
            <div className="max-w-20">
              <label
                htmlFor="number"
                className="block text-sm font-medium text-gray-700"
              >
                Número
              </label>
              <input
                id="number"
                type="number"
                {...register("address.number", {
                  required: "O número é obrigatório",
                })}
                className={`mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                  errors.address?.number ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.address?.number && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.address.number.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex gap-x-4">
            <div className="w-full">
              <label
                htmlFor="neighborhood"
                className="block text-sm font-medium text-gray-700"
              >
                Bairro
              </label>
              <input
                id="neighborhood"
                {...register("address.neighborhood", {
                  required: "O bairro é obrigatório",
                })}
                className={`mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                  errors.address?.neighborhood
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {errors.address?.neighborhood && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.address.neighborhood.message}
                </p>
              )}
            </div>

            <div className="w-full">
              <label
                htmlFor="complement"
                className="block text-sm font-medium text-gray-700"
              >
                Complemento
              </label>
              <input
                id="complement"
                {...register("address.complement")}
                className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300"
              />
            </div>
          </div>
          <div className="flex gap-x-4">
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                Cidade
              </label>
              <input
                id="city"
                {...register("address.city")}
                className={`mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                  errors.address?.city ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.address?.city && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.address.city.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-700"
              >
                Estado
              </label>
              <input
                id="state"
                {...register("address.state", {
                  required: "O estado é obrigatório",
                })}
                className={`mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                  errors.address?.state ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.address?.state && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.address.state.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                País
              </label>
              <input
                id="country"
                {...register("address.country", {
                  required: "O país é obrigatório",
                })}
                className={`mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                  errors.address?.country ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.address?.country && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.address.country.message}
                </p>
              )}
            </div>
          </div>
        </fieldset>
        <div className="flex gap-3">
          <button
            type="submit"
            disabled={
              !watch("address.city") &&
              !watch("address.country") &&
              !watch("address.neighborhood") &&
              !watch("address.number") &&
              !watch("address.street") &&
              !watch("name") &&
              !watch("weight")
            }
            className="w-full py-2 px-4 bg-green-800 text-white font-semibold disabled:bg-gray-600 rounded-md shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            Cadastrar
          </button>
        </div>
      </form>
      <button
        onClick={() => deleteAllClients()}
        className="w-full py-2 px-4 bg-red-800 text-white font-semibold  disabled:bg-gray-600 rounded-md shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
      >
        Resetar cadastro
      </button>

      {/* TODO: Botão de buscar endereço */}
      {/* <button
          onClick={async () => {
            const formattedAddress: string = `${getValues(
              "address.street"
            )} ${getValues("address.number")}, ${getValues(
              "address.neighborhood"
            )}, ${getValues("address.complement")}, ${getValues(
              "address.city"
            )}, ${getValues("address.state")}, ${getValues("address.country")}`;

            const data = await fetchGeolocationByAddress(formattedAddress);
            console.log(data);
          }}
          disabled={
            !watch("address.city") &&
            !watch("address.country") &&
            !watch("address.neighborhood") &&
            !watch("address.number") &&
            !watch("address.street")
          }
          className="w-full py-2 px-4 bg-blue-800 text-white font-semibold rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 disabled:bg-gray-600 focus:ring-blue-400 focus:ring-offset-2"
        >
          Buscar endereço
        </button> */}
    </>
  );
};

export default FormComponent;
