import { useState } from "react";

export default function useLocalStorage(key, initValue) {
  const getItem = () => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initValue;
  };

  const setItem = (item) => {
    setSavedItems(item);
    localStorage.setItem(key, JSON.stringify(item));
  };

  const [savedValues, setSavedItems] = useState(getItem);
  return [savedValues, setItem];
}
