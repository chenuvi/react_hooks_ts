import { useState, useEffect } from "react";

export const useCountDown = (time = 10) => {
  const [count, setCount] = useState(time);

  useEffect(() => {
    let timerId = setTimeout(() => {
      if (count > 0) {
        setCount((prev) => prev--);
      } else {
        clearTimeout(timerId);
      }
    }, 1000);
    return () => clearTimeout(timerId);
  }, [count]);
  return [count, !time];
};
