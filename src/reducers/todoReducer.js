export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NEW":
      return { ...state, todos: state.todos.concat(action.payload) };

    case "REMOVE":
      // remove the element
      const updated = state.todos.filter((i) => i.id !== action.payload);
      // update the state
      return { ...state, todos: updated };

    case "CLEAR":
      return { ...state, todos: [] };

    default:
      return state;
  }
};

export const initialState = {
  todos: [],
  isDarkMode: true,
};
