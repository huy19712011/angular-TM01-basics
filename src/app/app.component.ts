import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  template:
  `
    <div class="app">
      {{ title }}
      {{ title + '!' }}
      <div>
        {{ numberOne }}
        {{ numberTwo }}
        {{ numberOne + numberTwo}}
      </div>
      <div>
        {{ isHappy ? ':)' : ':(' }}
      </div>
    </div>
  `,
})
export class AppComponent {
  
  title: string;
  
  numberOne: number = 1;
  numberTwo: number = 2;
  isHappy: boolean = true;
  
  constructor() {
    this.title = 'Angular Course';
  }
}
