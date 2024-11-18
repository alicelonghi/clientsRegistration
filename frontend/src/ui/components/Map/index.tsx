import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import useDeliveryStore from "../../../stores/delivery";
import { calculateCenter } from "../../../utils/calculateMapCenter";
import { fetchClients } from "../../../api/delivery";

const Map: React.FC = () => {
  const { clients, locations, isLoading, setLocations } = useDeliveryStore();
  const [mapCenter, setMapCenter] = useState<[number, number] | null>(null);

  // Carregar clientes e localizações
  useEffect(() => {
    const loadClients = async () => {
      try {
        const data = await fetchClients();

        setLocations(locations);
      } catch (error) {
        console.error("Erro ao carregar clientes:", error);
      }
    };

    loadClients();
  }, [setLocations]);

  // Atualizar centro do mapa sempre que as localizações mudarem
  useEffect(() => {
    if (locations.length > 0) {
      const center = calculateCenter(locations);
      setMapCenter(center);
    }
  }, [locations]);

  // Placeholder para o mapa
  function MapPlaceholder() {
    return <div>Carregando mapa...</div>;
  }

  // Retornar o mapa ou o placeholder
  return isLoading || !mapCenter ? (
    <MapPlaceholder />
  ) : (
    <MapContainer
      center={mapCenter}
      zoom={13}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location, index) => (
        <Marker key={index} position={[location.lat, location.lng]}>
          <Popup>
            <div className="flex flex-col gap-y-2">
              <span>{clients[index]?.name}</span>
              <span>{`${clients[index]?.weight} kg`}</span>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
