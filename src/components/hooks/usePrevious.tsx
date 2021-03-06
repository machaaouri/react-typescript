import { useRef, useEffect, useState } from "react";
import * as React from "react";


// Usage
export const Previous = () => {
    // State value and setter for our example
    const [count, setCount] = useState(0);
    
    // Get the previous value (was passed into hook on last render)
    const prevCount = usePrevious(count);
    
    // Display both current and previous count value
    return (
      <div>
        <h1>Now: {count}, before: {prevCount}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
     );
  }
  


// Hook
function usePrevious(value) {
    // The ref object is a generic container whose current property is mutable ...
    // ... and can hold any value, similar to an instance property on a class
    const ref = useRef();
    // Store current value in ref
    useEffect(() => {
      ref.current = value;
      console.log(ref.current); // shows late after the react component (<Previous />) is mounted
    }, [value]); // Only re-run if value changes
    console.log(ref.current); // Shows first as soon as the function is called
    // Return previous value (happens before update in useEffect above)
    return ref.current;
  }