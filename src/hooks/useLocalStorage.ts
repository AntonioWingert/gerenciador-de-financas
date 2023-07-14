type UseLocalStorageParams = {
  key: string;
};

type SetLocalStorageParams = {
  key: string;
  value: string;
};

export const useLocalStorage = () => {
  const get = ({ key }: UseLocalStorageParams) => {
    const data = localStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    }
    return null;
  };

  const set = ({ key, value }: SetLocalStorageParams) => {
    localStorage.setItem(key, value);
  };

  const remove = ({ key }: UseLocalStorageParams) => {
    localStorage.removeItem(key);
  };

  return { get, set, remove };
};
