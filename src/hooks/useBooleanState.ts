import {useCallback, useState} from 'react';

const useBooleanState = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  const toggle = useCallback(() => setValue(value => !value), []);

  return [value, setTrue, setFalse, toggle] as const;
};

export {useBooleanState};
