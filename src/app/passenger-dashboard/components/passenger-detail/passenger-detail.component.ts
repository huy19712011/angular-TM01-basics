import { Component, OnInit, Input } from '@angular/core';
import { Passenger } from './../../models/passenger.interface';

@Component({
  selector: 'passenger-detail',
  // templateUrl: './passenger-detail.component.html',
  styleUrls: ['./passenger-detail.component.scss'],
  template: `
    <div>
      <span 
        class="status"
        [class.checked-in]="detail.checkedIn"
        >
      </span>
      {{detail.fullname}}
      
      <div class="date">
        Check in date: {{detail.checkInDate
          ? (detail.checkInDate | date: 'y, MMMM d' | uppercase) 
          : 'Not checked in'}}
      </div>
      
      <div class="children">
        Children: {{detail.children?.length || 0}}
      </div>
    </div>

  `
})
export class PassengerDetailComponent implements OnInit {

  @Input()
  detail!: Passenger;
  
  constructor() { }

  ngOnInit(): void {
  }

}
