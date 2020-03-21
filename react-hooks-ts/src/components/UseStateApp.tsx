import * as React from 'react';
const { useState } = React;

export function UseStateApp(): JSX.Element {
  const [state, setState] = useState<string>('Store');
  const reverse = () => setState(state.split('').reverse().join(''));

  return (
    <h1 onClick={reverse}>
      state: { state } 📦 ⚛️ 🚀
    </h1>
  );
}
