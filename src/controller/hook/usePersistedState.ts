import { useEffect, useState } from "react";

export default function usePersistedState(key: string, defaultValue: any) {
  const currentValue = JSON.parse(localStorage.getItem(key) as string) || defaultValue;
  const [state, setState] = useState(() => currentValue);
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}
