import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './components/App';
import { StoreProvider } from './store/Store';
import { UseStateApp } from './components/UseStateApp';
import { UseReducerApp } from './components/UseReducerApp';
import { UseContextStoreApp } from './components/UseContextStoreApp';

const { render } = ReactDOM;

render(
  <React.Fragment>
    <p>app:</p>
    <App/>
    <br/>

    <p>useState app:</p>
    <UseStateApp/>
    <br/>

    <p>Provider useContext app:</p>
    <StoreProvider>
      <UseContextStoreApp/>
    </StoreProvider>
    <br/>

    <p>useReducer app:</p>
    <UseReducerApp />
    <br/>
  </React.Fragment>,
  document.querySelector('#app')
);
