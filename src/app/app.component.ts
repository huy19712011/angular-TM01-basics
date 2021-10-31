import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  template: `
    <div class="app">
      <!-- <passenger-dashboard></passenger-dashboard> -->
      <!-- <passenger-viewer></passenger-viewer> -->
      <a routerLink="/">
        Home
      </a>
      <a routerLink="/oops">
        404
      </a>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  
  

  
  

}
