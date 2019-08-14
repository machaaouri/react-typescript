import { useEffect, useRef, useState } from "react";
import * as React from "react";


export const OnClickOutside = () => {
    // Create a ref that we add to the element for which we want to detect outside clicks
  const ref = useRef();
  // State for our modal
  const [isModalOpen, setModalOpen] = useState(false);
  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, () => setModalOpen(false));

  return (
    <div>
      {isModalOpen ? (
        <div ref={ref}>
          👋 Hey, I'm a modal. Click anywhere outside of me to close.
        </div>
      ) : (
        <button onClick={() => setModalOpen(true)}>Open Modal</button>
      )}
    </div>
  );


}


const useOnClickOutside = (ref, handler: () => void) => {

    useEffect(() => {

        const listener = (event: MouseEvent) => {
            if(!ref.current || ref.current.contains(event.target)) return;
            handler()
        }

        document.addEventListener('mousedown', listener);

      return () => {
        document.removeEventListener('mousedown', listener);
      };
    },[ref, handler])
}