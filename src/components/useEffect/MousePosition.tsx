import React, { useEffect, useState } from "react";

const CompMousePosition: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mousemoveFn = (e: MouseEvent) => {
      console.log(
        "🚀 ~ file: MousePosition.tsx:13 ~ mousemoveFn ~ e:",
        e.clientX,
        e.clientY
      );
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mousemoveFn);

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
