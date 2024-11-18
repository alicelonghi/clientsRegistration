import { useEffect, useState } from "react";
import useDeliveryStore from "../../stores/delivery";
import Sidebar from "../../ui/components/Layout/Sidebar";
import Map from "../../ui/components/Map";
import Form from "../../ui/components/Form";

function RegisterPage() {
  const { clients, isLoading, fetchClients } = useDeliveryStore();

  const [location, setLocation] = useState<{ lat: number; lng: number }>({
    lat: 0,
    lng: 0,
  });

  const updateLocation = (lat: number, lng: number) => {
    setLocation({ lat, lng });
  };

  useEffect(() => {
    fetchClients();
  }, [fetchClients]);
  return (
    <div className="flex h-screen">
      {/* Formulário */}
      <div className="w-1/2 bg-gray-100 p-6 overflow-y-auto">
        <div className="flex flex-col">
          <Form />
        </div>
      </div>

      {/* Mapa */}
      <div className="w-1/2">
        <Map />
      </div>
    </div>
  );
}

export default RegisterPage;
