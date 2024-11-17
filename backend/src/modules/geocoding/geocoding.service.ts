import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class GeocodingService {
  private readonly geocodingUrl = 'https://nominatim.openstreetmap.org/search';

  async getCoordinates(
    address: string,
  ): Promise<{ latitude: number; longitude: number }> {
    try {
      const response = await axios.get(this.geocodingUrl, {
        params: {
          q: address,
          format: 'json',
        },
        headers: {
          'User-Agent': 'MyApp/1.0 (youremail@example.com)', // Altere conforme necessário
        },
      });

      if (response.data.length === 0) {
        throw new Error(
          `Nenhuma localização encontrada para o endereço: ${address}`,
        );
      }

      const location = response.data[0];
      return {
        latitude: parseFloat(location.lat),
        longitude: parseFloat(location.lon),
      };
    } catch (error) {
      console.error('Erro ao obter geolocalização:', error);
      if (error.response) {
        // Se houver erro na resposta da API
        throw new Error(
          `Erro na API de geocodificação: ${error.response.status}`,
        );
      }
      // Caso o erro não seja relacionado à API
      throw new Error(
        `Erro ao obter geolocalização para o endereço: ${address}. Detalhes: ${error.message}`,
      );
    }
  }
}
