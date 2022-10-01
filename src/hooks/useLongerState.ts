import {  useState } from "react";

export const useLongerState = <T = unknown>(yourInput: T) => {
  return useState(yourInput);
}


export const useExampleLongState = () => {
  const [countLongerState] = useLongerState(0);

  return countLongerState;
}