import 'babel-polyfill';
//tag::content[]
import { h, render } from 'preact';
import HeloEhlo from './components/echo-ehlo';

render(
  <HeloEhlo/>,
  document.querySelector('#app')
);
//end::content[]
