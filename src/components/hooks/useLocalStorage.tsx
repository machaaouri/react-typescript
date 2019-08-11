import { useState } from "react";
import * as React from "react";


// Usage
export const MylocalStorage = () => {

    const [name, setName] = useLocalStorage('name', 'Houssame');
  
    return (
      <div>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
    );
  }
  



const useLocalStorage = (key:string, initialValue: string) => {

    const [storedValue, setStoredValue] = useState(() => {
    
        try
        {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } 
        catch (error) {
            console.log(error);
            return initialValue;
        }
    });

    const setValue = (value: (v: string) => string | string) => {
        try {

        // Allow value to be a function so we have same API as useState
        const valueToStore =
            value instanceof Function ? value(storedValue) : value;
        // Save state
        setStoredValue(valueToStore);
        // Save to local storage
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
        // A more advanced implementation would handle the error case
        console.log(error);
        }
    }

  return [storedValue, setValue];
}