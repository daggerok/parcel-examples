import 'babel-polyfill';
//tag::content[]
const obj = { ololo: 'trololo' };

document.querySelector('#app').textContent = JSON.stringify({
  ...obj,
  hey: 'ho!',
});
//end::content[]
