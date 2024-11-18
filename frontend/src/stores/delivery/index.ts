import { create } from "zustand";
import { Client } from "../../types/client";
import { fetchClients } from "../../api/delivery";

export interface Location {
  lat: number;
  lng: number;
  id: string;
}

interface DeliveryStore {
  clients: Client[];
  isLoading: boolean;
  fetchClients: () => Promise<void>;
  locations: Location[];
  setLocations: (locations: Location[]) => void;
}

const useDeliveryStore = create<DeliveryStore>((set) => ({
  clients: [],
  locations: [],
  isLoading: false,
  fetchClients: async () => {
    set({ isLoading: true });
    try {
      const clientsData = await fetchClients();

      if (clientsData) {
        const locations = clientsData.map((client: any) => ({
          lat: client.address.geolocation.latitude,
          lng: client.address.geolocation.longitude,
          id: client._id,
        }));

        set({ clients: clientsData, locations, isLoading: false });
      }
    } catch (error) {
      console.error("Houve um erro ao carregar os clientes", error);
      set({ isLoading: false });
    }
  },
  setLocations: (locations) => set({ locations }),
}));

export default useDeliveryStore;
