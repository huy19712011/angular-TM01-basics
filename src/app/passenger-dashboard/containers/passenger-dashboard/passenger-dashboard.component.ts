import { Component, OnInit } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';
import { PassengerDashboardService } from './../../passenger-dashboard.service';

@Component({
  selector: 'passenger-dashboard',
  // templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss'],
  template: `
    <div>
      <passenger-count 
        [items]="passengers"
        >
      </passenger-count>

      <div *ngFor="let passenger of passengers;">
        {{passenger.fullname}}
      </div>
      
      <passenger-detail 
        *ngFor="let passenger of passengers"
        [detail]="passenger"
        (edit)="handleEdit($event)"
        (remove)="handleRemove($event)"
        >
      </passenger-detail>
    </div>
  `
})
export class PassengerDashboardComponent implements OnInit {

  // passengers: Passenger[];
  
  passengers: Passenger[] = [];
  // passengers!: Passenger[];
  
  constructor(private passengerDashboardService: PassengerDashboardService) {}

  ngOnInit(): void {

    console.log('ngOnInit...');
    
    this.passengerDashboardService
      .getPassengers()
      .subscribe((data: Passenger[]) => this.passengers = data);
  }

  handleEdit(event: Passenger) {

    this.passengerDashboardService
      .updatePassenger(event)
      .subscribe((data: Passenger) => {
        this.passengers = this.passengers.map((passenger: Passenger) => {
          if (passenger.id === event.id) {
            passenger = Object.assign({}, passenger, event);
            // console.log(event);
            // console.log(data);
          }

          return passenger;
        })
      });
    
    // this.passengers = this.passengers
    //                         .map((passenger: Passenger) => {

    //                           if (passenger.id === event.id) {
    //                             // shallow copy (2 ways)
    //                             passenger = Object.assign({}, passenger, event);
    //                             //passenger = {...event};

    //                             // deep copy (1 way)
    //                             //passenger = JSON.parse(JSON.stringify(event));
    //                           }
                              
    //                           return passenger;
    //                         });

                            //console.log(this.passengers);
  }
  
  handleRemove(event: Passenger) {

    this.passengerDashboardService
      .deletePassenger(event)
      .subscribe((data: Passenger) => {
        this.passengers = this.passengers
          .filter((passenger: Passenger) => passenger.id != event.id)
      });
    
    // this.passengers = this.passengers
    //                         .filter((passenger: Passenger) => {
    //                           return passenger.id != event.id;
    //                         });
  }
}
