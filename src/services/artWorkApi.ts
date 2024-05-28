import axios from 'axios';
import {ArtWork} from '../types';
import Config from 'react-native-config';

const API_BASE_URL = Config.API_BASE_URL;

export const fetchArtworksApi = async (page: number): Promise<ArtWork[]> => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/artworks?page=${page}&limit=20`,
    );
    return response.data.data;
  } catch (error) {
    console.error('Error fetching artworks:', error);
    return [];
  }
};

export const fetchArtworkApi = async (id: string): Promise<ArtWork | null> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/artworks/${id}`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching artwork:', error);
    return null;
  }
};
