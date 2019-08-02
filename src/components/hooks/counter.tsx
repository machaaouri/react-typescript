import * as React from 'react';
import { useState, useEffect, useReducer } from 'react';

export const Counter = () => {

    const [count,setCount] = useState(0);

    useEffect(() => {
            // update document title using the browser API
            document.title = `You clicked ${count} times`;
    },[count]) // Only re-run the effect if count changes
    

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}

// Counter using a reducer
type State = {count: number};
type Actions ={type: "increment" | "decrement"| "reset"}

const initialState : State = {count: 0};
const initialCount = 0;

const init = (initialCount: number): State => {
    return {count: initialCount}
}

const reducer = (state: State, action: Actions) : State => {

    switch(action.type){
        case "increment":
            return {count: state.count + 1};
        case "decrement":
            return {count: state.count - 1};
        case "reset":
                return init(initialCount);
        default:
            return state;
    }
}

export const CounterReducer = () => {

    //const [state, dispatch] = useReducer(reducer,initialState);
    const [state, dispatch] = useReducer(reducer,initialCount,init);
    return (
        <>
          Count: {state.count}
          <button
            onClick={() => dispatch({type: 'reset'})}>

            Reset
          </button>
          <button onClick={() => dispatch({type: 'increment'})}>+</button>
          <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        </>
      );
}


