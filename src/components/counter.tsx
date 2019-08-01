import * as React from 'react';
import { useState, useEffect } from 'react';

export const Counter = () => {

    const [count,setCount] = useState(0);

    if(count != 1){
        useEffect(() => {
            // update document title using the browser API
            document.title = `You clicked ${count} times`;
        },[count]) // Only re-run the effect if count changes
    }

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}