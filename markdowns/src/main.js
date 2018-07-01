import 'babel-polyfill';
import marked from 'marked';

const mappings = require('./posts/**.md'); // { "filename.md": "filename.hash[8].md" }
Object.values(mappings).forEach(value => {
  fetch(value)
    .then(resp => resp.text())
    .then(text => marked(text))
    .then(html => document.querySelector('#app').innerHTML += html);
});
