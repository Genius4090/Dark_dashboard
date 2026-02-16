import { useEffect, useState } from 'react';

const debounce = (value:string, delay:number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    let timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timerId);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default debounce;