import { useState, useEffect } from "react";
// import { throttle } from "lodash-es";
import { throttleFn } from "@/utils/tool";
export const useMousePosition = (delay: number = 200) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mousemoveFn =
      // (e: MouseEvent) =>
      throttleFn((e) => {
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
      }, delay);

    window.addEventListener("mousemove", mousemoveFn);

    return () => {
      window.removeEventListener("mousemove", mousemoveFn);
    };
  }, []);

  return position;
};
