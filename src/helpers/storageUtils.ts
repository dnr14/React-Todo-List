type PropertyKey = string | number | symbol;
const store: Storage = localStorage;

export const getItem = (key: string): string => {
  return store.getItem(key) ?? "";
};

export const setItem = (key: string, value: string): void =>
  store.setItem(key, value);

export const hasKeys = (key: PropertyKey): boolean => store.hasOwnProperty(key);
