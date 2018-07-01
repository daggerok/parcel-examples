import Controller from './controller.js';

export default {
  controller: Controller,
  template: `
    <header ng-click="$ctrl.toggleGreeting()">header</header>
    
    <div class="container-fluid">
      <div class="row">{{ $ctrl.greeting }}</div>
    </div>
    
    <footer>footer</footer>
  `,
}
