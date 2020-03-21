// see: https://www.youtube.com/watch?v=dpw9EHDh2bM
import * as React from 'react';

interface MyAppState {
  message: string;
}

const initialState: MyAppState = {
  message: 'hello world',
};

/* use that in any component to access global state */
export const Store = React.createContext<MyAppState>(initialState);

const reversed: (str: string) => string =
  (str: string) => str.split('').reverse().join('');

const reducerMapper = {
  'SET': (action, state) => ({ ...state, message: reversed(action.payload) }),
};

export function reducer(state, action): MyAppState {
  console.log('handling action', action, 'with', state, 'state');
  const maybeNewState = reducerMapper[action.type](action, state);
  console.log('maybe new state', maybeNewState);
  return maybeNewState || { ...state };
}

/* use that in root ReactDOM.render function to share global state */
export function StoreProvider(props: any): JSX.Element {
  return <Store.Provider value={initialState}>
    {props.children}
  </Store.Provider>
}
