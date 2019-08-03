import { useKeyPress } from "./key-press";
import * as React from "react";

// Usage
export const KeyPresed = () => {
    // Call our hook for each key that we'd like to monitor
    const happyPress = useKeyPress('h');
    const sadPress = useKeyPress('s');
    const robotPress = useKeyPress('r');
    const foxPress = useKeyPress('f');
  
    return (
      <div>
        <div>click on one of these keys [h, s, r, f]</div>
        <div>
          {happyPress && '😊'}
          {sadPress && '😢'}
          {robotPress && '🤖'}
          {foxPress && '🦊'}
        </div>
      </div>
    );
  }
  