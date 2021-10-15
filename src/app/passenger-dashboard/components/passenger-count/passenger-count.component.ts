import { Component, OnInit, Input } from '@angular/core';
import { Passenger } from './../../models/passenger.interface';

@Component({
  selector: 'passenger-count',
  // templateUrl: './passenger-count.component.html',
  styleUrls: ['./passenger-count.component.scss'],
  template: `
  <div>
  <h3>Airline Passengers</h3>
  <div>
  <!-- Total passengers: {{items.length}} -->
  Total checked in: {{checkedInCount()}} / {{items.length}}
  </div>
  </div>
  `
})
export class PassengerCountComponent implements OnInit {
  
  @Input()
  items: Passenger[] = [];
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  checkedInCount(): number {
    
    if (!this.items) return 0;
    
    return this.items
                  .filter((passenger: Passenger) => passenger.checkedIn)
                  .length;
  }
  
}
