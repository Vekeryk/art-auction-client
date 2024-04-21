export const saveToLocalStorage = (key: string, value: unknown) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error saving value to localStorage:', error);
  }
};

export const getFromLocalStorage = <T>(key: string): T | null => {
  try {
    const valueString = localStorage.getItem(key);
    if (!valueString) {
      return null;
    }
    return JSON.parse(valueString) as T;
  } catch (error) {
    console.error('Error parsing value from localStorage:', error);
    return null;
  }
};
