'use strict';
//tag::content[]
import app from'./app.md';

document.addEventListener('DOMContentLoaded', function onDOMContentLoaded() {
  document.querySelector('#app').innerHTML = `
    <h1>Hey! 📦 🚀</h1>
    <div>${app}</div>
  `;
}, false);
//end::content[]
