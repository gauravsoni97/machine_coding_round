import React, { useReducer } from 'react';


// Reducer function
function reducerFunc(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    
    case 'DECREMENT':
      return { count: state.count - 1 };
    
    case 'RESET':
      return { count: 0 };
    
    case 'SET':
      return { count: action.payload };
    
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducerFunc, {count:0});

  return (
    <div>
      <h2>Count: {state.count}</h2>
      
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>
        +1
      </button>
      
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>
        -1
      </button>
      
      <button onClick={() => dispatch({ type: 'RESET' })}>
        Reset
      </button>
      
      <button onClick={() => dispatch({ type: 'SET', payload: 10 })}>
        Set to 10
      </button>
    </div>
  );
}