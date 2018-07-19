import { fromEvent } from 'rxjs';

fromEvent(document, 'DOMContentLoaded').subscribe((e: Event) => {
  const button: HTMLButtonElement = document.querySelector('#greet');
  fromEvent(button, 'click').subscribe(e => {
    document.querySelector('#message').innerHTML = `
      <h1>Hey! 📦 🚀</h1>
    `;
  });
});
