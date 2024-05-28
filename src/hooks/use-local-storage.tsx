import { useState } from 'react';

export const useLocalStorage = <
  T extends Record<string, unknown> | null = null,
>(
  keyName: string,
  defaultValue?: T
) => {
  const [storedValue, setStoredValue] = useState<T | null>(() => {
    try {
      const value = window.localStorage.getItem(keyName);
      if (value) {
        return JSON.parse(value);
      }

      const initialValue = defaultValue === undefined ? null : defaultValue;
      window.localStorage.setItem(keyName, JSON.stringify(initialValue));

      return defaultValue;
    } catch (err) {
      console.error(err);
      return defaultValue;
    }
  });

  const setValue = (newValue: T | null) => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
      setStoredValue(newValue);
    } catch (err) {
      console.error(err);
    }
  };

  return [storedValue, setValue] as const;
};
