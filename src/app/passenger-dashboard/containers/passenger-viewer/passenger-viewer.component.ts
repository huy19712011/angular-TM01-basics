import { Component, OnInit } from '@angular/core';

import { Passenger } from './../../models/passenger.interface';

import { PassengerDashboardService } from '../../passenger-dashboard.service';

@Component({
  selector: 'passenger-viewer',
  // templateUrl: './passenger-viewer.component.html',
  styleUrls: ['./passenger-viewer.component.scss'],
  template: `
    <div>
      {{passenger | json}}
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

}
