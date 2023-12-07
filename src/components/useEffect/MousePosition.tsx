import React, { useState } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";

const CompMousePosition: React.FC = () => {
  const position = useMousePosition(1000);
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
