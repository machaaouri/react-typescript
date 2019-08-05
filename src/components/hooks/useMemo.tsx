import { useState, useMemo } from 'react';
import * as React from 'react';


export const Memo = () => {

  const [wordIndex, setWordIndex] = useState(0);

  // Words we can flip through and view letter count
  const words = ['venus', 'earth', 'jupiter', 'uranus'];
  const word = words[wordIndex];

  // Returns number of letters in a word
  // We make it slow by including a large and completely unnecessary loop
  const computeLetterCount = (word: string) => {
    let i = 0;
    while (i < 1000000000) i++;
    return word.length;
  };
  
  // Memoize computeLetterCount so it uses cached return value if input didn't change
  const letterCount = useMemo(() => computeLetterCount(word), [word]);


  return (
      
    <div style={{ padding: '15px' }}>
      <h2>Compute number of letters (slow 🐌)</h2>
      <p>"{word}" has {letterCount} letters</p>
      <button
        onClick={() => {
          const next = wordIndex + 1 === words.length ? 0 : wordIndex + 1;
          setWordIndex(next);
        }}
      >
        Next word
      </button>
      <button
        onClick={() => {
          setWordIndex(wordIndex);
        }}
      >
        Same word
      </button>
    </div>
  );


}