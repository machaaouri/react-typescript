import { useState, useRef, useEffect } from "react";
import * as React from "react";


export const Hover =() => {
    const {ref, value} = useHover();
  
    return (
      <div ref={ref}>
        Hover me {value ? '😁' : '☹️'}
      </div>
    );
  }
  

const useHover = () => {
    const [value, setValue] = useState(false);
  
    const ref = useRef(null);
  
    const handleMouseOver = () => setValue(true);
    const handleMouseOut = () => setValue(false);
  
    useEffect(
      () => {
        const node = ref.current;
        if (node) {
          node.addEventListener('mouseover', handleMouseOver);
          node.addEventListener('mouseout', handleMouseOut);
  
          return () => {
            node.removeEventListener('mouseover', handleMouseOver);
            node.removeEventListener('mouseout', handleMouseOut);
          };
        }
      },
      [ref.current] // Recall only if ref changes
    );
  
    return {ref, value};
  }