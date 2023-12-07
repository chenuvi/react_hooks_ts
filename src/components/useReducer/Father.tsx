import React from "react";
import { useImmerReducer } from "use-immer";

type UserType = typeof defaultState;
type ActionType =
  | {
      type: "UPDATE_NAME";
      payload: string;
    }
  | {
      type: "INCREMENT";
      payload: number;
    }
  | {
      type: "RESET";
    };
const defaultState = {
  name: "lisi",
  age: 0,
};

const initAge = (age: number) => Math.round(Math.abs(age)) || 18;

const reducer = (prevState: UserType, action: ActionType) => {
  switch (action.type) {
    case "UPDATE_NAME":
      //   return {
      //     ...prevState,
      //     name: action.payload,
      //   };
      prevState.name = action.payload;
      break;
    case "INCREMENT":
      //   return {
      //     ...prevState,
      //     age: action.payload + prevState.age,
      //   };
      prevState.age = action.payload + prevState.age;
      break;
    case "RESET":
      //   return { ...defaultState, age: initAge(defaultState.age) };
      prevState.age = initAge(defaultState.age);
      break;
    default:
      return prevState;
  }
};

const initAction = (initState: UserType) => {
  return {
    ...initState,
    age: initAge(initState.age),
  };
};

const Father: React.FC = () => {
  const [state, dispatch] = useImmerReducer(reducer, defaultState, initAction);
  const modifyUser = () => {
    // state.userName = "xxx";
    dispatch({
      type: "UPDATE_NAME",
      payload: "The Shy",
    });
  };
  return (
    <>
      <button onClick={modifyUser}>修改用户名</button>
      <p> {JSON.stringify(state)} </p>
      <div className="father">
        <Son1 {...state} dispatch={dispatch}></Son1>
        <Son2 {...state} dispatch={dispatch}></Son2>
      </div>
    </>
  );
};

const Son1: React.FC<UserType & { dispatch: React.Dispatch<ActionType> }> = (
  props
) => {
  const { dispatch, ...user } = props;

  const increaseAge = () => {
    dispatch({
      type: "INCREMENT",
      payload: 1,
    });
  };
  return (
    <div className="son1">
      <p> {JSON.stringify(user)} </p>
      <button onClick={increaseAge}>年龄+1</button>
    </div>
  );
};

const Son2: React.FC<UserType & { dispatch: React.Dispatch<ActionType> }> = (
  props
) => {
  const { dispatch, ...user } = props;
  const minusAge = () => {
    dispatch({
      type: "INCREMENT",
      payload: -2,
    });
  };
  return (
    <div className="son2">
      <p> {JSON.stringify(user)} </p>
      <button onClick={minusAge}>年龄-2</button>
      <hr />
      <GrandSon dispatch={dispatch}></GrandSon>
    </div>
  );
};

const GrandSon: React.FC<{ dispatch: React.Dispatch<ActionType> }> = (
  props
) => {
  const reset = () => {
    props.dispatch({
      type: "RESET",
    });
  };
  return (
    <>
      <h3>这是 GrandSon </h3>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default Father;
