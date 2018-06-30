'use strict';

import app from './app.yaml';

document.addEventListener('DOMContentLoaded', function onDOMContentLoaded() {
  document.querySelector('#app').innerHTML = `
    <h1>Hey! 📦 🚀</h1>
    <pre>${JSON.stringify(app, null, 2)}</pre>
  `;
}, false);
