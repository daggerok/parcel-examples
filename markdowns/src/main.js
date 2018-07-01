import 'babel-polyfill';
//end::content[]
import marked from 'marked';

const mappings = require('./posts/**.md'); // { "filename.md": "filename.hash[8].md" }
const keys = Object.keys(mappings);
const values = Object.values(mappings);
values.forEach(value => {
  fetch(value)
    .then(resp => resp.text())
    .then(text => marked(text))
    .then(html => document.querySelector('#app').innerHTML += html);
});
//end::content[]

/*
  import('./posts/**.md')
    .then(data => data.default)
    .then(mapping => {

      const keys = Object.keys(mapping); // src: filename.md
      const values = Object.values(mapping); // dist: filename.hash[8].md
      values.forEach(value => {
        fetch(value)
          .then(resp => resp.text())
          .then(text => marked(text))
          .then(html => document.querySelector('#app').innerHTML += html);
      })
    });
*/
