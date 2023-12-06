import React, { useEffect, useState } from "react";
import { throttleFn } from "@/utils/tool";

const CompMousePosition: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mousemoveFn = (e: MouseEvent) => {
      throttleFn(() => {
        // console.log(e.clientX, e.clientY);
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
      }, 1000);
    };
    // window.addEventListener("mousemove", mousemoveFn);
    throttleFn((a = 3, b = 4) => {
      console.log("throttleFnrun");
    }, 1000);
    return () => {
      window.removeEventListener("mousemove", mousemoveFn);
    };
  }, []);

  return <>鼠标的位置是{JSON.stringify(position)}</>;
};

const PageMousePosition = () => {
  const [flag, setFlag] = useState(true);

  return (
    <>
      <button onClick={() => setFlag((prev) => !prev)}>Toggle</button>
      <hr />
      {flag && <CompMousePosition />}
    </>
  );
};

export default PageMousePosition;
