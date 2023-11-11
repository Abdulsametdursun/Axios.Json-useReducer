import "bootstrap/dist/css/bootstrap.min.css";
import { useReducer, useState } from "react";
import { reducer } from "./reducers/counterReducer";

const initialState = {
  count: 0,
};

const Counter = () => {
  /* State management is used together with useState in cases where it is difficult to manage.
  ? enter two parameters:
  >> reducer: decides how the state will change (decision mechanism)
  >> initialState: the first data of we'll going to use
  ? information given back to us:
  >> updated state
  >> the function that transfers the orders we give to the reducer for updating the state
  */
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="d-flex justify-content-between my-4 align-items-center">
      <button onClick={() => dispatch({ type: "SUBTRACT" })}>Subtract</button>

      <span className="lead fw-bold">{state.count}</span>

      <button onClick={() => dispatch({ type: "ADD" })}>Add</button>
    </div>
  );
};

export default Counter;
