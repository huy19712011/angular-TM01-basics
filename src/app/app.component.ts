import { Component } from '@angular/core';

interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean,
}
@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  template: `
    <div class="app">
      <h3>Airline Passengers</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index">
          {{i}}: {{passenger.fullname}}
        </li>
      </ul>
      <h3>Airline Passengers</h3>
      <ul>
        <ng-template ngFor let-passenger let-i="index" [ngForOf]="passengers">
          <li>
            {{i}}: {{passenger.fullname}}
          </li>
        </ng-template>
      </ul>
    </div>
  `
})
export class AppComponent {
  
  passengers: Passenger[] = [
    {
      id: 1,
      fullname: 'Stephen',
      checkedIn: true
    },
    {
      id: 2,
      fullname: 'Rose',
      checkedIn: false
    },
    {
      id: 3,
      fullname: 'James',
      checkedIn: true
    },
    {
      id: 1,
      fullname: 'Louise',
      checkedIn: true
    },
    {
      id: 1,
      fullname: 'Tina',
      checkedIn: false
    },
  ];

  
  

}
