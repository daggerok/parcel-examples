import * as Preact from 'preact';
import * as React from 'preact/compat';
import { AppUseState } from './components/AppUseState';

const { h, render } = Preact;

render(
  <React.Fragment>
    <p>useState:</p>
    <AppUseState/>
    <br/>
  </React.Fragment>,
  document.querySelector('#app')
);
