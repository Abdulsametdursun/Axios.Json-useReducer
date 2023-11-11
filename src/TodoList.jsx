import { useReducer } from "react";
import { initialState, todoReducer } from "./reducers/todoReducer";

const TodoList = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      title: e.target[0].value,
    };

    // give the add order to the ruducer
    // send the element
    dispatch({ type: "ADD_NEW", payload: newTodo });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="Submit">Send</button>
        <button type="button" onClick={() => dispatch({ type: "CLEAR" })}>
          Clear
        </button>
      </form>

      <ul className="d-flex flex-column gap-4 my-4">
        {state.todos.map((todo) => (
          <li className="d-flex justify-content-between">
            <span>{todo.title}</span>

            <button
              onClick={() => dispatch({ type: "REMOVE", payload: todo.id })}
              className="btn btn-sm btn-danger"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
