export type ArtWork = {
  id: string;
  title: string;
  image_id?: string;
  thumbnail: {
    lqip: string;
    width: number;
    height: number;
    alt_text: string;
  };
  artist_title: string;
  description?: string;
  place_of_origin?: string;
  date_display?: string;
  category_titles?: string[];
};

export interface ApiResponse<T> {
  data: T;
  pagination: {
    total: number;
    limit: number;
    offset: number;
    total_pages: number;
    current_page: number;
    next_url?: string;
  };
}
export interface ArtContextProps {
  artworks: ArtWork[];
  favorites: ArtWork[];
  addFavorite: (artwork: ArtWork) => void;
  removeFavorite: (id: string) => void;
  loadArtworks: (page: number) => Promise<void>;
  fetchArtwork: (id: string) => Promise<ArtWork | null>;
}
export interface NavigationProps {
  navigation: any;
}
export interface ArtDetailScreenProps {
  route: any;
}
export interface SearchBarProps {
  query: string;
  onQueryChange: (text: string) => void;
}

export interface LoadingProps {
  loading: boolean;
  children?: React.ReactNode;
}
export interface IconComponentProps {
  name: string;
  size: number;
  color: string;
}
export interface FavoriteButtonProps {
  onPress: () => void;
  isFavorite: boolean;
}
export interface ArtDetailUIProps {
  artwork: ArtWork;
  toggleLike: () => void;
  isLiked: boolean;
}
export interface ArtCardProps {
  art: ArtWork;
  onPress: (params: {artId: string; title: string}) => void;
}
export interface CategoryPickerProps {
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
}
export interface DropdownPickerProps {
  selectedValue: string;
  onValueChange: (value: string) => void;
  items: {label: string; value: string; key?: string}[];
}
export type ParamListType = {
  HomeScreen: undefined;
  FavoritesScreen: undefined;
  ArtDetail: {title: string} | undefined;
};
