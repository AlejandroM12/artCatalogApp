import {useState, useEffect, useCallback} from 'react';
import {getData, storeData} from '../services/asyncStorage';

export const useAsyncStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  const getStoredValue = useCallback(async () => {
    try {
      const item = await getData(key);
      if (item !== null) {
        setStoredValue(item);
      }
    } catch (error) {
      console.error('Error getting stored value from AsyncStorage:', error);
    }
  }, [key]);

  const setValue = useCallback(
    async (value: T) => {
      if (value !== undefined && value !== null) {
        try {
          setStoredValue(value);
          await storeData(key, value);
        } catch (error) {
          console.error('Error setting value to AsyncStorage:', error);
        }
      } else {
        console.error(
          'Error setting value to AsyncStorage: value is null or undefined',
        );
      }
    },
    [key],
  );

  useEffect(() => {
    getStoredValue();
  }, [getStoredValue]);

  return [storedValue, setValue] as const;
};
