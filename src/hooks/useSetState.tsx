import { useState } from "react";

export const useSetState = <State,>(initialState: State | (() => State)) => {
  const [state, setState] = useState<State>(initialState);
  const getState = async (): Promise<State> => {
    let state: unknown;
    console.log({ state }, "SSSSSSSSS state");
    await setState((currentState: State) => {
      state = currentState;
      console.log({ state }, "SSSSSSSSS state");

      return currentState;
    });

    return state as State;
  };

  return [state, setState, getState] as [
    State,
    typeof setState,
    typeof getState
  ];
};
