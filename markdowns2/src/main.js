import marked from 'marked';

const years = require('./posts/**/*.md');

Object.keys(years).map(year => {
  const months = years[year];
  Object.keys(months).map(month => {
    const days = months[month];
    Object.keys(days).map(day => {
      const posts = days[day];
      Object.keys(posts)
        .map(src => posts[src])
        .forEach(uri => fetch(uri)
          .then(resp => resp.text())
          .then(markdown => marked(markdown))
          .then(html => document.querySelector('#app').innerHTML += html));
    });
  });
});

/*
// import 'babel-polyfill';

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
