(function main() {
  'use strict';
  document.addEventListener('DOMContentLoaded', function onDOMContentLoaded() {
    const obj = { ololo: 'trololo' };
    document.querySelector('#app').textContent = JSON.stringify({
      ...obj,
      hey: 'ho!',
    });
  }, false);
})();
