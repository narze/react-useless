import { useMemo } from 'react';

const BEVERAGE_MASTER_DATA = [
  'beer',
  'beer',
  'coffee',
  'beer',
  'water',
  'coffee',
  'coffee',
  'beer',
  'coffee',
  'beer',
  'coffee',
  'water',
];

const useRandomCodingStamina = () => {
  const beverageLength = BEVERAGE_MASTER_DATA.length;

  const beverage = useMemo(
    () => BEVERAGE_MASTER_DATA[Math.round(Math.random() * beverageLength)],
    []
  );
  return beverage;
};
export { useRandomCodingStamina };
