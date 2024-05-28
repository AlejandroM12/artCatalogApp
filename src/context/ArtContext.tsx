import React, {createContext, useContext, ReactNode, useCallback} from 'react';
import {ArtContextProps, ArtWork} from '../types';
import {fetchArtworksApi, fetchArtworkApi} from '../services/artWorkApi';
import {useAsyncStorage} from '../hooks/useAsyncStorage';
import notifee from '@notifee/react-native';

const ArtContext = createContext<ArtContextProps | undefined>(undefined);

export const useArt = () => {
  const context = useContext(ArtContext);
  if (!context) {
    throw new Error('useArt must be used within an ArtProvider');
  }
  return context;
};

export const ArtProvider = ({children}: {children: ReactNode}) => {
  const [artworks, setArtworks] = useAsyncStorage<ArtWork[]>('artworks', []);
  const [favorites, setFavorites] = useAsyncStorage<ArtWork[]>('favorites', []);

  const addFavorite = async (artwork: ArtWork) => {
    if (artwork) {
      const newFavorites = favorites ? [...favorites, artwork] : [artwork];
      setFavorites(newFavorites);
      await notifee.displayNotification({
        title: 'Favorite added',
        body: `${artwork.title} has been added to your favorites.`,
      });
    }
  };

  const removeFavorite = async (id: string) => {
    if (favorites && id) {
      const newFavorites = favorites.filter(fav => fav.id !== id);
      setFavorites(newFavorites);
      await notifee.displayNotification({
        title: 'Favorite removed',
        body: 'An artwork has been removed from your favorites.',
      });
    }
  };

  const loadArtworks = useCallback(
    async (page: number) => {
      const data = (await fetchArtworksApi(page)) || [];
      setArtworks((prevArtworks: ArtWork[] | null) => {
        const updatedArtworks = prevArtworks
          ? [...prevArtworks, ...data]
          : data;
        return updatedArtworks;
      });
    },
    [setArtworks],
  );

  const fetchArtwork = async (id: string): Promise<ArtWork | null> => {
    return await fetchArtworkApi(id);
  };

  return (
    <ArtContext.Provider
      value={{
        artworks,
        favorites,
        addFavorite,
        removeFavorite,
        loadArtworks,
        fetchArtwork,
      }}>
      {children}
    </ArtContext.Provider>
  );
};
