import { h, render } from 'preact';
import { useState } from 'preact/hooks';
import React from 'preact/compat';

function App() {
  const [message, setMessage] = useState('Hello');
  const reversed = str => str.split('').reverse().join('');
  const toggleReverse = () => setMessage(reversed(message));

  return <h1 onClick={toggleReverse}>
    { message } 📦 🚀
  </h1>
}

render(
  <App/>,
  document.querySelector('#app')
);
