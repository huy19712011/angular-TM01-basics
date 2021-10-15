import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  template:
  `
    <div class="app">
      <input 
        type="text"
        [value]="name"
        (input)="handleChange($event)"
      />
      <div *ngIf="name.length > 1">
        Searching for... {{name}}
      </div>
      <ng-template [ngIf]="name.length > 1">
        <div>
          Searching for... {{name}}
        </div>
      </ng-template>
    </div>
  `
})
export class AppComponent {
  
  title: string;
  
  logo: string = 'img/logo.svg';
  // logo: string = 'img/angular-icon.svg';

  name: string = '';
  
  constructor() {
    this.title = 'Angular Course';
  }

  handleChange(event: any) {
    this.name = event.target.value;
  }
  
  

}
