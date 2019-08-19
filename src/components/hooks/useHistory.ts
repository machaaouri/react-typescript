import { useReducer, useCallback } from "react";

type State = {
    // Array of previous state values updated each time we push a new state
    past: Array<boolean[]>,
    // Current state value
    present: boolean[],
    // Will contain "future" state values if we undo (so we can redo)
    future: Array<boolean[]>
}

// Initial state that we pass into useReducer
const initialState : State = {
    past: [],
    present: null,
    future: []
};

type Action = { type :"UNDO" | "REDO" } | {type: "SET" | "CLEAR", payload: boolean[]}


const reducer = (state: State, a: Action) : State => {

    const {past, present, future} = state;

    switch(a.type){

        case "UNDO":
            const previous = past[past.length - 1];
            const newPast = past.slice(0, past.length - 1);
            return {
                past: newPast,
                present: previous,
                future: [present, ...future]
              };
        
        case 'REDO':
            const next = future[0];
            const newFuture = future.slice(1);

            return {
                past: [...past, present],
                present: next,
                future: newFuture
            };

        case 'CLEAR':

            return {        
                ...initialState,
                present: a.payload
            }

        case "SET" : 
            if (present == a.payload)
                return state;
            console.log(past);
            return { 
                     past: [...past, present],
                     present: a.payload,
                     future: []}

        default:
            return state;
    }
}


export const useHistory = (initialPresent: []) => {

     const [state,dispatch] = useReducer(reducer, {...initialState, present: initialPresent});

     const canUndo = state.past.length !== 0;
     const canRedo = state.future.length !== 0;
   
    // Setup our callback functions
    // We memoize with useCallback to prevent unnecessary re-renders

     const undo = () => dispatch({type:"UNDO"});

     const redo = useCallback(
        () => {
          if (canRedo) {
            dispatch({ type: 'REDO' });
          }
        },
        [canRedo, dispatch]
      );
    
    const clear = useCallback(
        () => {
            dispatch({type:"CLEAR", payload: initialPresent })
        },
        [dispatch]
    )

     const set = useCallback(newPresent => dispatch({type:"SET", payload: newPresent}), [dispatch]);


     return {state: state.present, set, undo, redo, clear, canUndo, canRedo};
}