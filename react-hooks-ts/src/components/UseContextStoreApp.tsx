import * as React from 'react';
import { Store, reducer } from '../store/Store';

const { Fragment, useContext, useReducer } = React;

export function UseContextStoreApp(): JSX.Element {
  const store = useContext(Store); // see main.tsx => StoreProvider
  const [state, dispatch] = useReducer(reducer, store);

  return <Fragment>
    {console.log('store:', store, 'state:', state)}
    <h1 onClick={() => {
      dispatch({ type: 'SET', payload: state.message });
    }}>
      { store.message } 📦 ⚛️ 🚀 { state.message }
    </h1>
  </Fragment>
}
