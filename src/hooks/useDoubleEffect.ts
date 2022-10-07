import { useEffect } from "react";

export const useDoubleEffect = (callback: any, dep: any[]) => {
  useEffect(() => {
    callback();
  }, dep);

  useEffect(() => {
    callback();
  }, dep);
};
