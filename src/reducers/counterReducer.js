// the function that decides how the state will change
// the return value of the reducer function is the last value of the state.
export const reducer = (state, action) => {
  if (action.type === "ADD") {
    return { count: state.count + 1 };
  }
  if (action.type === "SUBTRACT") {
    return { count: state.count - 1 };
  }
};
