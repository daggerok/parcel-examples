import * as React from 'react';
import { reducer } from '../store/Store';

const { Fragment, useReducer } = React;

export function UseReducerApp(): JSX.Element {
  const [state, dispatch] = useReducer(reducer, { message: 'reducer app' });

  return <Fragment>
    {console.log('reducer:', state)}
    <h1 onClick={() => {
      dispatch({ type: 'SET', payload: state.message });
    }}>
      { state.message } 📦 ⚛️ 🚀
    </h1>
  </Fragment>
}
