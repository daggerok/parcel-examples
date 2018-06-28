import React from 'react';
import { render } from 'react-dom';
import { EchoEhlo } from './components/echo-ehlo';

render(
  <EchoEhlo/>,
  document.querySelector('#app')
);
