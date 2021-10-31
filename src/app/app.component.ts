import { Component } from '@angular/core';

interface Nav {
  link: string,
  name: string,
  exact: boolean
}

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  template: `
    <div class="app">
      <!-- <passenger-dashboard></passenger-dashboard> -->
      <!-- <passenger-viewer></passenger-viewer> -->
      <nav class="nav">
        <a *ngFor="let item of nav"
          [routerLink]="item.link"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{exact: item.exact}"
          >
          {{item.name}}
        </a>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  
  nav: Nav[] = [
    {
      link: '/',
      name: 'Home',
      exact: true,
    },
    {
      link: '/oops',
      name: '404',
      exact: false,
    },
  ];

  
  

}
