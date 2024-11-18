import { Location } from "../stores/delivery";

// Função para calcular o foco do mapa com base nos endereços dos clientes
// retorna um array com a latitude e longitude médias
export const calculateCenter = (locations: Location[]): [number, number] => {
  if (locations.length === 0) return [0, 0];

  const lats = locations.map((locations) => locations.lat);
  const lngs = locations.map((location) => location.lng);

  const averageLat: number = lats.reduce((a, b) => a + b, 0) / lats.length;
  const averageLng: number = lngs.reduce((a, b) => a + b, 0) / lngs.length;

  return [averageLat, averageLng];
};
