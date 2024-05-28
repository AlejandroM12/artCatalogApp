import AsyncStorage from '@react-native-async-storage/async-storage';

export const getData = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('Error getting data from AsyncStorage:', e);
  }
};

export const storeData = async (key: string, value: unknown) => {
  if (value === undefined || value === null) {
    console.error(
      'Error storing data to AsyncStorage: value is null or undefined',
    );
    return;
  }

  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error('Error storing data to AsyncStorage:', e);
  }
};
export const removeData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.error('Error removing data from AsyncStorage:', e);
  }
};
