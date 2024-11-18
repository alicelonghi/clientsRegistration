import axios, { AxiosResponse } from "axios";
import { Client } from "../../types/client";
import { ClientFormData } from "../../ui/components/Form";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

// consulta todos clientes
export const fetchClients = async (): Promise<Client[]> => {
  try {
    const response: AxiosResponse<Client[]> = await api.get("/clients", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Erro ao consultar clientes:", error);
    throw error;
  }
};

export const deleteAllClients = async (): Promise<void> => {
  try {
    const response = await api.delete("/clients/all");
    console.log("Todos os clientes foram deletados com sucesso", response.data);
    alert("Todos os clientes foram apagados com sucesso!");
  } catch (error) {
    console.error("Erro ao deletar todos os clientes:", error);
    alert("Erro ao deletar todos os clientes. Tente novamente.");
  }
};

// Função para criar um novo cliente
export const createClient = async (
  clientData: ClientFormData
): Promise<Client> => {
  try {
    const response: AxiosResponse<Client> = await api.post(
      "/clients",
      clientData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Erro ao criar cliente:", error);
    throw error;
  }
};

// Função para consultar geolocalização por endereço
export const fetchGeolocationByAddress = async (address: string) => {
  try {
    const response = await api.get(
      `/clients/geolocation?address=${encodeURIComponent(address)}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Erro ao consultar geolocalização:", error);
    throw error;
  }
};
