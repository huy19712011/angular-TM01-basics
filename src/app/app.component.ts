import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  template:
  `
    <div class="app">
      <h1>{{ title }}</h1>
      <button (click)="handleClick(username.value)">Change name</button>
      <br>
      <input 
        type="text" #username
      />
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

  handleClick(value: string) {
    console.log(value);
    this.name = value;
  }
  
  

}
