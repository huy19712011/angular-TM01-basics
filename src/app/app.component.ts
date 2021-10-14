import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  template:
  `
    <div class="app">
      <h1>{{ title }}</h1>
      <button (click)="handleClick($event)">Change name</button>
      <br>
      <input 
        type="text" 
        [ngModel] ="name"
        (ngModelChange)="handleChange($event)"
      />
      <input 
        type="text" 
        [(ngModel)] ="name"
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

  handleClick(event: any) {
    this.name = "Bkacad";
  }
  
  handleChange(value: string) {
    this.name = value;
  }
  

}
