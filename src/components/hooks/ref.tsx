import { useRef } from "react";
import * as React from "react";


export const TextInputWithFocusButton = ()  => {

    const [value,setValue] = React.useState<string>('');

    const onChange = (event) => {
            setValue(event.target.value)
    }

    const inputEl = useRef<HTMLInputElement>(null);

    const onButtonClick = () => {
        // `current` points to the mounted text input element
        inputEl.current.focus();
    };

    return (
        <div>
          <input ref={inputEl} type="text"  value={value} onChange={(e) => onChange(e)} />
          <button onClick={onButtonClick}>Focus the input</button>
        </div>
      );
}