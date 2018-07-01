import 'babel-polyfill';
import marked from 'marked';

const yearsObject = require('./posts/**/*.md');

Object.keys(yearsObject)
  .map(year => {
    const monthsObject = yearsObject[year];
    Object.keys(monthsObject).map(month => {
      const daysObject = monthsObject[month];
      Object.keys(daysObject).map(day => {
        const postsMapping = daysObject[day];
        Object.keys(postsMapping)
          .map(src => postsMapping[src])
          .forEach(distPath => fetch(distPath)
            .then(resp => resp.text())
            .then(markdown => marked(markdown))
            .then(html => document.querySelector('#app').innerHTML += html));
      });
    });
  });

/*
const yearsObject = require('./posts/!**!/!*.md');
const years = Object.keys(yearsObject);

Promise.all(years.map(year => {
  const monthsObject = yearsObject[year];
  const months = Object.keys(monthsObject);

  return Promise.all(months.map(month => {
    const daysObject = monthsObject[month];
    const days = Object.keys(daysObject);

    return Promise.all(days.map(day => {
      const postsMapping = daysObject[day];      // {"ololo":"/ololo.hash[8].md"}
      const sources = Object.keys(postsMapping); // ["ololo"]
      sources.map(src => postsMapping[src])      // ["/ololo.hash[8].md"]
        .forEach(distPath => fetch(distPath)
          .then(resp => resp.text())
          .then(markdown => marked(markdown))
          .then(html => document.querySelector('#app').innerHTML += html));
    }));
  }));
})).catch(err => console.error(err));
*/
