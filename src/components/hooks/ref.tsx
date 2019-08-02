import { useRef } from "react";
import * as React from "react";


export const TextInputWithFocusButton = ()  => {

    const inputEl = useRef(null);

    const onButtonClick = () => {
        // `current` points to the mounted text input element
        inputEl.current.focus();
    };

    return (
        <div>
          <input ref={inputEl} type="text" />
          <button onClick={onButtonClick}>Focus the input</button>
        </div>
      );
}