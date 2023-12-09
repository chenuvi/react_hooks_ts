import React, { useContext, useState } from "react";
import { TypeAppContext } from "./base";

const AppContext = React.createContext<TypeAppContext>({} as TypeAppContext);

const LevelA: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: 30, backgroundColor: "lightblue", width: "50vw" }}>
      count: {count}
      <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
      <AppContext.Provider value={{ count, setCount }}>
        <LevelB></LevelB>
      </AppContext.Provider>
    </div>
  );
};

const LevelB: React.FC = () => {
  return (
    <div style={{ padding: 30, backgroundColor: "lightgreen" }}>
      <LevelC></LevelC>
    </div>
  );
};

const LevelC: React.FC = () => {
  const ctx = useContext(AppContext);
  return (
    <div style={{ padding: 30, backgroundColor: "orange" }}>
      count: {ctx.count}
      <button onClick={() => ctx.setCount((prev) => prev + 5)}>+5</button>
      <button onClick={() => ctx.setCount(0)}>Reset</button>
    </div>
  );
};

export default LevelA;
