document.addEventListener('DOMContentLoaded', (e: Event) => {
  const app: HTMLDivElement = document.querySelector('#app');
  app.innerHTML = `
    <h1>Hey! 📦 🚀</h1>
  `;
  console.log(`event ${e.type} handled`);
}, false);
