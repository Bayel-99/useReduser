import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment-10":
      return { count: Math.min(state.count + 10, 40) };
    case "increment-40":
      return { count: Math.min(state.count + 20, 40) };
    case "decrement-7":
      return { count: Math.max(state.count - 7, 0) };
    case "decrement-3":
      return { count: Math.max(state.count - 3, 0) };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button
        disabled={state.count >= 40}
        onClick={() => dispatch({ type: "increment-10" })}
      >
        +10
      </button>
      <button
        disabled={state.count >= 40}
        onClick={() => dispatch({ type: "increment-40" })}
      >
        +20
      </button>
      <button
        disabled={state.count <= 0}
        onClick={() => dispatch({ type: "decrement-7" })}
      >
        -7
      </button>
      <button
        disabled={state.count <= 0}
        onClick={() => dispatch({ type: "decrement-3" })}
      >
        -3
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
};

export default App;
