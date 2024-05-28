import React, {useEffect, useState} from 'react';
import {useArt} from '../context/ArtContext';
import {ArtDetailScreenProps, ArtWork} from '../types';
import Loading from '../components/Loading/Loading';
import ArtDetailUI from '../components/ArtDetails/ArtDetails';

const ArtDetailScreen: React.FC<ArtDetailScreenProps> = ({route}) => {
  const {artId} = route.params;
  const {fetchArtwork, favorites, addFavorite, removeFavorite} = useArt();
  const [art, setArt] = useState<ArtWork | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArtwork = async () => {
      const data = await fetchArtwork(artId);
      setArt(data);
      setLoading(false);
    };

    loadArtwork();
  }, [artId, fetchArtwork]);

  const isLiked = favorites.some(fav => fav.id === artId);

  const toggleLike = () => {
    if (isLiked && art) {
      removeFavorite(art.id);
    } else if (art) {
      addFavorite(art);
    }
  };

  if (!art) {
    return null;
  }
  return (
    <Loading loading={loading}>
      {art && (
        <>
          <ArtDetailUI
            artwork={art}
            toggleLike={toggleLike}
            isLiked={isLiked}
          />
        </>
      )}
    </Loading>
  );
};

export default ArtDetailScreen;
