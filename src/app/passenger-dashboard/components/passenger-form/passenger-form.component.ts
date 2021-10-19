import { Component, OnInit, Input } from '@angular/core';
import { Passenger } from './../../models/passenger.interface';

@Component({
  selector: 'passenger-form',
  // templateUrl: './passenger-form.component.html',
  styleUrls: ['./passenger-form.component.scss'],
  template: `
    <form #form="ngForm" novalidate>
      {{detail | json}}
      <div>
        Passenger name:
        <input
          type="text"
          name="fullname"
          [ngModel]="detail?.fullname">
      </div>
      <div>
        Passenger id:
        <input
          type="number"
          name="id"
          [ngModel]="detail?.id">
      </div>
      {{form.value | json}}
    </form>
  `
})
export class PassengerFormComponent implements OnInit {

  @Input()
  detail!: Passenger;
  
  constructor() { }

  ngOnInit(): void {
  }

}
