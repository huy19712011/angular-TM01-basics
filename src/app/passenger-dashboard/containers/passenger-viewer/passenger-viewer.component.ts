import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { Passenger } from './../../models/passenger.interface';

import { PassengerDashboardService } from '../../passenger-dashboard.service';

@Component({
  selector: 'passenger-viewer',
  // templateUrl: './passenger-viewer.component.html',
  styleUrls: ['./passenger-viewer.component.scss'],
  template: `
    <div>
      <button (click)="goBack()">
        &lsaquo; Go back
      </button>
      <passenger-form
        [detail]="passenger"
        (update)="onUpdatePassenger($event)">

      </passenger-form>
    </div>
  `
})
export class PassengerViewerComponent implements OnInit {

  passenger!: Passenger;
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private passengerService: PassengerDashboardService) { }

  ngOnInit(): void {

    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => this.passengerService.getPassenger(Number(params.get('id')))),
      )
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

  goBack() {
    this.router.navigate(['/passengers']);
  }

}
