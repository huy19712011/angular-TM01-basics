import { Component, OnInit, Input } from '@angular/core';
import { Passenger } from './../../models/passenger.interface';
import { Baggage } from '../../models/baggage.interface';

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
          required
          #fullname="ngModel"
          [ngModel]="detail?.fullname">
        <div *ngIf="fullname.errors?.required $$ fullname.dirty" class="error">
          Passenger name is required
        </div>  
      </div>
      
      <div>
        Passenger id:
        <input
          type="number"
          name="id"
          required
          #id="ngModel"
          [ngModel]="detail?.id">
        <div *ngIf="id.errors?.required $$ id.dirty" class="error">
          Passenger id is required
        </div>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="checkedIn"
            [ngModel]="detail?.checkedIn"
            (ngModelChange)="toggleCheckIn($event)">
        </label>
      </div>

      <div *ngIf="form.value.checkedIn">
        Check in date:
        <input type="number"
          name="checkInDate"
          [ngModel]="detail?.checkInDate">
      </div>

      <div>
        Luggage:
        <!-- <select 
          name="baggage"
          [ngModel]="detail?.baggage">
          <option
            *ngFor="let item of baggage"
            [value]="item.key"
            [selected]="item.key === detail?.baggage">
            {{item.value}}
          </option>
        </select> -->

        <select 
          name="baggage"
          [ngModel]="detail?.baggage">
          <option
            *ngFor="let item of baggage"
            [ngValue]="item.key">
            {{item.value}}
          </option>
        </select>
      </div>
      
      <div>{{form.value | json}}</div>
      <div>Valid: {{form.valid | json}}</div>
      <div>Invalid: {{form.invalid | json}}</div>
    </form>
  `
})
export class PassengerFormComponent implements OnInit {

  @Input()
  detail!: Passenger;

  baggage: Baggage[] = [{
    key: 'none',
    value: 'No baggage'
  },{
    key: 'hand-only',
    value: 'Hand baggage'
  },{
    key: 'hold-only',
    value: 'Hold baggage'
  },{
    key: 'hand-hold',
    value: 'Hand and hold baggage'
  }];
  
  constructor() { }

  ngOnInit(): void {
  }

  toggleCheckIn(checkedIn: boolean) {

    if (checkedIn) {
      // this.detail.checkInDate = +new Date();
      this.detail.checkInDate = Date.now();
    }
  }

}
