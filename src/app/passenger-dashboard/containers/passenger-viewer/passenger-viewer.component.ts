import { Component, OnInit } from '@angular/core';

import { Passenger } from './../../models/passenger.interface';

import { PassengerDashboardService } from '../../passenger-dashboard.service';

@Component({
  selector: 'passenger-viewer',
  // templateUrl: './passenger-viewer.component.html',
  styleUrls: ['./passenger-viewer.component.scss'],
  template: `
    <div>
      <passenger-form
        [detail]="passenger"
        (update)="onUpdatePassenger($event)">

      </passenger-form>
    </div>
  `
})
export class PassengerViewerComponent implements OnInit {

  passenger!: Passenger;
  
  constructor(private passengerService: PassengerDashboardService) { }

  ngOnInit(): void {

    this.passengerService
      .getPassenger(1)
      .subscribe((data: Passenger) => this.passenger = data);
  }

  onUpdatePassenger(event: Passenger) {
    
    console.log(event);
    this.passengerService
      .updatePassenger(event)
      .subscribe((data: Passenger) => {
        // this.passenger = Object.assign({}, this.passenger, event);
        this.passenger = {...this.passenger, ...event};
      });
  }

}
