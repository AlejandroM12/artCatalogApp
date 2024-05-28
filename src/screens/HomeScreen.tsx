import React, {useCallback, useEffect, useState} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import {useArt} from '../context/ArtContext';
import ArtCard from '../components/ArtCard/ArtCard';
import {homeScreenStyles} from './styles';
import {ArtWork, NavigationProps} from '../types';
import Loading from '../components/Loading/Loading';
import SearchBar from '../components/SearchBar/SearchBar';
import CategoryPicker from '../components/CategoryPicker/CategoryPicker';

const HomeScreen: React.FC<NavigationProps> = ({navigation}) => {
  const {artworks, loadArtworks} = useArt();
  const [page, setPage] = useState(1);
  const [initialLoading, setInitialLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  useEffect(() => {
    const loadInitialArtworks = async () => {
      setInitialLoading(true);
      await loadArtworks(1);
      setInitialLoading(false);
    };
    loadInitialArtworks();
  }, [loadArtworks]);

  const loadMoreArtworks = useCallback(async () => {
    if (!loadingMore) {
      setLoadingMore(true);
      await loadArtworks(page + 1);
      setPage(prevPage => prevPage + 1);
      setLoadingMore(false);
    }
  }, [loadingMore, loadArtworks, page]);

  const renderItem = useCallback(
    ({item}: {item: ArtWork}) => (
      <ArtCard
        key={item.id}
        art={item}
        onPress={() =>
          navigation.navigate('ArtDetail', {artId: item.id, title: item.title})
        }
      />
    ),
    [navigation],
  );
  const filteredArtworks = artworks.filter(art => {
    const matchesQuery = art.title.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = selectedCategory
      ? art.category_titles?.includes(selectedCategory)
      : true;
    return matchesQuery && matchesCategory;
  });

  const categoryItems = Array.from(
    new Set(artworks.flatMap(art => art.category_titles || [])),
  ).map(category => ({label: category, value: category, key: category}));
  categoryItems.unshift({label: 'All Categories', value: '', key: 'all'});

  return (
    <Loading loading={initialLoading}>
      <View style={homeScreenStyles.container}>
        <SearchBar query={query} onQueryChange={setQuery} />
        <CategoryPicker
          selectedValue={selectedCategory}
          onValueChange={setSelectedCategory}
          items={categoryItems}
        />
        <FlatList
          data={filteredArtworks}
          keyExtractor={(item, index) => `${item.id}-${index}`}
          renderItem={renderItem}
          onEndReached={loadMoreArtworks}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            loadingMore ? (
              <ActivityIndicator size="large" color="#0000ff" />
            ) : null
          }
          numColumns={2}
          columnWrapperStyle={homeScreenStyles.columnWrapper}
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          windowSize={10}
        />
      </View>
    </Loading>
  );
};

export default HomeScreen;
