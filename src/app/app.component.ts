import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  template: `
    <div class="app">
      <!-- <passenger-dashboard></passenger-dashboard> -->
      <!-- <passenger-viewer></passenger-viewer> -->
      <nav class="nav">
        <a 
          routerLink="/"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{exact: true}"
          >
          Home
        </a>
        <a 
          routerLink="/oops"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{exact: true}"
          >
          404
        </a>
        <!-- <a 
          routerLink="/oops2"
          routerLinkActive="active"
          >
          404
        </a> -->
      </nav>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  
  

  
  

}
