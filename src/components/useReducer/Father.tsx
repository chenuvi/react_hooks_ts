import React, { useReducer } from "react";

type UserType = typeof defaultState;

const defaultState = {
  userName: "lisi",
  age: 0,
};

const reducer = (prevState: UserType) => {
  return prevState;
};

const initAction = (initState: UserType) => {
  return {
    ...initState,
    age: Math.round(Math.abs(initState.age)) || 18,
  };
};

const Father: React.FC = () => {
  const [state] = useReducer(reducer, defaultState, initAction);
  console.log("🚀 ~ file: Father.tsx:12 ~ state:", state);

  return (
    <>
      <button>修改用户名</button>
      <div className="father">
        <Son1></Son1>
        <Son2></Son2>
      </div>
    </>
  );
};

const Son1: React.FC = () => {
  return <div className="son1"></div>;
};

const Son2: React.FC = () => {
  return <div className="son2"></div>;
};

export default Father;
