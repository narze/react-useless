import { useMemo } from 'react';
export const useTruthy = () => {
  const truthy = useMemo(() => true, []);

  return truthy;
};
