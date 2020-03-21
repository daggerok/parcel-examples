import { useState } from 'preact/hooks';
import * as React from 'preact/compat';
import { JSXInternal } from 'preact/src/jsx';

type Element = JSXInternal.Element;

export function AppUseState(): Element {
  const [message, setMessage] = useState('Hello');
  const reversed = (str: string) => str.split('').reverse().join('');
  const toggleReverse = () => setMessage(reversed(message));

  return <h1 onClick={toggleReverse}>
    { message } 📦 🚀
  </h1>
}
