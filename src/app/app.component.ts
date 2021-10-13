import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  template:
  `
    <div class="app">
      <h1>{{ title }}</h1>
      <h1 [innerHtml]="title"></h1>
      <h1 [innerText]="title"></h1>

      <img [src]="logo" width="5%"/>
      <img src={{logo}} width="5%"/>
      <br>

      <input type="text" [value]="name"/>
      <div>{{name}}</div>
    </div>
  `,
})
export class AppComponent {
  
  title: string;
  
  logo: string = 'img/logo.svg';
  // logo: string = 'img/angular-icon.svg';

  name: string = 'Bkacad';
  
  constructor() {
    this.title = 'Angular Course';
  }
}
