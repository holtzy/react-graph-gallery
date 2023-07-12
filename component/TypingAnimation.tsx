import { type } from 'os';
import React, { useEffect, useRef, useState } from 'react';

const wordList = ['unique', 'performant', 'interactive', 'insightful'];
const SPEED = 40; // time between 2 letters
const PAUSE = 5000;

export const TypingAnimation = () => {
  const ref = useRef<HTMLSpanElement>(null);

  let letterIndex = 0;
  let wordIndex = 0;

  const typeWriter = () => {
    const word = wordList[wordIndex];

    if (!ref?.current) {
      return;
    }

    // If some letters are still needed to finish the word
    if (letterIndex < word.length) {
      ref.current.innerHTML += word.charAt(letterIndex);
      letterIndex++;
      setTimeout(typeWriter, SPEED);
    } else {
      // The word is over. Wait a bit before starting a new one.
      setTimeout(() => {
        if (!ref?.current) {
          return;
        }

        ref.current.innerHTML = '';
        letterIndex = 0;

        if (wordIndex >= wordList.length - 1) {
          wordIndex = 0;
        } else {
          wordIndex += 1;
        }
        typeWriter();
      }, PAUSE);
    }
  };

  useEffect(() => {
    typeWriter();
  });

  return (
    <span style={{ width: 250, display: 'inline-block' }}>
      <span ref={ref} className="gradient with-blinking-cursor">
        {''}
      </span>
    </span>
  );
};
